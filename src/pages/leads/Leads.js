import React, { useEffect, useState } from 'react';
import axios  from "axios";
import "./Leads.css"
import {Link} from "react-router-dom"

function Leads() {
  
  const [data,setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

   useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);

    axios.get('http://localhost:3002/admin/allUsers', {
      headers: {
        Authorization: ` ${token}`
      }
    })
    .then((res) => {
          console.log(res.data)
          setData(res.data);
          setTotalPages(Math.ceil(res.data.length / itemsPerPage));
    })
    .catch(error => {
    console.error('Error fetching data:', error);
  });
  },[itemsPerPage])

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
   
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
 

  return (
   <>
   <div className='container leads-container'>
    <div className='row'>
      <div className='col-sm-12 my-4 leadshead'>
        <h1 className='text-white'>leads</h1>
        <div>
        <button className='btn btn-primary'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className='text-white'>
          Page {currentPage} of {totalPages}
        </span>
        <button className='btn btn-primary'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <Link to={"/adduser"} className='btn btn-danger ms-2'>Create Lead</Link>
      </div>
       
      </div>
      <div className='col-sm-12 data table-responsive '>
       <table className='table  table-hover'>
        <thead>
          <tr>
           <th>Name</th>
           <th>Email</th>
           <th>Phone</th>
           <th>Technology</th>
           <th>leadOwner</th>
           <th>Source</th>
           <th>Stage</th>
          </tr>
        </thead>
        <tbody>
          {
            currentData.map((lead,index) => {
              return (
                <tr key={index}>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.technology}</td>
                  <td>{lead.leadOwner}</td>
                  <td>{lead.source}</td>
                  <td>{lead.stage}</td>
                </tr>
              )
            })
          }
        </tbody>
       </table>
      </div>
    
    </div>
   </div>
   </>
  )
}

export default Leads;


 