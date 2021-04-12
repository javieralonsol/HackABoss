import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Categorias } from './Categorias';
import { fetchF, translateMessagesFromBack } from '../helpers/helpers';
import { AuthContext } from './providers/AuthProvider';

export const NuevaPregunta = ({ setModalContent, setLoadingOn }) => {
  const [user] = useContext(AuthContext);
  const [newTitle, setNewTitle] = useState('');
  const [newExplication, setNewExplication] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [selectedFile, setSelectedFile] = useState({ name: 'Tienes que añadir un archivo' });
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoadingOn(true);
    const formData = new FormData();
    formData.append('title', newTitle);
    formData.append('category', newCategory);
    formData.append('explication', newExplication);
    formData.append('file', selectedFile);

    const fetchNewService = await fetchF('http://localhost:3020/api/v1/services', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: formData,
    });
    setLoadingOn(false);

    if (fetchNewService.status === 201) {
      history.push(`/services/${fetchNewService.body.id}`);
    } else {
      setModalContent(translateMessagesFromBack(fetchNewService.body.error || fetchNewService.body));
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <label className="labelForm" htmlFor="title">
          Título de la Pregunta
        </label>
        <input
          className="itemsForm"
          name="title"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
          required
          type="text"
        ></input>
        <Categorias selectedCategory={newCategory} setSelectedCategory={setNewCategory} />

        <label className="labelForm" htmlFor="exposition">
          Explica y desarrolla tu pregunta
        </label>
        <textarea
          className="containerForms"
          value={newExplication}
          onChange={(e) => {
            setNewExplication(e.target.value);
          }}
          required
          name="exposition"
        ></textarea>



        <label className="labelForm">
          <div>
            <img alt="Upload icon" className="upload-icon" id="info" src="/media/icon/upload.svg" />
          </div>
          <div className="ellipsis">{selectedFile.name}</div>
          <input
            id="file-upload"
            required

            name="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            type="file"
          />
        </label>




        {/* <label className="labelForm" htmlFor="exposition">
          Subir Archivo
        </label>
        <div>
          <label htmlFor="file-upload" className="subir">
            <img id="info" alt="Enviar avatar" src="/media/icon/upload.svg" />
          </label>

          <input
            id="file-upload"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="containerForms"
            name="file"
            required
            type="file"
          />
        </div> */}
        <div>
          <button type="submit">Enviar Pregunta</button>
        </div>
      </form>
    </div>
  );
};
