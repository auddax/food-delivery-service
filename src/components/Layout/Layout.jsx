import { Outlet } from 'react-router';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import { ScrollProgressBar } from 'src/components/ScrollProgressBar/ScrollProgressBar';

import styles from './Layout.module.scss';

export const Layout = () => (
  <div className={styles.layout}>
    <ScrollProgressBar />
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);
