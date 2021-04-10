import { Link } from 'react-router-dom';

import { dateFormatted } from '../helpers/helpers';

export const Avatar = ({ user, timestamp = '', isUserList = '' }) => {
  // console.log('Pintando Avatar');

  return (
    <div className="container-avatar">
      <Link title={user.topic} to={`/users/${user.id}`}>
        <img alt="Avatar" className="avatar" src={user.image} />
      </Link>
      {isUserList ? (
        <div className="preguntas-avatar">
          <div>{user.services || 0} preguntas</div>
          <div>{user.solutions || 0} respuestas</div>
        </div>
      ) : (
        <div className="nombre-avatar">
          <div className="ellipsis">{`${user.name} ${user.surname}`}</div>
          <div>{dateFormatted(timestamp || user.timestamp)}</div>
        </div>
      )}
    </div>
  );
};
