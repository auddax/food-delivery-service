import { useContext } from 'react';
import { Button } from 'src/components/Button/Button';
import { UserContext } from 'src/contexts/UserContext/UserContext';

export const LoginPanel = ({ theme }) => {
  const { user, onLogin, onLogout } = useContext(UserContext) || {};
  const { userInfo, isAuthorized } = user || {};

  const handleOnClick = () => (isAuthorized ? onLogout() : onLogin());

  return (
    <>
      {userInfo?.name && <span>{userInfo.name}</span>}
      <Button
        type='button'
        onClick={handleOnClick}
        className={theme}
      >
        {isAuthorized ? 'Выйти' : 'Войти'}
      </Button>
    </>
  );
};
