import React from 'react'
import logo from '../images/logo.png'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light nav-bg">
  <div className="container-fluid">
    <a className="navbar-brand logo" href="#"><img src={logo} className="logo-img" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Training</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">Teachers</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form className="d-flex">
          <div className="btn-nav">
            <button className="btn-own" type="submit">Buy Now <i className="fas fa-angle-right"></i></button>
          </div>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}
