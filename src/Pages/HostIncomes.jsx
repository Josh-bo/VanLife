import React from 'react';
import HostHeader from '../Components/HostHeader';
import HostNavigations from '../Components/HostNavigations';

const HostIncomes = () => {
  return (
    <div style={{backgroundColor: "#FFF7ED"}}>
      <HostHeader/>
      <div className='mt-5 pt-5 ps-3'>
        <HostNavigations/>
        <div className='ms-3 mt-4'>
          <b className='fs-1'>Income</b>

          <div className='my-3'>
            <small>Last</small><small className='ms-1' style={{textDecoration:"underline"}}>30/days</small>
          </div>
          <b className='mt-4 fs-1'>$2,260</b>



          <div className='mt-4 col-sm-7 col-md-5 col-lg-4 dLarge'>
            <div className='d-flex justify-content-between my-3 border'>
              <div className=''>$5k</div>
              <div className='brokenBorder mx-3'>__ __ __ __ __ __ __ __ __ __ __ __ __ __</div>
            </div>

            <div className='d-flex justify-content-between my-3'>
              <div className=''>$4k</div>
              <div className='brokenBorder mx-3'>__ __ __ __ __ __ __ __ __ __ __ __ __ __</div>
            </div>

            <div className='d-flex justify-content-between my-3'>
              <div className=''>$3k</div>
              <div className='brokenBorder mx-3'>__ __ __ __ __ __ __ __ __ __ __ __ __ __</div>
            </div>

            <div className='d-flex justify-content-between my-3'>
              <div className=''>$2k</div>
              <div className='brokenBorder mx-3'>__ __ __ __ __ __ __ __ __ __ __ __ __ __</div>
            </div>

            <div className='d-flex justify-content-between my-3'>
              <div className=''>$1k</div>
              <div className='brokenBorder mx-3'>__ __ __ __ __ __ __ __ __ __ __ __ __ __</div>
            </div>

            <div className='d-flex justify-content-between my-3'>
              <div className=''>$0k</div>
              <div className='brokenBorder mx-3'>__ __ __ __ __ __ __ __ __ __ __ __ __ __</div>
            </div>

          </div>

          <div className='mt-4 col-sm-3 col-md-4 col-lg-3 dSmall d-sm-none'>
            <div className='d-flex justify-content-between my-3 border'>
              <div className=''>$5k</div>
              <div className='brokenBorder mx-3'>__ __ __ __ __ __ __ __ __ __ __ __ __</div>
            </div>

            <div className='d-flex justify-content-between my-3'>
              <div className=''>$4k</div>
              <div className='brokenBorder mx-3'>__ __ __ __ __ __ __ __ __ __ __ __ __</div>
            </div>

            <div className='d-flex justify-content-between my-3'>
              <div className=''>$3k</div>
              <div className='brokenBorder mx-3'>__ __ __ __ __ __ __ __ __ __ __ __ __</div>
            </div>

            <div className='d-flex justify-content-between my-3'>
              <div className=''>$2k</div>
              <div className='brokenBorder mx-3'>__ __ __ __ __ __ __ __ __ __ __ __ __</div>
            </div>

            <div className='d-flex justify-content-between my-3'>
              <div className=''>$1k</div>
              <div className='brokenBorder mx-3'>__ __ __ __ __ __ __ __ __ __ __ __ __</div>
            </div>

            <div className='d-flex justify-content-between my-3'>
              <div className=''>$0k</div>
              <div className='brokenBorder mx-3'>__ __ __ __ __ __ __ __ __ __ __ __ __</div>
            </div>

          </div>
        </div>
        </div>
    </div>
  );
}

export default HostIncomes;
