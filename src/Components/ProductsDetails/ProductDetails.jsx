import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import CommonSection from '../CommonSection/CommonSection'
import { useParams } from 'react-router-dom'
import products from '../../assets/data/products';
import './ProductDetails.css'
import ProductsList from '../ProductsList/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/Slice/CartSlice';
import { toast } from 'react-toastify';

export default function ProductDetails() {

  const { id } = useParams();
  const product = products.find((item) => item.id === id)

  const { productName, imgUrl, price, avgRating, reviews , description , category , shortDesc} = product;

  const [tabs , setTabs] = useState('desc');
  const [rating , setRating] = useState(null);

  const reviewUser = useRef('')
  const reviewMsg = useRef('')

  const dispatch = useDispatch()

  const relatedProducts = products.filter((item) => item.category === category)

  function submitHandler(e){
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    //console.log(reviewUserName, reviewUserMsg , rating);

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    //console.log(reviewObj);
    toast.success("Review Submitted", {
      theme: "colored",
      style: { backgroundColor: "#007bff", color: "white" },
    });
    
  }

  function addToCart(){
    dispatch(
      cartActions.addItem({
        id,
        imgUrl: imgUrl,
        productName,
        price,
      })
    );

    toast.success('Product added successfully👌')
  }


  return (
    <div>
      <Helmet>
        <title>{productName}</title>
      </Helmet>
      <CommonSection title={productName} />

      <section className="my-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src={imgUrl}
                alt="product-Image"
                className="productDetails-img"
              />
            </div>
            <div className="col-12 col-md-6">
              <div className="products-details">
                <h2>{productName}</h2>
                <div className="product-rating d-flex mb-2">
                  <div>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span >
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span >
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </span>
                  </div>
                  <p className="ps-5">
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <span className="fw-bold fs-5">${price}</span>
                  <p className="pt-3">Category: {category}</p>
                </div>
                <p className="mt-2">{shortDesc}</p>
                <button onClick={addToCart} className="btn-custom mt-4">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tabs d-flex align-align-items-center gap-5">
                <h6
                  className={`${tabs === "desc" ? "active-tabs" : ""}`}
                  onClick={() => setTabs("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tabs === "rev" ? "active-tabs" : ""}`}
                  onClick={() => setTabs("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tabs === "desc" ? (
                <div className="tabs-content">
                  <p className="mt-4 text-muted">{description}</p>
                </div>
              ) : (
                <div className="product-review">
                  <div className="review-wrapper mt-4">
                    <ul className="list-unstyled">
                      {reviews?.map((item) => (
                        <li key={item.id}>
                          <h6>Chris Doe</h6>
                          <span>{item.rating} (rating)</span>
                          <p className="mt-2 text-muted">{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="form-review">
                      <h5 className="mb-4">Leave your experience</h5>
                      <form onSubmit={submitHandler}>
                        <div className="form-group mb-3 ">
                          <input type="text" placeholder="Enter Name" ref={reviewUser} required/>
                        </div>
                        <div className="form-icons mb-3">
                         <span onClick={() => setRating(1)} className='pe-3'>1<i class="fa-solid fa-star"></i></span>
                         <span onClick={() => setRating(2)} className='pe-3'>2<i class="fa-solid fa-star"></i></span>
                         <span onClick={() => setRating(3)} className='pe-3'>3<i class="fa-solid fa-star"></i></span>
                         <span onClick={() => setRating(4)} className='pe-3'>4<i class="fa-solid fa-star"></i></span>
                         <span onClick={() => setRating(5)} className='pe-3'>5<i class="fa-solid fa-star"></i></span>
                        </div>
                        <div className="form-group ">
                          <textarea
                            style={{ resize: "none" }}
                            rows={4}
                            placeholder="Review Message..."
                            ref={reviewMsg}
                            required
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="btn-custom mt-4 d-block ms-auto"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Related Products */}

            <div className="col-md-12 my-5">
              <h3 className="fw-bold">Related Products :</h3>
            </div>
            <ProductsList data={relatedProducts} />
          </div>
        </div>
      </section>
    </div>
  );
}
