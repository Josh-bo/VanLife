import React from 'react';
import { Link } from 'react-router-dom';

const HostNavigations = () => {
  return (
    <div>
        <div className='d-flex gap-3 mt-3 ps-3 fw-bold'>
                <Link to='/host/dashboard' className='nav-link vansHover'>
                    Dashboard
                </Link>

                <Link to='/host/incomes' className='nav-link vansHover'>
                    Income
                </Link>

                
                <Link to='/host/vans' className='nav-link vansHover'>
                    Vans
                </Link>

                <Link to='/host/reviews' className='nav-link vansHover'>
                    Reviews
                </Link>
            </div>
    </div>
  );
}

export default HostNavigations;
