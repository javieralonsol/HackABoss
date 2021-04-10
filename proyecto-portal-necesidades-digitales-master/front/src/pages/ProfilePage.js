import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { ProfileAvatar } from '../components/ProfileAvatar';

import { ProfileEdit } from '../components/ProfileEdit';
import { ProfileServices } from '../components/ProfileServices';
import { AuthContext } from '../components/providers/AuthProvider';

export const ProfilePage = ({ setModalContent, setLoadingOn }) => {
  const [user] = useContext(AuthContext);
  const [profilePage, setProfilePage] = useState(document.location.pathname.split('/')[2] || '');

  // console.log(`Pintando ProfilePage (Página: #${profilePage}#)`);

  if (!user.token) {
    return <Redirect to="/" />;
  }

  return (
    <div className="profile">
      <ProfileAvatar setModalContent={setModalContent} setLoadingOn={setLoadingOn} setProfilePage={setProfilePage} />
      <div className="email">{user.email}</div>
      {profilePage === '' && <ProfileEdit setModalContent={setModalContent} setLoadingOn={setLoadingOn} />}
      {profilePage === 'services' && <ProfileServices setModalContent={setModalContent} setLoadingOn={setLoadingOn} />}
    </div>
  );
};
