import React from 'react'
import "./MainPage.css"
import Navigation from '../../navigation/Navigation';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Leads from "../leads/Leads";
import Report from "../report/Report";
import Settings from "../settings/Settings";
import SearchBar from '../../searchbar/SearchBar';
import Signin from '../../signinpage/Signin';
import AddUser from '../leads/AddUser';

function MainPage() {
  return (
    <BrowserRouter>
    <div className='d-flex'>
     <div className='col-auto'>
      <Navigation />
     </div>
     <div style={{width:"100%"}}>
       <div>
        <SearchBar  />
       </div>
       <div>
       <Routes>
        <Route  path='/' element={<Dashboard />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/leads' element={<Leads />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path='/report' element={<Report />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
       </div>
     </div>
    </div>
    </BrowserRouter>
  )
}

export default MainPage;
