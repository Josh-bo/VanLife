import React from 'react';
import LandingPageNavbar from '../Components/LandingPageNavbar';
import LandingPageFooter from '../Components/LandingPageFooter';
import arrow from '../assets/arrow.PNG'
import { Link } from 'react-router-dom';
import van1 from '../assets/van1.png'
import '../Styles/LandingPage.css'

const DisplayEachVanPage = () => {
  return (
    <div>
      <LandingPageNavbar/>
           <div className='mt-5 pt-5 mb-4' style={{backgroundColor: "#FFF7ED"}}>
            <div className='mt-3 ms-4'>
                <span>
                    <img src={arrow} className='img-fluid' style={{width:"25px"}} alt="" />
                </span>

                <span className='fs-5 mx-2'>
                    <Link to="/vans" className='text-dark'>
                         Back to all vans
                    </Link>
                </span>
            </div>


            <div className='mt-5 container'>
                <div className='col-sm-12 col-md-6 col-lg-6 mx-auto'>
                    <div>
                        <img src={van1} className='img-fluid rounded' alt="" />
                    </div>

                    <button className='border-0 w-50 rounded text-light p-2 mt-5' style={{backgroundColor:"#E17654"}}>Simple</button>

                    <div className="mt-4">
                    <span className="card-text fw-bold fs-4">Modest Explorer</span><br />
                    <span className="card-text fw-bold">$60</span><span>/day</span>

                    <p className='mt-4' style={{fontWeight:"500"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum velit aspernatur, sequi, asperiores autem voluptatibus amet error magnam assumenda quasi repellendus, explicabo deleniti? Aspernatur deleniti quos optio obcaecati doloremque!
                    </p>

                    <button className='vanBtn rounded p-2 w-100 text-light'>Rent this van</button>

                  </div>
                </div>
            </div>
           </div>
      <LandingPageFooter/>
    </div>
  );
}

export default DisplayEachVanPage;
 