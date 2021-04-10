import { useContext, useState } from 'react';
import { AuthContext } from './providers/AuthProvider';
import { fetchF, translateMessagesFromBack } from '../helpers/helpers.js';

export const Response = ({ idService, setResponseFormVisible, setUpdateSolutions, setModalContent, setLoadingOn }) => {
  const [user] = useContext(AuthContext);
  const [commentValue, setCommentValue] = useState();
  const [selectedFile, setSelectedFile] = useState({ name: 'Puedes añadir un archivo' });

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoadingOn(true);
    const formData = new FormData();
    formData.append('comment', commentValue);
    formData.append('id_service', idService);

    if (selectedFile.size) {
      formData.append('file', selectedFile);
    }

    const fetchNewService = await fetchF('http://localhost:3020/api/v1/solutions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: formData,
    });

    setLoadingOn(false);

    if (fetchNewService.status === 200) {
      setCommentValue('');
      setSelectedFile('');
      setResponseFormVisible(false);
      setUpdateSolutions(Math.random());
    } else {
      setModalContent(translateMessagesFromBack(fetchNewService.body.error || fetchNewService.body));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Explica y desarrolla tu respuesta
          <textarea
            name="comment"
            onChange={(e) => setCommentValue(e.target.value)}
            required
            value={commentValue}
          ></textarea>
        </label>
        <label className="label-upload-icon">
          <div>
            <img alt="Upload icon" className="upload-icon" src="/media/icon/upload.svg" />
          </div>
          <div className="ellipsis">{selectedFile.name}</div>
          <input
            className="response-file-hidden"
            name="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            type="file"
          />
        </label>
        <input className="buttonlike" type="submit" value="Enviar" />
      </form>
    </div>
  );
};
