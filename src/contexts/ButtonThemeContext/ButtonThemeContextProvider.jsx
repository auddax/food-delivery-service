import { useState } from 'react';
import { ButtonThemeContext } from 'src/contexts/ButtonThemeContext/ButtonThemeContext';

export const ButtonThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');

  const switchTheme = () => {
    setTheme((theme) => {
      return theme === 'default' ? 'alt' : 'default';
    });
  };

  return (
    <ButtonThemeContext value={{ theme, switchTheme }}>
      {children}
    </ButtonThemeContext>
  );
};
