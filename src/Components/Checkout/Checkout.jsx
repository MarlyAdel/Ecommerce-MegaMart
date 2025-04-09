import React from 'react'
import './Checkout.css'
import { Helmet } from 'react-helmet';
import CommonSection from '../CommonSection/CommonSection';
import { useSelector } from 'react-redux';

export default function Checkout() {

 const totalQuantity = useSelector(state => state.cart.totalQuantity);
 const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <div>
      <Helmet>
        <title>Chekout</title>
      </Helmet>
      <CommonSection title="Checkout" />

      <section className="checkout">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h5 className="fw-bold my-4">Billing Address :</h5>
              <form className='billing-form'>
                <div className="checkout-form d-flex flex-column gap-3 mb-4 ">
                  <input type="text" placeholder="Enter your Name" />
                  <input type="email" placeholder="Enter your Email" />
                  <input type="tel" placeholder="Phone number" />
                  <input type="text" placeholder="Street Address" />
                  <input type="text" placeholder="Country" />
                  <input type="text" placeholder="City" />
                  <input type="text" placeholder="Postal Code" />
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <div className="checkout-card">
                <h6>Total Qty:<span>{totalQuantity} items</span></h6>
                <h6>Subtotal:<span>${totalAmount}</span></h6>
                <h6>Shipping:<span>$0</span></h6>
                <h6>Free Shipping</h6>
                <h4>Total:<span>${totalAmount}</span></h4>
                <button className='checkout-btn w-100 mt-3 py-1'>Place Order Now</button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
