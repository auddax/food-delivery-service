import { useState } from 'react';
import { INITIAL_USER_INFO } from 'src/constants';
import { UserContext } from 'src/contexts/UserContext/UserContext';

const mockUserInfo = {
  name: 'Antony',
  review: 'Not bad',
  rating: 5,
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
