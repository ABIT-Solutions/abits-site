// Layout.js

import React from 'react';

const CompanyTellUsAboutYourProjButton = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="companyTellUsAboutYourProjButton" id="companyTellUsAboutYourProjButton">
      <button className="buttonlink" onClick={() => scrollToSection('customToolbar')}>Tell Us About Your Project</button>
    </div>
  );
};

export default CompanyTellUsAboutYourProjButton;
