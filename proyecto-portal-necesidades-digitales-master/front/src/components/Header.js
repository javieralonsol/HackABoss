import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/providers/AuthProvider';

export const Header = ({ headerSmall, handleClickForLogin }) => {
  // console.log('Pintando Header');
  const [user, setUser] = useContext(AuthContext);
  const location = useLocation();

  return (
    <header className={headerSmall ? 'header header-short' : 'header'} id="header">
      <Link className="header-a-logo" to={'/'}>
        <img alt="Helpium logo" className="header-logo-img" src="/media/logo/logo.svg" height="300" width="320" />
      </Link>
      <nav className="linea-gris">
        <label className="hidden-checkbox" htmlFor="hidden-checkbox">
          Abrir menú
        </label>
        <input
          className="hidden-checkbox"
          id="hidden-checkbox"
          type="checkbox"
          onBlur={(e) => setTimeout(() => (e.target.checked = false), 75)}
        />
        <div className="burger">
          <span className="burger-arriba"></span>
          <span className="burger-medio"></span>
          <span className="burger-abajo"></span>
        </div>
        <ul className="header-links">
          <li>
            <Link className={location.pathname === '/new-service' ? 'hover' : ''} to={'/new-service'}>
              nueva pregunta
            </Link>
          </li>
          <li>
            <Link className={location.pathname === '/services' ? 'hover' : ''} to={'/services'}>
              preguntas
            </Link>
          </li>
          <li>
            <Link className={location.pathname === '/users' ? 'hover' : ''} to={'/users'}>
              usuarios
            </Link>
          </li>
          {user.image ? (
            <>
              <li>
                <Link className="header-avatar" to={'/profile'}>
                  <img alt="Profile" src={user.image} />
                </Link>
              </li>
              <li>
                <Link
                  className="logout"
                  to="/logout"
                  onClick={(e) => {
                    e.preventDefault();
                    setUser({});
                  }}
                >
                  <img alt="Logout" src="/media/icon/logout.svg" />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="still-small">
                <Link to="#" onClick={handleClickForLogin}>
                  acceder
                </Link>
              </li>
              <li className="no-small">
                <Link to="#" onClick={handleClickForLogin}>
                  registro
                </Link>
              </li>
              <li className="no-small">
                <Link to="#" onClick={handleClickForLogin}>
                  login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
