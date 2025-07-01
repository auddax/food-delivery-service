'use client';

import { useContext } from 'react';
import { Toggler } from 'src/components/Toggler/Toggler';
import { ButtonThemeContext } from 'src/contexts/ButtonThemeContext/ButtonThemeContext';

export const ThemeToggler = () => {
  const { switchTheme } = useContext(ButtonThemeContext);

  const handleOnChange = (e) => switchTheme(e.target.checked);

  return <Toggler onChange={handleOnChange} />;
};
