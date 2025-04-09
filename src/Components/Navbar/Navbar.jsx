import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import logoImg from "../../assets/images/eco-logo.png"
import profileImg from '../../assets/images/user-icon.png'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function Navbar() {

  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const navigate = useNavigate()

  const [profileImage, setProfileImage] = useState(profileImg); // default img
  const profileActionRef = useRef(null)

  const location = useLocation()

  useEffect(() => {
    const userImage = localStorage.getItem("currentUserImage");
    if (userImage) {
      setProfileImage(userImage);
    }
  }, []);


  function navigateToCart(){
      navigate('cart');
  }

  function toggleProfileActions()  {
    profileActionRef.current.classList.toggle('show-profileActions')
  }

  //* Logout
  function logOut(){
    localStorage.removeItem("isAuthenticated");
    toast.success('Loggedout')
    navigate('/login')
  }

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
   <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>
            <img className='img-logo' src={logoImg} alt="Logo" />MegaMart
          </Link>

          {!isAuthPage && (
            <>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto text-center mb-2 mb-lg-0">
                  <li className="nav-item pe-2">
                    <NavLink className="nav-link" to={'/'}>Home</NavLink>
                  </li>
                  <li className="nav-item pe-2">
                    <NavLink className="nav-link" to={'/shop'}>Shop</NavLink>
                  </li>
                  <li className="nav-item pe-2">
                    <NavLink className="nav-link" to={'/cart'}>Cart</NavLink>
                  </li>
                </ul>

                <div className="nav-icons d-flex">
                  <div className="cart-icon" onClick={navigateToCart}>
                    <i className="fa-solid fa-bag-shopping pe-2 fs-4"></i>
                    <span className="badge">{totalQuantity}</span>
                  </div>

                  <img
                    className='nav-profileImg'
                    src={profileImage}
                    alt="profileImg"
                    onClick={toggleProfileActions}
                  />
                  <div className="profile-action" ref={profileActionRef} onClick={toggleProfileActions}>
                    
                      <span onClick={logOut}>Logout</span>
                    
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  )
}
