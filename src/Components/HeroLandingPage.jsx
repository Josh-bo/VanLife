import React from 'react';
import vanLandingOne from '../assets/vanLandingOne.png'
import '../Styles/LandingPage.css'
import { Link } from 'react-router-dom';

const HeroLandingPage = () => {
  return (
    <div className='maxheight'>
        <div>
             <img src={vanLandingOne} className='img-fluid w-100 landingImg' alt="" />
        </div>

        <div className='container overLayText text-light text-center'>
            <p className='fs-1 fw-bold'>You got the travel plans, we got the travel vans.</p>
            <p className='fs-5'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>


          <Link to="/vans">
            <button className='vanBtn rounded p-2 w-100 text-light'>Find your van</button>
          </Link>
        </div>
    </div>
  );
}

export default HeroLandingPage;
