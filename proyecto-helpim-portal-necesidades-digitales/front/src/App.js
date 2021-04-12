import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Upbutton } from './components/Upbutton';
import { Modal } from './components/Modal.js';
import { Loading } from './components/Loading.js';
import { useWindowScrollForHeaderSizeAndUpButton } from './hooks/useWindowScrollForHeaderSizeAndUpButton';
import { AuthProvider } from './components/providers/AuthProvider';
import { IndexPage } from './pages/IndexPage';
import { ProfilePage } from './pages/ProfilePage';
import { NewServicePage } from './pages/NewServicePage';
import { ServicesPage } from './pages/ServicesPage';
import { ScrollToTop } from './components/ScrollToTop';
import { UsersPage } from './pages/UsersPage';
import { SobreHelpium } from './pages/SobreHelpium';
import { Faq } from './pages/FAQ';
import { Condiciones } from './pages/Condiciones';
import { Cookies } from './pages/Cookies';
import { Contacto } from './pages/Contacto';

const rotulos = {
  howWorks: 'Así funciona Helpium',
  newService: 'Crear nueva pregunta',
  service: 'Pregunta:',
};

function App() {
  const [loadingOn, setLoadingOn] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [headerSmall, upButtonOn] = useWindowScrollForHeaderSizeAndUpButton();

  // console.log('Pintando App');

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Header
          headerSmall={headerSmall}
          handleClickForLogin={(e) => setModalContent(e.target.textContent.includes('regist') ? 'register' : 'login')}
        />
        <main>
          <Switch>
            <Route path="/about">
              <SobreHelpium />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/condiciones">
              <Condiciones />
            </Route>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/cookies">
              <Cookies />
            </Route>
            <Route path="/new-service">
              <NewServicePage rotulos={rotulos} setModalContent={setModalContent} setLoadingOn={setLoadingOn} />
            </Route>
            <Route path="/profile">
              <ProfilePage setModalContent={setModalContent} setLoadingOn={setLoadingOn} />
            </Route>
            <Route path="/services" setModalContent={setModalContent} setLoadingOn={setLoadingOn}>
              <ServicesPage
                handleClickForLogin={(e) => setModalContent('login')}
                setModalContent={setModalContent}
                setLoadingOn={setLoadingOn}
              />
            </Route>
            <Route path="/users">
              <UsersPage
                handleClickForLogin={(e) => setModalContent('login')}
                setLoadingOn={setLoadingOn}
                setModalContent={setModalContent}
              />
            </Route>
            <Route path="/">
              <IndexPage rotulos={rotulos} setModalContent={setModalContent} setLoadingOn={setLoadingOn} />
            </Route>
          </Switch>
        </main>
        <Footer />
        <Upbutton upButtonOn={upButtonOn} />
        <Modal modalContent={modalContent} setModalContent={setModalContent} setLoadingOn={setLoadingOn} />
        <Loading loadingOn={loadingOn} />
      </Router>
    </AuthProvider>
  );
}

export default App;
