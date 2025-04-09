import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/Slice/CartSlice";
 import { toast } from "react-toastify";

export default function ProductCard({ item }) {

 const dispatch = useDispatch()

 function addToCart(){
  dispatch(
    cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    })
  );

  toast.success('Product added successfully👌')
 }


  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="product-img">
        <img src={item.imgUrl} width={"300px"} alt="Chair" />
      </div>
      <div className="head-card">
        <h3 className="fs-5 mt-3">
          <Link
            className="text-decoration-none text-dark "
            to={`/shop/${item.id}`}
          >
            {item.productName}
          </Link>
        </h3>
      </div>
      <span>{item.category}</span>
      <div className="card-bottom d-flex justify-content-between">
        <span>${item.price}</span>
        <span onClick={addToCart}>
          <i class="fa-solid fa-cart-plus"></i>
        </span>
      </div>
    </div>
  );
}
