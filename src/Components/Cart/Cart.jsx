import React from 'react'
import './Cart.css'
import { Helmet } from 'react-helmet'
import CommonSection from '../CommonSection/CommonSection'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../redux/Slice/CartSlice'
import { Link } from 'react-router-dom'

export default function Cart() {

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <div>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <CommonSection title="Shopping Cart" />

      {/* Cart */}

      <section className="Cart my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {cartItems.length == 0 ? (
                <h2 className="text-center my-5 fw-fw-semibold">
                  No Products added to the Cart!🛍️
                </h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="col-md-3">
              <div className="d-flex gap-5 mb-2">
                <h5>Total Price</h5>
                <span className='fw-bold'>${totalAmount}</span>
              </div>
              <p className='text-muted'>taxes and shipping will calculate in checkout</p>
              <div className='d-flex flex-column gap-3'>
                <button className="btn-custom"><Link className='text-decoration-none text-white' to={'/checkout'}>Chekout</Link></button>
                <button className="btn-custom"><Link className='text-decoration-none text-white' to={'/shop'}>Continue Shopping</Link></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Tr ({item}){

  const dispatch = useDispatch();
  
  function deleteProduct() {
    dispatch(cartActions.deleteItem(item.id));
  }

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="Product-image" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <i
          className="fa-solid fa-trash"
          style={{ cursor: "pointer", color: "blue" , fontSize: "22px" }}
          onClick={deleteProduct}
        ></i>
      </td>
    </tr>
  );
}