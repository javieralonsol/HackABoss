import { useContext } from 'react';

import { Avatar } from './Avatar';
import { AuthContext } from './providers/AuthProvider';
import { fetchF } from '../helpers/helpers';
import { AttachedFile } from './AttachedFile';

export const Solution = ({ service, solutions, setSolutions, solution, usersArray, setLoadingOn }) => {
  const [user] = useContext(AuthContext);

  // console.log('Pintando Solution');

  const handleClickSetChosenSolution = async (event) => {
    setLoadingOn(true);
    const choosenSolutionId = parseInt(event.target.dataset.solutionid);

    const fetchChosen = await fetchF(`http://localhost:3020/api/v1/solutions/${event.target.dataset.serviceid}?limit=300`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ id_solution: choosenSolutionId }),
    });

    if (fetchChosen.status === 200) {
      const solutionsCopy = solutions.map((solution) => {
        return { ...solution, choosen_solution: solution.id === choosenSolutionId ? 1 : 0 };
      });
      setSolutions(solutionsCopy);
    }
    setLoadingOn(false);
  };

  return (
    <li className={solution.choosen_solution ? 'chosen-solution' : ''}>
      {solution.choosen_solution ? <div className="chosen-solution-div">Solución elegida por el autor</div> : ''}
      <Avatar user={usersArray[solution.id_user]} timestamp={solution.timestamp} />
      {solution.comment}
      {solution.file_name && <AttachedFile fileName={solution.file_name} />}
      {service.id_user === user.id && !solution.choosen_solution && (
        <button
          className="chosen-solution-button buttonlike"
          onClick={handleClickSetChosenSolution}
          data-serviceid={service.id}
          data-solutionid={solution.id}
        >
          Marcar como
          <br />
          solución elegida
        </button>
      )}
    </li>
  );
};
