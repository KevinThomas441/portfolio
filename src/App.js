import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaseLayout from './canvas/layout/baselayout';
import NavBar from './canvas/navbar';

function PortfolioApp() {
  return (
    
    <BaseLayout>
      <NavBar></NavBar>
      Content
    </BaseLayout>
  );
}

export default PortfolioApp;
