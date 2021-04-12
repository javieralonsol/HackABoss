import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './providers/AuthProvider';
import { fetchF } from '../helpers/helpers';
import { Service } from './Service';

export const ServicesFromId = ({ id, handleClickForLogin, setModalContent, setLoadingOn }) => {
  const [user] = useContext(AuthContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setLoadingOn(true)
    const getServices = async () => {
      const fetcServices = await fetchF(`http://localhost:3020/api/v1/services/user/${id}?limit=10&offset=0`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setServices(fetcServices.body);
    };
    getServices();
    setLoadingOn(false)
  }, [user.token]);

  return (
    <>
      <h1>Mis preguntas</h1>
      <ul className="services">
        {services.map((service) => (
          <Service
            handleClickForLogin={handleClickForLogin}
            key={service.id}
            service={service}
            setLoadingOn={setLoadingOn}
            setModalContent={setModalContent}
            short="short"
            usersArrayFirst={{ [user.id]: user }}
          />
        ))}
      </ul>
    </>
  );
};
