import React from 'react';


import BaseLayout from './canvas/layout/baselayout';
import NavBar from './canvas/navbar';
import Header from './canvas/header';
import Projects from './canvas/projects';
import Skills from './canvas/skills';
import Experience from './canvas/experience';
import Footer from './canvas/footer';
import About from './canvas/about';
import AddSkill from './canvas/skills/addskill';
import SkillRow from './canvas/skills/skillrow';

function PortfolioApp() {
  return (
    <BaseLayout navigation = {<NavBar />} footer={<Footer />}>
      <Header title="Kevin Thomas" caption="Software Development | Machine Learning | Data science"/>
      <Projects />
      {/* <Skills>
        <SkillRow title="Languages">
          <AddSkill title="Py" caption="Python"></AddSkill>
          <AddSkill title="Sq" caption="SQL"></AddSkill>
          <AddSkill title="Jv" caption="Java"></AddSkill>
          <AddSkill title="Js" caption="JavaScript" small></AddSkill>
          <AddSkill title="Ht" caption="HTML" small></AddSkill>
          <AddSkill title="Cs" caption="CSS" small></AddSkill>
          <AddSkill title="Cp" caption="C++" small></AddSkill>
        </SkillRow>
        <SkillRow title="Frameworks, Tools & Cloud">
          <AddSkill title="Np" caption="Numpy"></AddSkill>
          <AddSkill title="Pd" caption="Pandas"></AddSkill>
          <AddSkill title="Sk" caption="scikit-learn"></AddSkill>
          <AddSkill title="Pt" caption="PyTorch"></AddSkill>
          <AddSkill title="Gi" caption="Git"></AddSkill>
          <AddSkill title="Rt" caption="ReactJS"></AddSkill>
        </SkillRow>
        <SkillRow>
          <AddSkill title="Tf" caption="TensorFlow" small></AddSkill>
          <AddSkill title="Ke" caption="Keras" small></AddSkill>          
          <AddSkill title="Az" caption="Azure" small></AddSkill>
          <AddSkill title="Aw" caption="AWS" small></AddSkill>
          <AddSkill title="Gc" caption="Google Cloud" small></AddSkill>
        </SkillRow>
        <SkillRow title="Machine Learning">
          <AddSkill title="Li" caption="Linear Regression"></AddSkill>
          <AddSkill title="Lo" caption="Logistic Regression"></AddSkill>          
          <AddSkill title="Nb" caption="Naive Bayes"></AddSkill>
          <AddSkill title="Sv" caption="SVM"></AddSkill>
          <AddSkill title="Dt" caption="Decision Trees"></AddSkill>
          <AddSkill title="Rf" caption="Random Forest"></AddSkill>
          <AddSkill title="Nn" caption="Neural Networks"></AddSkill>
          <AddSkill title="Cn" caption="Convolutional NN"></AddSkill>
        </SkillRow>
      </Skills> */}
      <Skills>
        <SkillRow title="Data Science & Software Development">
          <AddSkill title="Py" caption="Python" color="#75E4B3"></AddSkill>
          <AddSkill title="Sq" caption="SQL" color="#F39C6B"></AddSkill>
          <AddSkill title="Gi" caption="Git"></AddSkill>
          <AddSkill title="Rj" caption="ReactJS" color="#FF3864"></AddSkill>
          <AddSkill title="Jv" caption="Java"></AddSkill>
          <AddSkill title="Np" caption="Numpy" color="#9191E9"></AddSkill>
          <AddSkill title="Pd" caption="Pandas"></AddSkill>
          <AddSkill title="Sk" caption="scikit-learn" color="#F39C6B"></AddSkill>
          <AddSkill title="Pt" caption="PyTorch" color="#FF3864"></AddSkill>
        </SkillRow>
        <SkillRow>    
          <AddSkill title="Fa" caption="fastai" color="#9191E9" small></AddSkill>
          <AddSkill title="Tf" caption="TensorFlow" color="#F39C6B" small></AddSkill>
          <AddSkill title="Ke" caption="Keras" small></AddSkill>
          <AddSkill title="Dj" caption="Django" color="#75E4B3" small></AddSkill> 
          <AddSkill title="Az" caption="Azure" color="#9191E9" small></AddSkill>
          <AddSkill title="Aw" caption="AWS" color="#F39C6B" small></AddSkill>
          <AddSkill title="Gc" caption="Google Cloud" color="#FAF3DD" small></AddSkill>
          <AddSkill title="Ht" caption="HTML" small></AddSkill>
          <AddSkill title="Js" caption="JavaScript" small></AddSkill>
          <AddSkill title="Cp" caption="C++"small></AddSkill>
          <AddSkill title="Do" caption="Docker" color="#9191E9" small></AddSkill>   
          <AddSkill title="Mo" caption="MATLAB" small></AddSkill>   
        </SkillRow>
        <SkillRow title="Machine Learning">
          <AddSkill title="Li" caption="Linear Regression"></AddSkill>
          <AddSkill title="Lo" caption="Logistic Regression"></AddSkill>          
          <AddSkill title="Nb" caption="Naive Bayes"></AddSkill>
          <AddSkill title="Sv" caption="SVM"></AddSkill>
          <AddSkill title="Dt" caption="Decision Trees"></AddSkill>
          <AddSkill title="Rf" caption="Random Forest"></AddSkill>
          <AddSkill title="Cl" caption="Clustering"></AddSkill>
          <AddSkill title="En" caption="Ensemble Methods"></AddSkill>
          <AddSkill title="Pc" caption="PCA" small></AddSkill>
        </SkillRow>
        <SkillRow title="Computer Vision & Natural Language Processing">
          <AddSkill title="Cv" caption="OpenCV"></AddSkill>
          <AddSkill title="Cn" caption="Convolutional Networks"></AddSkill>          
          <AddSkill title="Nt" caption="NLTK"></AddSkill>
          <AddSkill title="Rn" caption="Recurrent Networks" small></AddSkill>
          <AddSkill title="Lt" caption="LSTM" small></AddSkill>
        </SkillRow>

      </Skills>
      <Experience />
      <About />
    </BaseLayout>
  );
  
}

export default PortfolioApp;