import React from 'react';
import HostHeader from '../Components/HostHeader';
import HostNavigations from '../Components/HostNavigations';
import LandingPageFooter from '../Components/LandingPageFooter';

const HostVans = () => {
  return (
    <div style={{backgroundColor: "#FFF7ED"}}>
        <HostHeader/>
      <div className='mt-5 pt-5 ps-3'>
        <HostNavigations/>

        <div className='pt-5 mx-3'>
            <div className='d-flex justify-content-between'>
                <p className='fs-4 fw-bold'>Your listed vans</p>
                <small className='mt-2'>Veiw all</small>
            </div>
        </div>
      </div>
      <LandingPageFooter/>
    </div>
  );
}

export default HostVans;
