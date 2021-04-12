import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import { fetchF, translateMessagesFromBack } from '../helpers/helpers.js';
import { AuthContext } from '../components/providers/AuthProvider';
import { GetProfile } from './providers/GetProfile';

export const Login = ({ loginOrRegister, setLoadingOn, setModalContent }) => {
  // console.log('Pintando Login');

  const [, setUser] = useContext(AuthContext);
  const [loginType, setLoginType] = useState('');
  const [loginName, setLoginName] = useState('');
  const [loginSurname, setLoginSurname] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [dataNameError, setDataNameError] = useState('');
  const [dataSurnameError, setDataSurnameError] = useState('');
  const [dataEmailError, setDataEmailError] = useState('');
  const [dataPasswordError, setDataPasswordError] = useState('');
  const [passwordReveal, setPasswordReveal] = useState(false);
  const [tabIndexName, setTabIndexName] = useState(-1);
  const [tabIndexSurname, setTabIndexSurname] = useState(-1);
  const [tabIndexEmail, setTabIndexEmail] = useState(-1);
  const [tabIndexPassword, setTabIndexPassword] = useState(-1);
  const [tabIndexSubmitLogin, setTabIndexSubmitLogin] = useState(-1);
  const [tabIndexSubmitRegister, setTabIndexSubmitRegister] = useState(-1);
  const [tabIndexSubmitForgotten, setTabIndexSubmitForfotten] = useState(-1);
  // const doSuccess = (responseBody) => setToken(responseBody.accessToken);
  const history = useHistory();

  const clearDataErrors = () => {
    setDataNameError('');
    setDataSurnameError('');
    setDataEmailError('');
    setDataPasswordError('');
  };

  const changeLoginType = (type) => {
    if (loginType === type) return;
    setLoginType(type);

    clearDataErrors();

    if (type === 'login') {
      setTabIndexName(-1);
      setTabIndexSurname(-1);
      setTabIndexEmail(2);
      setTabIndexPassword(3);
      setTabIndexSubmitLogin(4);
      setTabIndexSubmitForfotten(5);
      setTabIndexSubmitRegister(6);
    } else if (type === 'register') {
      setTabIndexName(2);
      setTabIndexSurname(3);
      setTabIndexEmail(4);
      setTabIndexPassword(5);
      setTabIndexSubmitRegister(6);
      setTabIndexSubmitLogin(7);
      setTabIndexSubmitForfotten(8);
    } else {
      setTabIndexName(-1);
      setTabIndexSurname(-1);
      setTabIndexEmail(2);
      setTabIndexPassword(-1);
      setTabIndexSubmitForfotten(3);
      setTabIndexSubmitLogin(4);
      setTabIndexSubmitRegister(5);
    }

    setTimeout(() => document.querySelector('.modal [tabindex="2"]').focus(), 650); // foco al 1er input
  };

  const handleClickSubmit = async (event) => {
    event.preventDefault();
    let targetMode = event.target.className.replace('submit-', '');

    // si se ha hecho enter en un imput
    if (targetMode === 'submit') {
      targetMode = loginType;
    }

    if (targetMode !== loginType) {
      // cambio de tipò de login
      changeLoginType(targetMode);
    } else {
      // submit
      setLoadingOn(true);

      clearDataErrors();

      const bodyJSON = { email: loginEmail };
      if (targetMode !== 'forgotten') {
        bodyJSON.password = loginPassword;
      }
      if (targetMode === 'register') {
        bodyJSON.name = loginName;
        bodyJSON.surname = loginSurname;
      }

      const loginFetchResponse = await fetchF(`http://localhost:3020/api/v1/users/${targetMode}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(bodyJSON),
      });

      if (loginFetchResponse.status === 200) {
        // login OK
        const { verification_code, hidden, ...profile } = await GetProfile(loginFetchResponse.body.accessToken);
        setUser({
          token: loginFetchResponse.body.accessToken,
          ...profile,
        });

        // setLoadingOn(false);
        if (!document.location.pathname.substr(1)) {
          // setRedirection('/services');
          history.push(`/services`);
        }
        setModalContent('');
      } else if (loginFetchResponse.status === 201) {
        // cuenta creada pero no validada o recordar contraseña
        const messageBody = translateMessagesFromBack(loginFetchResponse.body.message);
        setModalContent(`${messageBody}<template>Entendido</template>`);
      } else {
        // error

        let unknownError;
        if (loginFetchResponse.body.error) {
          const errorMessageBody = translateMessagesFromBack(loginFetchResponse.body.error);
          const [, errorField, errorMessage] = errorMessageBody.split('"');
          if (errorField === 'name') {
            setDataNameError(errorMessage);
          } else if (errorField === 'surname') {
            setDataSurnameError(errorMessage);
          } else if (errorField === 'email') {
            setDataEmailError(errorMessage);
          } else if (errorField === 'password') {
            setDataPasswordError(errorMessage);
          } else {
            unknownError = errorMessageBody;
          }
        } else {
          unknownError = loginFetchResponse;
        }

        if (unknownError) {
          setModalContent(`Error desconocido: <br /><code>${JSON.stringify(unknownError)}</code>`);
        }
      }

      setLoadingOn(false);
    }
  };

  // carga inicial (desde el nav)
  if (!loginType) {
    changeLoginType(loginOrRegister);
  }

  return (
    <section className="login-form">
      <div className={`login view-${loginType}`}>
        <section className="login-title">
          <div className="title-login">Inicia sesión</div>
          <div className="title-forgotten">Recuperar contraseña</div>
          <div className="title-register">Crea una cuenta</div>
        </section>
        <form data-necesario="* necesario">
          <section className={`name${dataNameError && ' data-error-visible'}`} data-error={dataNameError}>
            <input
              autoComplete="given-name"
              name="given-name"
              onChange={(e) => setLoginName(e.target.value)}
              spellCheck="false"
              tabIndex={tabIndexName}
              type="text"
              value={loginName}
              required
            />
            <label className="green" htmlFor="name">
              Nombre
            </label>
          </section>
          <section className={`surname${dataSurnameError && ' data-error-visible'}`} data-error={dataSurnameError}>
            <input
              autoComplete="family-name"
              name="family-name"
              onChange={(e) => setLoginSurname(e.target.value)}
              spellCheck="false"
              tabIndex={tabIndexSurname}
              type="text"
              value={loginSurname}
              required
            />
            <label htmlFor="name">Apellidos</label>
          </section>
          <section className={`email${dataEmailError && ' data-error-visible'}`} data-error={dataEmailError}>
            <input
              autoComplete="email"
              name="email"
              onChange={(e) => setLoginEmail(e.target.value)}
              spellCheck="false"
              tabIndex={tabIndexEmail}
              type="text"
              value={loginEmail}
              required
            />
            <label htmlFor="email">Email</label>
          </section>
          <section className={`password${dataPasswordError && ' data-error-visible'}`} data-error={dataPasswordError}>
            <input
              autoComplete="current-password"
              name="current-password"
              onChange={(e) => setLoginPassword(e.target.value)}
              spellCheck="false"
              tabIndex={tabIndexPassword}
              type={passwordReveal ? 'text' : 'password'}
              value={loginPassword}
              required
            />
            <label htmlFor="password">Contraseña</label>
            <span
              className={`password-eye${passwordReveal ? ' eye-yes' : ''}`}
              onClick={() => setPasswordReveal(!passwordReveal)}
            ></span>
          </section>
          <div className="login-submitters">
            <input
              className="submit-login"
              onClick={handleClickSubmit}
              tabIndex={tabIndexSubmitLogin}
              type="button"
              value="Iniciar sesión"
            />
            <input
              className="submit-forgotten"
              onClick={handleClickSubmit}
              tabIndex={tabIndexSubmitForgotten}
              type="button"
              value="Olvidé mi contraseña"
            />
            <input
              className="submit-register"
              onClick={handleClickSubmit}
              tabIndex={tabIndexSubmitRegister}
              type="button"
              value="Crear una cuenta"
            />
            <input className="submit-submit" onClick={handleClickSubmit} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
};
