import React from 'react';
import { Avatar } from './Avatar';
import { ServiceBody } from './ServiceBody';
import { ServiceTitle } from './ServiceTitle';

export const VerServicio = (props) => {
  //   const { msg, onDeleteClick } = props;
  //   const escritor = props.author;
  //   // const escritor = people.find((person) => person.id === msg.author);
  //   const handleDeleteMessage = async () => {
  //     await onDeleteClick();
  //   };
  const title = 'este es el titulo';
  const explicación = 'aquí iría toda la explicacion del mensaje';
  const fileRoute = '/ruta/imagen';
  const fileName = 'nombreprueba';
  //   const { author, explicacion } = msg;
  return (
    <div className="pregunta">
      {/* <Avatar imageId={author} name={escritor?.name} /> */}
      <Avatar />
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceBody>{explicación}</ServiceBody>
      <div>
        <a href={fileRoute} className="fileAttached">
          {fileName}
        </a>
      </div>
    </div>
  );
};
