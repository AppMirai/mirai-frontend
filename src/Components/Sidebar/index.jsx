import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi me-2" width={40} height={32}></svg>
          <span className="fs-4">Mirai Admin Web</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}></svg>
              Home
            </Link>
          </li>
          <li>
            <Link to="/form" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}></svg>
              Form
            </Link>
          </li>
          <li>
            <Link to="/product" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}></svg>
              Products
            </Link>
          </li>
          <li>
          <Link to="/user" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}></svg>
              User
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
            <strong>Mot</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
  )
}

export default Sidebar