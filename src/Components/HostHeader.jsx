import React from 'react';
import { Link } from 'react-router-dom';

const HostHeader = () => {
  return (
    <div>
             <nav class="navbar navbar-expand-lg fixed-top pt-3 pb-3" style={{backgroundColor: "#FFF7ED"}}>
    <div class="container-fluid justify-content-between">
        <div>
            <Link to="/" className='nav-link fw-bold'>
                <b class="fs-4 ms-3">#VANLIFE</b>
            </Link>
        </div>

        <div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link to="" className='nav-link fw-bold vansHover'>
                        <li class="nav-item ">
                            <a class="nav-link fw-bold" aria-current="page">Home</a>
                        </li>
                    </Link>

                    <Link to="/about" className='nav-link fw-bold vansHover'>
                        <li class="nav-item ">
                            <a class="nav-link fw-bold" aria-current="page">About</a>
                        </li>
                    </Link>

                    <Link to="/vans" className='nav-link fw-bold vansHover'>
                        <li class="nav-item ">
                            <a class="nav-link fw-bold" aria-current="page">Vans</a>
                        </li>
                    </Link>
                      
                </ul>
            
            </div>
        </div>

    </div>
  </nav>
  
    </div>
  );
}

export default HostHeader;
