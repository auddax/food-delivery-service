import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import { ScrollProgressBar } from 'src/components/ScrollProgressBar/ScrollProgressBar';

import styles from './Layout.module.scss';

export const Layout = ({ children }) => (
  <div className={styles.layout}>
    <ScrollProgressBar />
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);
