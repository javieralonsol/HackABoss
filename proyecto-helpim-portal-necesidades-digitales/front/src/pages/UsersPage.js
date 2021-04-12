import { BannerUsers } from '../components/BannerUsers';
import { UsersList } from '../components/UsersList';
import { RotuloUsers } from '../components/RotuloUsers';

export const UsersPage = ({ handleClickForLogin, setLoadingOn, setModalContent }) => {
  return (
    <>
      <RotuloUsers />
      <BannerUsers />
      <UsersList
        handleClickForLogin={handleClickForLogin}
        setLoadingOn={setLoadingOn}
        setModalContent={setModalContent}
      />
    </>
  );
};
