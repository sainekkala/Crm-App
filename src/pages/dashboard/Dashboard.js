import React from 'react';
import "./Dashboard.css";
import Barchart from './Barchart';
import Piechart from './Piechart';

function Dashboard() {
  return (
    <div className='container dashboard'>
      <div className='row'>
        <div className='d-flex justify-content-between header'>
          <h1 className='h1 text-white'>Dashboard</h1>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle dropdown-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Select Date
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className="dropdown-item">New Lead: Ramu</li>
                  <li className="dropdown-item">New Lead: Ramu</li>
                  <li className="dropdown-item">New Lead: Ramu</li>
                </ul>
              </div>
        </div>
      </div>
      <div className='grid-box'>
        <div className='box box1'>
          <h1 className='h1 text-white'>150</h1>
          <p className='text-success'>Total Leads</p>
        </div>
        <div className='box box2'><Barchart /></div>
        <div className='box box3'><Piechart /></div>
        <div className='box box4'>
          <h1 className='h1 text-white'>25</h1>
          <p className='text-warning'>Total Cold Leads</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
