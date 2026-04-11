import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Navbar from './Navbar';
import FoodGallery from './FoodGallery';
import Footer from './Footer';
import BackToTop from './BackToTop';
import CartDrawer from './CartDrawer';
import Preloader from './Preloader';

const Layout = () => {
  return (
    <>
      <Preloader />
      <Topbar />
      <Navbar />
      <CartDrawer />
      <main>
        <article>
          <Outlet />
        </article>
      </main>
      <FoodGallery />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
