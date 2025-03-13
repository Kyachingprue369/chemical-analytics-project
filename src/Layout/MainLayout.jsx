import React from 'react';
import Header from '../components/Header';
import Analytics from '../components/Analytics';
import Footer from '../components/Footer';
import Dotex from '../components/Dotex';

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section>
        <Analytics></Analytics>
        <Dotex></Dotex>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;