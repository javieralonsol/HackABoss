import React, { useContext } from 'react';

import { NuevaPregunta } from '../components/NuevaPregunta';
import { BannerSecciones } from '../components/BannerSecciones';
import { RotuloNuevaPregunta } from '../components/RotuloNuevaPregunta';
import { AuthContext } from '../components/providers/AuthProvider';
import { useHistory } from 'react-router';

export const NewServicePage = ({ setModalContent, setLoadingOn }) => {
  const [user] = useContext(AuthContext);
  const history = useHistory();

  if (!user.token) {
    setModalContent('login');
    history.push('/')
  }

  return (
    <>
      <RotuloNuevaPregunta />
      <BannerSecciones />
      <NuevaPregunta setModalContent={setModalContent} setLoadingOn={setLoadingOn} />
    </>
  );
};
