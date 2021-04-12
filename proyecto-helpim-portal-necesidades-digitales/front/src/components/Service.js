import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchF } from '../helpers/helpers';
import { AttachedFile } from './AttachedFile';
import { Avatar } from './Avatar';
import { AuthContext } from './providers/AuthProvider';
import { Solution } from './Solution';
import { Response } from './Response';

export const Service = ({
  handleClickForLogin,
  service,
  short = false,
  usersArrayFirst,
  setModalContent,
  setLoadingOn,
}) => {
  const [user] = useContext(AuthContext);
  const [solutions, setSolutions] = useState([]);
  const [usersArray, setUsersArray] = useState(usersArrayFirst);
  const [offset, setOffset] = useState(0);
  const [responseFormVisible, setResponseFormVisible] = useState(false);
  const [updateSolutions, setUpdateSolutions] = useState(0);

  // console.log('Pintando Service');

  useEffect(() => {
    const getSolutionsAndUsers = async () => {
      setLoadingOn(true)
      const fetchSolutions = await fetchF(
        `http://localhost:3020/api/v1/solutions/${service.id}?limit=100&offset=${offset}`
      );
      const solutionsArray = fetchSolutions.body;

      const usersArrayCopy = usersArray;

      for (const service of solutionsArray) {
        if (!usersArrayCopy[service.id_user]) {
          const fetchUser = await fetchF(`http://localhost:3020/api/v1/users/profile/${service.id_user}`);
          usersArrayCopy[service.id_user] = fetchUser.body;
        }
      }
      setUsersArray(usersArrayCopy);

      // setSolutions([...solutions, ...solutionsArray]);
      setSolutions(solutionsArray);
      setLoadingOn(false)
    };
    getSolutionsAndUsers();
  }, [service.id, usersArray, offset, updateSolutions]);

  return (
    <li>
      <div className="cat-date">
        <Avatar user={usersArray[service.id_user]} timestamp={service.timestamp} />
        <Link
          className="category"
          to={`/services/${service.category.toLowerCase()}`}
        >
          Categoría: {service.category}
        </Link>
      </div>
      {short ? (
        <Link to={`/services/${service.id}`}>
          <h2>{service.title}</h2>
        </Link>
      ) : (
        <h2>{service.title}</h2>
      )}
      <div className="service-body">
        {short
          ? `${service.explication.substr(0, 200)}${service.explication.length > 200 ? '...' : ''}`
          : service.explication}
      </div>
      <AttachedFile fileName={service.file_name} />
      <div className="service-footer">
        Respuestas: {solutions.length}
        {short ? (
          <Link
            className="buttonlike"
            to={`/services/${service.id}`}
          >
            Ampliar
          </Link>
        ) : (
          service.id_user !== user.id && (
            <a
              className="buttonlike"
              href={`/services/${service.id}`}
              onClick={(e) => {
                e.preventDefault();
                if (!user.token) {
                  handleClickForLogin();
                } else {console.log(!responseFormVisible);
                  setResponseFormVisible(!responseFormVisible);
                }
              }}
            >
              {responseFormVisible ? 'Ocultar' : 'Responder'}
            </a>
          )
        )}
      </div>
      {!short && service.id_user !== user.id && (
        <div className={`response${responseFormVisible ? ' response-visible' : ''}`}>
        <Response
          idService={service.id}
          setLoadingOn={setLoadingOn}
          setModalContent={setModalContent}
          setResponseFormVisible={setResponseFormVisible}
          setUpdateSolutions={setUpdateSolutions}
        />
        </div>
      )}
      {!short && solutions.length > 0 && (
        <ul className="solutions">
          {solutions.map((solution) => (
            <Solution
              key={solution.id}
              service={service}
              setLoadingOn={setLoadingOn}
              setSolutions={setSolutions}
              solution={solution}
              solutions={solutions}
              usersArray={usersArray}
              />
          ))}
        </ul>
      )}
    </li>
  );
};
