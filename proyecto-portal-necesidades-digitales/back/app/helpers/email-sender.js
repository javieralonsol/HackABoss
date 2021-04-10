'use strict';

const nodemailer = require('nodemailer');

const { SERVER_DOMAIN, SMTP_PORT, SMTP_HOST, SMTP_USER, SMTP_PASS, FRONT_SERVER_DOMAIN } = process.env;

const transporter = nodemailer.createTransport({
  port: SMTP_PORT,
  host: SMTP_HOST,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  secure: true,
});

async function emailSendRegistration(name, email, verificationCode) {
  // const linkActivation = `${SERVER_DOMAIN}/api/v1/users/activation?email=${email}&verification_code=${verificationCode}`;
  const linkActivation = `${FRONT_SERVER_DOMAIN}/?email=${email}&verification_code=${verificationCode}`;

  const html = `<html>
    <body style="color: #2b474b; font-family: sans-serif, arial; margin: 0; padding: 0">
      <div style="border: 5px solid #00a7b4; border-radius: 5px; margin: auto; text-align: center; width: 700px">
        <h1 style="padding: 30px">¡Bienvenid@ a Helpium!</h1>
        <h2 style="padding-bottom: 5px">Hola <span style="color: #00a7b4">${name}</span></h2>
        <h3 style="line-height: 30px; padding: 10px">
          Para activar tu cuenta debes confirmar tu correo electrónico.<br />
          Para ello haz click en el siguiente botón.<br />
        </h3>
        <h4 style="margin: 35px 0 45px">
          <a
            href="${linkActivation}"
            style="
              border: 2px solid #00a7b4;
              border-radius: 3px;
              color: #00a7b4;
              font-size: 1.1rem;
              padding: 10px 15px;
              text-decoration: none;
            "
            >Confirmar mi email</a
          >
        </h4>
        <h5 style="background-color: #00a7b4; display: block; margin: 30px 0 0; padding: 50px 0; width: 100%">
          <a href="http://localhost:3000/">
            <img style="background-color: #fff; width: 150px" src="http://localhost:3000/media/logo/logo.svg" />
          </a>
        </h5>
      </div>
    </body>
  </html>`;

  return await emailSend({
    from: SMTP_USER,
    to: email,
    subject: '¡Bienvenid@ a Helpium!',
    html: html,
  });
}

async function emailSendForgottenPassword(name, email, verificationCode) {
  // const linkActivation = `${SERVER_DOMAIN}/api/v1/users/activation?email=${email}&verification_code=${verificationCode}`;
  const linkActivation = `${FRONT_SERVER_DOMAIN}/?email=${email}&verification_code=${verificationCode}&forgotten=true`;
  const html = `<html>
    <body style="color: #2b474b; font-family: sans-serif, arial; margin: 0; padding: 0">
      <div style="border: 5px solid #00a7b4; border-radius: 5px; margin: auto; text-align: center; width: 700px">
        <h1 style="padding: 30px">Contraseña olvidada de Helpium</h1>
        <h2 style="padding-bottom: 5px">Hola <span style="color: #00a7b4">${name}</span></h2>
        <h3 style="line-height: 30px; padding: 10px">
          Hemos recibido una solicitud para cambiar tu contraseña de Helpium.<br />
          Para ello haz click en el siguiente botón.<br />
          Si no lo has solicitado tú simplemente borra este mensaje.
        </h3>
        <h4 style="margin: 35px 0 45px">
          <a
            href="${linkActivation}"
            style="
              border: 2px solid #00a7b4;
              border-radius: 3px;
              color: #00a7b4;
              font-size: 1.1rem;
              padding: 10px 15px;
              text-decoration: none;
            "
            >Cambiar mi contraseña</a
          >
        </h4>
        <h5 style="background-color: #00a7b4; display: block; margin: 30px 0 0; padding: 50px 0; width: 100%">
          <a href="http://localhost:3000/">
            <img style="background-color: #fff; width: 150px" src="http://localhost:3000/media/logo/logo.svg" />
          </a>
        </h5>
      </div>
    </body>
  </html>`;

  return await emailSend({
    from: SMTP_USER,
    to: email,
    subject: 'Contraseña olvidada de Helpium',
    html: html,
  });
}

async function emailSend(mailData) {
  try {
    return await transporter.sendMail({ ...mailData, text: mailData.html.replace(/(<([^>]+)>)/gi, '') });
  } catch (err) {
    return false;
  }
}

module.exports = {
  emailSend,
  emailSendForgottenPassword,
  emailSendRegistration,
};
