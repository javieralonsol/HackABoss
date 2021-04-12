import { useHistory } from 'react-router';

export const HistoryBack = () => {
  const history = useHistory();
  return (
    <>
      <button className="goback buttonlike" onClick={(e) => history.goBack()}>
        Volver
      </button>
    </>
  );
};
