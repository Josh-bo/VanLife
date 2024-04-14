import React from 'react';
import LandingPageNavbar from '../Components/LandingPageNavbar';
import LandingPageFooter from '../Components/LandingPageFooter';
import '../Styles/Van.css'
import { Link } from 'react-router-dom';
import van1 from '../assets/van1.png';
import van2 from '../assets/van2.png';
import van3 from '../assets/van3.jpeg';
import van4 from '../assets/van4.png';
import van5 from '../assets/van5.png';
import van6 from '../assets/van6.png';

const VansPage = () => {
  return (
    <div className=''>
        <LandingPageNavbar/>

        <section className='mt-5 pt-5 mb-5' style={{backgroundColor: "#FFF7ED"}}>
          <div className='pt-3'>
            <p className='fs-3 fw-bold p-3'>Explore our van options</p>

          <div className='d-flex justify-content-between'>
            <div>
              <button className='btnStyles rounded ps-3 pe-3 pt-1 pb-1 mx-2 my-1 simple'>Simple</button>
              <button className='btnStyles rounded ps-3 pe-3 pt-1 pb-1 mx-2 my-1 luxury'>Luxury</button>
              <button className='btnStyles rounded ps-3 pe-3 pt-1 pb-1 mx-2 my-1 rugged'>Rugged</button>
            </div>

            <div>
              <Link className='text-muted fs-5 pe-3'>Clear filters</Link>
            </div>
          </div>
          </div> 



          <div className='mt-5 container mx-auto justify-content-center'>
            <div className="row mx-auto w-100 justify-content-center">
                <div className="col-sm-2 col-md-5 col-lg-4">
              <Link to="/displayVan" className='nav-link'>
                <div className="card border-0 mt-4" style={{width: '17rem', backgroundColor: "#FFF7ED"}}>
                  <img src={van1} className="card-img-top rounded" alt="..." style={{ height:"13.6rem"}}/>
                  <div className="mt-4 d-flex justify-content-between">
                    <p className="card-text fw-bold" style={{fontSize:"16px"}}>Modest Explorer</p>
                    <p className="card-text text-end fw-bold">$60 <br />/day</p>
                  </div>
                    <button className='border-0 w-50 rounded text-light p-2' style={{backgroundColor:"#E17654"}}>Simple</button>
                </div>
              </Link>
                </div>

              <div className="col-sm-2 col-md-5 col-lg-4">
              <div className="card border-0 mt-4" style={{width: '17rem', backgroundColor: "#FFF7ED"}}>
                <img src={van2} className="card-img-top rounded" alt="..." style={{ height:"13.6rem"}}/>
                <div className="mt-4 d-flex justify-content-between">
                  <p className="card-text fw-bold" style={{fontSize:"16px"}}>Beach Bum</p>
                  <p className="card-text text-end fw-bold">$80 <br />/day</p>
                </div>
                  <button className='border-0 w-50 rounded text-light p-2' style={{backgroundColor:"#115E59"}}>Rugged</button>
              </div>
              </div>

              <div className="col-sm-2 col-md-5 col-lg-4">
              <div className="card border-0 mt-4" style={{width: '17rem', backgroundColor: "#FFF7ED"}}>
                <img src={van3} className="card-img-top rounded" alt="..." style={{ height:"13.6rem"}}/>
                <div className="mt-4 d-flex justify-content-between">
                  <p className="card-text fw-bold" style={{fontSize:"16px"}}>Reliable Red </p>
                  <p className="card-text text-end fw-bold">$100 <br />/day</p>
                </div>
                  <button className='btn btn-dark w-50'>Luxury</button>
              </div>
              </div>
   
              <div className="col-sm-2 col-md-5 col-lg-4">
              <div className="card border-0 mt-4" style={{width: '17rem', backgroundColor: "#FFF7ED"}}>
                <img src={van4} className="card-img-top rounded" alt="..." style={{ height:"13.6rem"}}/>
                <div className="mt-4 d-flex justify-content-between">
                  <p className="card-text fw-bold" style={{fontSize:"16px"}}>Dreamfinder</p>
                  <p className="card-text text-end fw-bold">$65 <br />/day</p>
                </div>
                  <button className='border-0 w-50 rounded text-light p-2' style={{backgroundColor:"#E17654"}}>Simple</button>
              </div>
              </div>
   
              <div className="col-sm-2 col-md-5 col-lg-4">
              <div className="card border-0 mt-4" style={{width: '17rem', backgroundColor: "#FFF7ED"}}>
                <img src={van5} className="card-img-top rounded" alt="..." style={{ height:"13.6rem"}}/>
                <div className="mt-4 d-flex justify-content-between">
                  <p className="card-text fw-bold" style={{fontSize:"16px"}}>The Cruiser</p>
                  <p className="card-text text-end fw-bold">$120 <br />/day</p>
                </div>
                  <button className='btn btn-dark w-50'>Luxury</button>
              </div>
              </div>

              <div className="col-sm-2 col-md-5 col-lg-4">
              <div className="card border-0 mt-4" style={{width: '17rem', backgroundColor: "#FFF7ED"}}>
                <img src={van6} className="card-img-top rounded" alt="..." style={{ height:"13.6rem"}}/>
                <div className="mt-4 d-flex justify-content-between">
                  <p className="card-text fw-bold" style={{fontSize:"16px"}}>The Cruiser</p>
                  <p className="card-text text-end fw-bold">$120 <br />/day</p>
                </div>
                  <button className='border-0 w-50 rounded text-light p-2' style={{backgroundColor:"#115E59"}}>Rugged</button>
              </div>
              </div>
   

            


           
            </div>
          </div>
        </section>

      <LandingPageFooter/>
    </div>
  );
}

export default VansPage;