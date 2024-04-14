import React from 'react';
import SignInNavbar from '../Components/SignInNavbar';
import '../Styles/LandingPage.css';
import LandingPageFooter from '../Components/LandingPageFooter';

const SignInPage = () => {
  return (
      <div className='mt-5 pt-5 pb-5 '  style={{backgroundColor: "#FFF7ED"}}>
      <SignInNavbar/>
    <div>
        <div className='container mt-5 pt-2 pb-5'>
            <div className="row mx-auto text-center">
                <div className="col-sm-12 col-md-6 col-lg-6 mx-auto justify-content-center">
                    <h3 className='' style={{fontWeight:"800"}}>Sign in to your account</h3>

                    <div className='mt-5'>
                        <input type="text" placeholder='Email address' className='form-control' />
                        <input type="text" placeholder='Password' className='form-control' />

                        <button className='vanBtn rounded p-2 w-100 text-light my-4 p-4'>Sign in</button>
                    </div>

                    <div className='mt-4 fw-bold'>
                      Don’t have an account? <span style={{color:"#FF8C38"}}> Create one now</span>
                    </div>
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

export default SignInPage;
