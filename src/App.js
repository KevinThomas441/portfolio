import React from 'react';


import BaseLayout from './canvas/layout/baselayout';
import NavBar from './canvas/navbar';
import Header from './canvas/header';
import Projects from './canvas/projects';
import Skills from './canvas/skills';

function PortfolioApp() {
  return (
    <BaseLayout navigation = {<NavBar />}>
      <Header title="Kevin Thomas" caption="Software Development | Machine Learning | Data science"/>
      <Projects />
      <Skills />
    </BaseLayout>
  );
  
}

export default PortfolioApp;