import React from 'react';
import ErrorNavbar from '../Pages/ErrorNavbar';
import LandingPageFooter from './LandingPageFooter';
import { Link } from 'react-router-dom';
// import '../Styles/LandingPage.css'

const ErrorPage = () => {
  return (
    <div className='pb-5 '  style={{backgroundColor: "#FFF7ED"}}>
      <ErrorNavbar/>

      <div>
      <div className='container mt-5 pt-2 pb-5'>
            <div className="row mx-auto mt-5 pt-5 pb-5">
                <div className="col-sm-12 col-md-6 col-lg-6 mx-auto justify-content-center mt-5 pt-5 pb-2">
                  <h4 className='fw-bold'>Sorry, the page you were looking for was not found.</h4>
                  
                  <Link to='/' className='nav-link'>
                   <button className='btn btn-dark w-100 my-4 p-3'>Return to home</button>
                  </Link>
                </div>
            </div>
        </div>
      </div>

      <div className='fixed-bottom'>
        <LandingPageFooter/>
      </div>
    </div>
  );
}

export default ErrorPage;