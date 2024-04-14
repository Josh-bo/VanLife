import React from 'react';
import LandingPageNavbar from '../Components/LandingPageNavbar';
import HeroLandingPage from '../Components/HeroLandingPage';
import LandingPageFooter from '../Components/LandingPageFooter';

const LandingPage = () => {
  return (
    <div>
      <LandingPageNavbar/>
      <HeroLandingPage/>
      <LandingPageFooter/>
    </div>
  );
}

export default LandingPage;
