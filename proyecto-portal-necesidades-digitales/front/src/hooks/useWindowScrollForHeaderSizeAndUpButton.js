import { useState } from 'react';

let scrolling = false;

export const useWindowScrollForHeaderSizeAndUpButton = () => {
  const [headerSmall, setHeaderSmall] = useState(false);
  const [upButtonOn, setUpButtonOn] = useState(false);

  window.onscroll = () => {
    // cabecera y logo
    if (window.pageYOffset > 5) {
      if (!scrolling) {
        setHeaderSmall(true);
        scrolling = true;
      }
    } else {
      setHeaderSmall(false);
      scrolling = false;
    }

    // botón de subir
    if (window.pageYOffset > 100 && !upButtonOn) {
      setUpButtonOn(true);
    } else if (window.pageYOffset < 100 && upButtonOn) {
      setUpButtonOn(false);
    }
  };

  return [headerSmall, upButtonOn];
};
