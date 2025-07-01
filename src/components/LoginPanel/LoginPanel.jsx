'use client';

import { useContext } from 'react';
import { Button } from 'src/components/Button/Button';
import { UserContext } from 'src/contexts/UserContext/UserContext';

export const LoginPanel = () => {
  const { user, onLogin, onLogout } = useContext(UserContext) || {};
  const { userInfo, isAuthorized } = user || {};

  return (
    <>
      {userInfo?.name && <span>{userInfo.name}</span>}
      <Button type='button' onClick={isAuthorized ? onLogout : onLogin}>
        {isAuthorized ? 'Выйти' : 'Войти'}
      </Button>
    </>
  );
};
