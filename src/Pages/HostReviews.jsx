import React from 'react';
import HostHeader from '../Components/HostHeader';
import HostNavigations from '../Components/HostNavigations';
import LandingPageFooter from '../Components/LandingPageFooter';

const HostReviews = () => {
  return (
    <div style={{backgroundColor: "#FFF7ED"}}>
      <HostHeader/>
      <div className='mt-5 pt-5 ps-3'>
        <HostNavigations/>

        <div className='pt-5 mx-3'>
            <div className=''>
                <span className='fs-4 fw-bold'>Your reviews</span><span className='ms-3'>last 30/days</span>

                <div className='mt-3'>   
                    <span>
                     <b className='fs-4'>5.0</b>
                     <span className='ms-2'>
                      <i class="ri-star-fill fs-5 me-1" style={{color:"#FF8C38"}}></i>
                      <small>overall rating</small>
                     </span>
                    </span>

                    <div className='mt-4'>
                        <div className=" d-flex justify-content-between sixe ">
                            <small className=''>5 stars</small>
                            <p className='rounded mt-2 mx-3 chartLine chartColor'></p>
                            <small className=''>100%</small>
                        </div>

                        <div className=" d-flex justify-content-between sixe">
                            <small className=''>4 stars</small>
                            <p className='rounded mt-2 mx-3 chartLine'></p>
                            <small className='ms-3'>0%</small>
                        </div>

                        <div className=" d-flex justify-content-between sixe">
                            <small className=''>3 stars</small>
                            <p className='rounded mt-2 mx-3 chartLine'></p>
                            <small className='ms-3'>0%</small>
                        </div>

                        <div className=" d-flex justify-content-between sixe">
                            <small className=''>2 stars</small>
                            <p className='rounded mt-2 mx-3 chartLine'></p>
                            <small className='ms-3'>0%</small>
                        </div>

                        <div className=" d-flex justify-content-between sixe">
                            <small className=''>1 stars</small>
                            <p className='rounded mt-2 mx-3 chartLine'></p>
                            <small className='ms-3'>0%</small>
                        </div>
                    </div>
                </div>
            </div>


             <div className='mt-3 col-sm-12 col-md-6 col-lg-3'>
                <b>Review (2)</b>

                <div>
                    <i class="ri-star-s-fill fs-5 me-1" style={{color:"#FF8C38"}}></i>
                    <i class="ri-star-s-fill fs-5 me-1" style={{color:"#FF8C38"}}></i>
                    <i class="ri-star-s-fill fs-5 me-1" style={{color:"#FF8C38"}}></i>
                    <i class="ri-star-s-fill fs-5 me-1" style={{color:"#FF8C38"}}></i>
                    <i class="ri-star-s-fill fs-5 me-1" style={{color:"#FF8C38"}}></i>
                </div>

                <div className='fw-bold mt-3'>Elliot <span className='text-secondary'>December 1, 2022</span></div>
                <div className='mt-3'>
                    The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!
                </div><hr />

                <div>
                    <i class="ri-star-s-fill fs-5 me-1"  style={{color:"#FF8C38"}}></i>
                    <i class="ri-star-s-fill fs-5 me-1" style={{color:"#FF8C38"}}></i>
                    <i class="ri-star-s-fill fs-5 me-1" style={{color:"#FF8C38"}}></i>
                    <i class="ri-star-s-fill fs-5 me-1" style={{color:"#FF8C38"}}></i>
                    <i class="ri-star-s-fill fs-5 me-1" style={{color:"#FF8C38"}}></i>
                </div>
                <div className='fw-bold mt-2'>Sandy<span className='text-secondary'> November 23, 2022</span></div>
                <div className='mt-2'>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</div><hr className='mb-5' />

             </div>
        </div>

      </div>
      <LandingPageFooter/>
    </div>
  );
}

export default HostReviews;
