import React from 'react';
import Header from '../components/Header';
import Analytics from '../components/Analytics';

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section>
        <Analytics></Analytics>
      </section>
    </div>
  );
};

export default MainLayout;