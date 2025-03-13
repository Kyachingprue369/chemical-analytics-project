import React from 'react';
import Header from '../components/Header';
import Analytics from '../components/Analytics';
import Footer from '../components/Footer';
import Dotex from '../components/Dotex';
import ExploreData from '../components/ExploreData';

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section>
        <Analytics></Analytics>
        <Dotex></Dotex>
        <ExploreData></ExploreData>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;