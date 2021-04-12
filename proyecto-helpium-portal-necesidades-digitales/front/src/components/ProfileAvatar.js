import { useContext } from "react";
import { fetchF, translateMessagesFromBack } from "../helpers/helpers";
import { AuthContext } from "./providers/AuthProvider";

const { Link } = require("react-router-dom");

export const ProfileAvatar = ({ setModalContent, setLoadingOn, setProfilePage }) => {
  const [user, setUser] = useContext(AuthContext);

  // console.log('Pintando ProfileAvatar');

  const onFileChange = async (event) => {
    setLoadingOn(true);

    const data = new FormData();
    data.append('profileImage', event.target.files[0]);

    const fetchUpdateImage = await fetchF('http://localhost:3020/api/v1/users/upload', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: data,
    });

    fetchResponse(fetchUpdateImage);

    event.target.value = null;
  };

  const deleteAvatar = async () => {
    setLoadingOn(true);

    const fetchUpdateImage = await fetchF('http://localhost:3020/api/v1/users/upload', {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    fetchResponse(fetchUpdateImage);
  };

  const fetchResponse = (fetchUpdateImage) => {
    if (fetchUpdateImage.status === 200) {
      const imgRand = `${fetchUpdateImage.body.url}?${Math.random()}`;

      setUser({ ...user, image: imgRand });
    } else {
      const errorMsg = translateMessagesFromBack(fetchUpdateImage.body.error);

      setModalContent(`${errorMsg}<template>Entendido</template>`);
    }

    setLoadingOn(false);
  };

  return (
    <div className="profile-avatar">
      <div className="profile-avatar-image-container">
        <input type="file" id="file" onChange={onFileChange} style={{ display: 'none' }} />
        <label htmlFor="file" className="profile-avatar-image-link">
          <img alt="Avatar" src={user.image} />
        </label>
        <label htmlFor="file" className="profile-avatar-upload-link">
          <img alt="Enviar avatar" src="/media/icon/upload.svg" />
        </label>
        <Link
          to="#"
          className={`profile-avatar-delete-link${user.image?.includes('.webp') ? '' : ' invisible'}`}
          onClick={deleteAvatar}
        >
          <img alt="Borrar avatar" src="/media/icon/delete.svg" />
        </Link>
      </div>
      <ul className="profile-avatar-links">
        <li>
          <Link to={'/profile'} onClick={(e) => setProfilePage('')}>
            Mis datos
          </Link>
        </li>
        <li>
          <Link to={'/profile/services'} onClick={(e) => setProfilePage('services')}>
            Mis preguntas
          </Link>
        </li>
        {/* <li>
          <Link to={'/profile/solutions'} onClick={(e) => setProfilePage('solutions')}>
            Mis respuestas
          </Link>
        </li> */}
        <li>
          <Link to={'/'} onClick={() => setUser({})}>
            Cerrar la sesión
          </Link>
        </li>
      </ul>
    </div>
  );
};
