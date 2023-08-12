import React from 'react'
import './Navigation.css';
import { Link } from 'react-router-dom';
// import 'bootstrap-icons/font/bootstrap-icons.css';

function Navigation() {
  return (
   <div className='d-flex flex-column  text-white vh-100 sidebar'>
    <div  className='d-flex align-items-center anchor '>
      <h1 className=' head-h1 '>Kona<span className='head-span'>digital.ai</span></h1>
    </div>
    <ul className='nav nav-pills flex-column p-0 m-0'>
        <li className='nav-item p-2'>
          <Link to= {'/'} className='nav-link text-white '>
          <i className="fa-solid fa-chart-line fs-5 me-2"></i>
            <span className='fs-5'>dashboard</span>
          </Link>
        </li>
        <li className='nav-item p-1'>
          <Link to= {'/leads'} className='nav-link text-white'>
          <i className="fa-regular fa-user fs-5 me-2"></i>
            <span className='fs-5'>leads</span>
          </Link>
        </li>
        <li className='nav-item p-1'>
          <Link to= {"/report"} className='nav-link text-white'>
          <i className="fa-regular fa-circle-xmark fs-5 me-2"></i>
            <span className='fs-5'>report</span>
          </Link>
        </li>
        <li className='nav-item p-1'>
          <Link to= {'/settings'} className='nav-link text-white'>
          <i className="fa-solid fa-sliders fs-5 me-2"></i>
            <span className='fs-5'>settings</span>
          </Link>
        </li>
    </ul>
   </div>
  )
}

export default Navigation;
