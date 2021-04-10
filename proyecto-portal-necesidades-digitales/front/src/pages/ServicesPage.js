import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { BannerSecciones } from '../components/BannerSecciones';
import { HistoryBack } from '../components/HistoryBack';
import { RotuloServicio } from '../components/RotuloServicio';
import { Service } from '../components/Service';
import { fetchF } from '../helpers/helpers';

export const ServicesPage = ({ handleClickForLogin, setModalContent, setLoadingOn }) => {
  const [serviceId, setServiceId] = useState('');
  const [services, setServices] = useState([]);
  const [usersArray, setUsersArray] = useState([]);
  useLocation();
  // const [offset, setOffset] = useState(0);
  // const ref = useRef()

  // const onScreen = useOnScreen(ref)

  // sabemos si es un servicio en concreto en lugar del listado por el location.pathname
  // si es así asignamos a serviceId la id
  const serviceIdFromLocation = parseInt(document.location.pathname.split('/')[2]) || '';
  if (serviceIdFromLocation !== serviceId) {
    setServiceId(serviceIdFromLocation);
  }

  const numberForPage = 300;

  const offset = 0;

  // function useOnScreen(ref) {
  //   const [isIntersecting, setIntersecting] = useState(false);

  //   const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

  //   useEffect(() => {
  //     observer.observe(ref.current, { root: null, rootMargin: '100px', threshold: [] });

  //     return () => {
  //       observer.disconnect();
  //     };
  //   }, []);

  //   return isIntersecting;
  // }

  useEffect(() => {
    const getServicesAndUsers = async () => {
      setLoadingOn(true)
      const fetchServices = await fetchF(
        `http://localhost:3020/api/v1/services/${serviceId}?limit=${numberForPage}&offset=${offset}`
      );
      const servicesArray = serviceId ? [fetchServices.body] : fetchServices.body;

      const usersArrayCopy = usersArray;

      for (const service of servicesArray) {
        if (!usersArrayCopy[service.id_user]) {
          const fetchUser = await fetchF(`http://localhost:3020/api/v1/users/profile/${service.id_user}`);
          usersArrayCopy[service.id_user] = fetchUser.body;
        }
      }

      setUsersArray(usersArrayCopy);
      setServices(servicesArray);
      // setServices([...services, ...servicesArray]);
      setLoadingOn(false)
    };
    getServicesAndUsers();
  }, [serviceId, usersArray, offset]);

  return (
    <>
      <RotuloServicio />
      <BannerSecciones />
      {/* <VerServicio /> */}
      {/* <div ref={ref}>{onScreen && "I'm on screen!"}</div> */}
      <ul className="services">
        {services.map((service) => (
          <Service
            handleClickForLogin={handleClickForLogin}
            key={service.id}
            service={service}
            short={!serviceId}
            usersArrayFirst={usersArray}
            setModalContent={setModalContent}
            setLoadingOn={setLoadingOn}
          />
        ))}
      </ul>
      {serviceIdFromLocation && <HistoryBack />}
      {/* <button onClick={(e) => setOffset(offset + numberForPage)}>+{numberForPage}</button> */}
    </>
  );
};
