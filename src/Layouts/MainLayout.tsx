import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../Components';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
