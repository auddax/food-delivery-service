import { useState } from 'react';
import { ButtonThemeContext } from 'src/contexts/ButtonThemeContext/ButtonThemeContext';

export const ButtonThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');

  const switchTheme = (isSwitched) => {
    setTheme(isSwitched ? 'alt' : 'default');
  };

  return (
    <ButtonThemeContext value={{ theme, switchTheme }}>
      {children}
    </ButtonThemeContext>
  );
};
