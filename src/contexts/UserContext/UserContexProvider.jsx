import { useState } from 'react';
import { INITIAL_USER_INFO } from 'src/constants';
import { UserContext } from 'src/contexts/UserContext/UserContext';

const mockUserInfo = {
  id: 'a304959a-76c0-4b34-954a-b38dbf310360',
  name: 'Antony',
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const onLogin = () => {
    setUser({ userInfo: mockUserInfo, isAuthorized: true });
  };

  const onLogout = () => {
    setUser({ userInfo: INITIAL_USER_INFO, isAuthorized: false });
  };

  return (
    <UserContext value={{ user, onLogin, onLogout }}>{children}</UserContext>
  );
};
