import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';

import styles from './Layout.module.scss'

export const Layout = ({ children }) => (
  <div className={styles['layout']}>
    <Header />
    {children}
    <Footer />
  </div>
);
