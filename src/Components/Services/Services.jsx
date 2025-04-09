import React from 'react'
import './Services.css'

export default function Services() {
  return (
    <section className="services mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="servies-item1 d-flex align-items-center gap-3">
              <span className="service-icon">
                <i class="fa-solid fa-truck"></i>
              </span>
              <div>
                <h3 className="fs-5">Free Shipping</h3>
                <p>No-charge shipping—shop now and save!</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="servies-item2 d-flex align-items-center gap-3">
              <span className="service-icon">
                <i class="fa-solid fa-rotate"></i>
              </span>
              <div>
                <h3 className="fs-5">Easy Returns</h3>
                <p>Easy returns within 30 days—shop with confidence!</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="servies-item3 d-flex align-items-center gap-3">
              <span className="service-icon">
                <i class="fa-solid fa-money-check"></i>
              </span>
              <div>
                <h3 className="fs-5">Secure Payment</h3>
                <p>We protect your data with advanced security measures.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="servies-item4 d-flex align-items-center gap-3">
              <span className="service-icon">
                <i class="fa-solid fa-retweet"></i>
              </span>
              <div>
                <h3 className="fs-5">Back Guarantee</h3>
                <p>Guaranteed satisfaction or your money back!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
