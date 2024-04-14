import React from 'react';
import { Link } from 'react-router-dom';
import HostHeader from '../Components/HostHeader';
import HostNavigations from '../Components/HostNavigations';
import LandingPageFooter from '../Components/LandingPageFooter';

const HostDashboard = () => {
  return (
    <div style={{backgroundColor: "#FFF7ED"}}>
      <HostHeader/>
        <div className='mt-5 pt-5'> 
          <HostNavigations/>

                <div className='ps-2 pt-5 mt-5 pb-3' style={{backgroundColor:"#FFEAD0"}}>
                    <p className='ms-3 fw-bold fs-3'>Welcome!</p>

                    <div className='ms-3 d-flex justify-content-between'>
                        <small>Income last <span style={{textDecoration:"underline"}}>30/days</span></small>
                        <small className='mt-2 pe-3'>Details</small>
                    </div>

                    <div className='ms-3 mt-3'>
                        <b className='fs-1'>$2,260</b>                        
                    </div>

                </div>

                    <div className='ps-3 pt-4 pb-4 pe-3 d-flex justify-content-between' style={{backgroundColor:"#FFDDB2"}}>
                        <div className='fw-bold'>
                            Review score
                             <span className='ms-3 fw-bold'><i class="ri-star-fill fs-5 me-1" style={{color:"#FF8C38"}}></i>5.0</span>
                             <span className='fw-light'>/5</span>
                        </div>
                        <small className='mt-2'>Details</small>
                    </div>
        </div>



        <div className='pt-5 mx-3'>
            <div className='d-flex justify-content-between'>
                <p className='fs-4 fw-bold'>Your listed vans</p>
                <small className='mt-2'>Veiw all</small>
            </div>
        </div>
        <LandingPageFooter/>
    </div>
  );
}

export default HostDashboard;
