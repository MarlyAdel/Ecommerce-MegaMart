import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer1">
              <h4>MegaMart</h4>
              <div className="footer-content">
                <p className=" lead">
                  "Discover the best deals on high-quality products with secure
                  payments and fast delivery. Shop with confidence and enjoy a
                  seamless shopping experience."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer2">
              <h4>Top Categories</h4>
              <div className="groupCategories d-flex flex-column">
                <Link
                  className="text-decoration-none pt-2 color-footer"
                  to={"#"}
                >
                  Mobile Phones
                </Link>
                <Link
                  className="text-decoration-none pt-2 color-footer"
                  to={"#"}
                >
                  Arm Chair
                </Link>
                <Link
                  className="text-decoration-none pt-2 color-footer"
                  to={"#"}
                >
                  Modern Sofa
                </Link>
                <Link
                  className="text-decoration-none pt-2 color-footer"
                  to={"#"}
                >
                  Smart Watches
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer3">
              <h4>Useful Links</h4>
              <div className="groupLinks d-flex flex-column">
                <Link
                  className="text-decoration-none pt-2 color-footer"
                  to={"shop"}
                >
                  Shop
                </Link>
                <Link
                  className="text-decoration-none pt-2 color-footer"
                  to={"cart"}
                >
                  Cart
                </Link>
                <Link
                  className="text-decoration-none pt-2 color-footer"
                  to={"login"}
                >
                  Login
                </Link>
                <Link
                  className="text-decoration-none pt-2 color-footer"
                  to={"#"}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer4">
              <h4>Contact</h4>
              <div className="contact-icons d-flex pt-2">
                <span className="pe-2">
                  <i class="fa-solid fa-location-dot color-footer"></i>{" "}
                </span>
                <p className="color-footer">
                  {" "}
                  123 ZirdaBazar,Sylhat,Bangladesh
                </p>
              </div>
              <div className="contact-icons d-flex">
                <span className="pe-2">
                  <i class="fa-solid fa-phone color-footer"></i>
                </span>
                <p className="color-footer"> +031456258846</p>
              </div>
              <div className="contact-icons d-flex">
                <span className="pe-2">
                  <i class="fa-solid fa-envelope color-footer"></i>
                </span>
                <p className="color-footer">example123@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-5 mt-4 text-center color-footer">
        Copyright {year} develpment by MarlyAdel.Allrights reserved
      </p>
    </footer>
  );
}
