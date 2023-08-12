import React from 'react'
import './SearchBar.css'

function SearchBar() {
  return (
    <nav className="navbar p-3">
  <div className="container-fluid">
    <div className='search-div'>
    <form className="d-flex input-group w-auto">
    <span className="input-group-text border-0 icon-span" id="search-addon">
        <i className="fas fa-search"></i>
      </span>
      <input
        type="search"
        className="form-control rounded search-input bg-transparent"
        placeholder="Search Leads"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </form>
    </div>
    <div className='logo-div d-flex'>
         <i className="fa-regular fa-bell"></i>
         
         <i className="fa-regular fa-user fa-users"></i>
    </div>
  </div>
</nav>
  )
}

export default SearchBar
