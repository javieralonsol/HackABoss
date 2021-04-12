import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../components/providers/AuthProvider';

import { GetProfile } from '../components/providers/GetProfile';
import { RotuloHow } from '../components/RotuloHow';
import { fetchF } from '../helpers/helpers.js';

const { Banner } = require('../components/Banner');
const { Explicacion } = require('../components/Explicacion');
// const { Rotulo } = require('../components/Rotulo');

export const IndexPage = ({ rotulos, setLoadingOn, setModalContent }) => {
  const [, setUser] = useContext(AuthContext);
  const history = useHistory();

  // console.log('Pintando IndexPage');

  const searchObject = {};
  const searchParams = new URLSearchParams(window.location.search);
  [...searchParams].map((entry, index) => (searchObject[entry[0]] = entry[1]));

  useEffect(() => {
    const verification = async () => {
      setModalContent('Activando su cuenta<br /><br /><br /><br />Un momento, por favor...');
      setLoadingOn(true);
      const fetchActivation = await fetchF(
        `http://localhost:3020/api/v1/users/activation?email=${searchObject.email || ''}&verification_code=${
          searchObject.verification_code || ''
        }`
      );

      if (fetchActivation.status === 200) {
        const { verification_code, hidden, ...profile } = await GetProfile(fetchActivation.body.accessToken);
        setUser({
          token: fetchActivation.body.accessToken,
          ...profile,
        });

        if (searchObject.forgotten) {
          setModalContent('Ahora podrás cambiar tu contraseña en esta página de perfil.<template>Entendido</template>');
        } else {
          setModalContent(
            '¡¡Cuenta activada!!<br /><br />Por favor, completa ahora tu perfil para una mejor experiencia.<template>Entendido</template>'
          );
        }
        setLoadingOn(false);

        history.push(`/profile`);
      } else {
        setModalContent('Ha fallado la verificación o su cuenta ya está activada<template>Entendido</template>');
        history.push(`/`);
      }
      setLoadingOn(false);
    };
    if (searchObject.verification_code) {
      verification();
    }
  }, []);

  return (
    <>
      <Banner />
      <RotuloHow rotulos={rotulos} />
      <Explicacion />
    </>
  );
};
