import { handleClickSmoothScroll } from '../helpers/helpers';

export const Upbutton = ({ upButtonOn }) => {
  // console.log('Pintando Upbutton');

  return (
    <a
      href="#header"
      className={`up-button ${upButtonOn ? 'up-button-visible' : ''}`}
      onClick={handleClickSmoothScroll}
    >
      Subir
    </a>
  );
};
