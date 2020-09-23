import React from 'react';
import BaseLayout from './canvas/layout/baselayout';
import NavBar from './canvas/navbar';
import Header from './canvas/header';

function PortfolioApp() {
  return (
    
    <BaseLayout navigation = {<NavBar />}>
      <Header />
    </BaseLayout>
  );
}

export default PortfolioApp;
