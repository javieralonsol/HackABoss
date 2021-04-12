const applyBackgroundBlur = (trueOrFalse) => {
  applyClass('.bg-image, header a, header nav, main, footer', 'blur', trueOrFalse ? 'add' : 'remove');
};

const applyClass = (selector, className, addOrRemove = 'add') => {
  [...document.querySelectorAll(selector)].map((element) => element.classList[addOrRemove](className));
};

const dateFormatted = (timestamp) => {
  const date = new Date(timestamp);
  return `${padLeft(date.getDate(), 2, '0')}/${padLeft(date.getMonth() + 1, 2, '0')}/${date.getFullYear()} ${padLeft(
    date.getHours(),
    2,
    '0'
  )}:${padLeft(date.getMinutes(), 2, '0')}`;
};

const fetchF = async (url, init = {}) => {
  try {
    const res = await fetch(url, init);
    let body = await res.text();
    let type = 'text';
    try {
      body = await JSON.parse(body);
      type = 'json';
    } catch (err) {}
    return { status: res.status, body: body, type: type, res: res };
  } catch (err) {
    try {
      err.message = JSON.parse(err.message);
    } catch (err) {}
    return { status: 0, body: err.message, type: 'error', res: '' };
  }
};

const handleClickSmoothScroll = (event) => {
  event.preventDefault();
  document.documentElement.scrollTo({
    top: document.querySelector(`#${event.target.hash.substr(1)}`).offsetTop,
    behavior: 'smooth',
  });
};

const padLeft = (text, maxLength, symbol) => {
  return symbol.repeat(maxLength - text.toString().length) + text;
};

const toUpperCaseFirst = (text) => text.replace(/^./, ($1) => $1.toUpperCase());

const translateMessagesFromBackArray = [
  {
    regexp: 'Failed to fetch',
    translation: 'No se puede conectar.',
  },
  {
    regexp: 'is not allowed to be empty',
    translation: 'No puede estar vacío.',
  },
  {
    regexp: 'length must be at least ([0-9]+) characters long',
    translation: 'No puede tener menos de $1 caracteres.',
  },
  {
    regexp: 'length must be less than or equal to ([0-9]+) characters long',
    translation: 'No puede tener más de $1 caracteres.',
  },
  {
    regexp: 'must be a valid email',
    translation: 'Debe ser un email válido.',
  },
  {
    regexp: 'must have at least one number, one lowercase, one uppercase and no spaces',
    translation: 'Debe tener al menos un número, una letra minúscula, una mayúscula y no tener espacios.',
  },
  {
    regexp: 'A user with that email already exists',
    translation: 'Ya existe un usuario con ese email.',
  },
  {
    regexp: 'We could not send the verification email so please try later',
    translation: '"email" No hemos podido enviar el email de verificación así que, por favor, inténtelo más tarde.',
  },
  {
    regexp: 'Account still not verified. Please check your email inbox',
    translation:
      '"password" Cuenta aun no verificada. Por favor, localice el email que le enviamos con el enlace de verificación.',
  },
  {
    regexp: 'Login failed',
    translation: '"password" Datos de acceso incorrectos.',
  },
  {
    regexp:
      'If your email is in our database, we will send you an email with a link to log into your account, where you can change your password',
    translation:
      'Si su email está en nuestra base de datos le enviaremos un correo con un enlace para acceder a su cuenta, desde donde podrá cambiar su contraseña.',
  },
  {
    regexp: 'We have sent you an email with a link to activate your account',
    translation:
      '<h3>¡Cuenta creada!</h3><h4>Le hemos enviado un correo electrónico con un enlace para activarla.</h4><p>Gracias.</p>',
  },
  {
    regexp: 'Allowed filetypes are (.*$)',
    translation: 'Los archivos permitidos son $1',
  },
  {
    regexp: '"Filesize" max size is (.*$)',
    translation: 'El tamaño máximo de archivo permitido es $1.',
  },
  {
    regexp: 'Title exists',
    translation: 'Ya existe una pregunta con ese título.',
  },
];

const translateMessagesFromBack = (message) => {
  return translateMessagesFromBackArray.reduce((messageTranslated, element) => {
    if (message.match(new RegExp(element.regexp))) {
      return message.replace(new RegExp(element.regexp), element.translation);
    } else {
      return messageTranslated;
    }
  }, message);
};

module.exports = {
  applyBackgroundBlur,
  applyClass,
  dateFormatted,
  fetchF,
  handleClickSmoothScroll,
  padLeft,
  toUpperCaseFirst,
  translateMessagesFromBack,
};
