import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { fetchF } from '../helpers/helpers';
import { Avatar } from './Avatar';
import { HistoryBack } from './HistoryBack';

export const UsersList = ({ setLoadingOn }) => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [offset, setOffset] = useState(0);
  const [idProfile, setIdProfile] = useState('');
  useLocation();

  const userIdFromLocation = parseInt(document.location.pathname.split('/')[2]) || '';
  if (userIdFromLocation !== idProfile) {
    setIdProfile(userIdFromLocation);
    setUserProfiles([]);
  }

  useEffect(() => {
    setLoadingOn(true);
    const getProfiles = async () => {
      const fetchProfiles = await fetchF(
        `http://localhost:3020/api/v1/users/${idProfile ? `profile/${idProfile}` : ''}?offset=${offset}&limit=10`
      );
      // setUserProfiles(fetchProfiles.body);
      const pru = idProfile ? [fetchProfiles.body] : [...userProfiles, ...fetchProfiles.body];
      setUserProfiles(pru);
      // console.log('viendo la respuesta', fetchProfiles.body);
      // setUserProfiles(idProfile ? [fetchProfiles.body] : fetchProfiles.body);
    };

    getProfiles();
    setLoadingOn(false);
  }, [idProfile, offset]);

  return (
    <div>
      {userProfiles.map((user) => (
        <div key={user.id} className="usersContainer">
          <Avatar user={user} isUserList="true" />
          <div className="rotulosUsers">Nombre:</div>
          <div className="contentUsers">{user.name}</div>
          <div className="rotulosUsers">Apellidos:</div>
          <div className="contentUsers">{user.surname}</div>
          <div className="rotulosUsers">Topic:</div>
          <div className="contentUsers">{user.topic}</div>
          <div className="rotulosUsers">Biografía:</div>
          <div className="contentUsers">{user.bio}</div>
        </div>
      ))}
      {/* {!idProfile && <button onClick={(e) => setOffset(offset + 10)}>+10</button>} */}
      {idProfile && <HistoryBack />}
    </div>
  );
};
