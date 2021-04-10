import { useContext, useState } from 'react';
import { fetchF, translateMessagesFromBack } from '../helpers/helpers';
import { AuthContext } from './providers/AuthProvider';

export const ProfileEdit = ({ setModalContent, setLoadingOn }) => {
  const [user, setUser] = useContext(AuthContext);
  const [passwordValue, setPasswordValue] = useState('');
  const [nameValue, setNameValue] = useState(user.name);
  const [surnameValue, setSurnameValue] = useState(user.surname);
  const [topicValue, setTopicValue] = useState(user.topic || '');
  const [bioValue, setBioValue] = useState(user.bio || '');

  // console.log('Pintando ProfileEdit');

  const userSetStateMap = {
    password: setPasswordValue,
    name: setNameValue,
    surname: setSurnameValue,
    topic: setTopicValue,
    bio: setBioValue,
  };

  const handleBlur = async (event) => {
    if (event.target.dataset.focusvalue !== event.target.value) {
      setLoadingOn(true);

      // userSetStateMap[event.target.name](event.target.value.trim());

      const fetchUpdateField = await fetchF('http://localhost:3020/api/v1/users/update', {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ [event.target.name]: event.target.value }),
      });

      if (fetchUpdateField.status === 200) {
        userSetStateMap[event.target.name](event.target.value.trim());

        event.target.classList.remove('changed-so-red');

        setPasswordValue('');

        const { verification_code, hidden, ...profile } = fetchUpdateField.body

        setUser({
          ...user,
          ...profile,
        });
      } else {
        const errorMsg = translateMessagesFromBack(fetchUpdateField.body.error);

        setModalContent(`${errorMsg}<template>Entendido</template>`);
      }

      setLoadingOn(false);
    }
  };

  const handleChange = (event) => {
    if (event.target.dataset.focusvalue !== event.target.value) {
      event.target.classList.add('changed-so-red');
    } else {
      event.target.classList.remove('changed-so-red');
    }
    // guarda el dato en el setState
    userSetStateMap[event.target.name](event.target.value);
  };

  return (
    <div className="edit">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          document.activeElement.blur();
        }}
      >
        <label>
          Estado
          <input
            name="topic"
            onBlur={handleBlur}
            onFocus={(e) => (e.target.dataset.focusvalue = topicValue)}
            onChange={handleChange}
            tabIndex="6"
            type="text"
            value={topicValue}
          />
          <button>
            <img alt="Guardar cambios" src="../media/icon/save.svg" />
          </button>
        </label>
        <label>
          Nombre
          <input
            autoComplete="given-name"
            name="name"
            onBlur={handleBlur}
            onFocus={(e) => (e.target.dataset.focusvalue = nameValue)}
            onChange={handleChange}
            spellCheck="false"
            tabIndex="4"
            type="text"
            value={nameValue}
          />
          <button>
            <img alt="Guardar cambios" src="../media/icon/save.svg" />
          </button>
        </label>
        <label>
          Apellidos
          <input
            autoComplete="family-name"
            name="surname"
            onBlur={handleBlur}
            onFocus={(e) => (e.target.dataset.focusvalue = surnameValue)}
            onChange={handleChange}
            spellCheck="false"
            tabIndex="5"
            type="text"
            value={surnameValue}
          />
          <button>
            <img alt="Guardar cambios" src="../media/icon/save.svg" />
          </button>
        </label>
        <label>
          Biografía
          <textarea
            name="bio"
            onBlur={handleBlur}
            onFocus={(e) => (e.target.dataset.focusvalue = bioValue)}
            onChange={handleChange}
            spellCheck="false"
            tabIndex="7"
            value={bioValue}
          />
          <button>
            <img alt="Guardar cambios" src="../media/icon/save.svg" />
          </button>
        </label>
        <label>
          Cambio de contraseña
          <input
            autoComplete="current-password"
            name="password"
            onBlur={handleBlur}
            onFocus={(e) => (e.target.dataset.focusvalue = passwordValue)}
            onChange={handleChange}
            spellCheck="false"
            tabIndex="3"
            // type={false ? 'text' : 'password'}
            value={passwordValue}
          />
          <button>
            <img alt="Guardar cambios" src="../media/icon/save.svg" />
          </button>
        </label>
      </form>
    </div>
  );
};
