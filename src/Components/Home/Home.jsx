import React, { useEffect, useState } from 'react'
import './Home.css'
import { Helmet } from 'react-helmet'
import homeImg from '../../assets/images/hero-img.png'
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import ProductsList from '../ProductsList/ProductsList';
import products from '../../assets/data/products'
import counterImg from '../../assets/images/counter-timer-img.png'
import Clock from '../Clock/Clock';

export default function Home() {

 const year = new Date().getFullYear();

 const [trendingProducts , setTrendingProducts] = useState([]);
 const [bestSaleProducts, setBestSaleProducts] = useState([]);
 const [mobileProducts , setMobileProducts] = useState([]);
 const [wirelessProducts , setWirelessProducts] = useState([]);
 const [popularCategory , setPopularCategory] = useState([])

 useEffect(() => {
  const filterTrendingProducts = products.filter((item) => item.category === "chair");

  const filterBestSaleProducts = products.filter((item) => item.category === "sofa");

  const filterMobileProducts = products.filter((item) => item.category === "mobile")

  const filterWirelessProducts = products.filter((item) => item.category === "wireless")

  const filterPopularCategory = products.filter((item) => item.category === "watch")

    setTrendingProducts(filterTrendingProducts);
    setBestSaleProducts(filterBestSaleProducts);
    setMobileProducts(filterMobileProducts);
    setWirelessProducts(filterWirelessProducts);
    setPopularCategory(filterPopularCategory);
 },[])

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <section className="home">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="home-left pt-5 mt-4">
                <p>Trending Products In {year}</p>
                <h2>
                  Make Your Interior More <br />
                  Minimalistic & Modern
                </h2>
                <p>
                  Furniture enhances living and working spaces by providing
                  comfort, functionality, and style. It includes items like
                  chairs, tables, and beds, designed for both aesthetic appeal
                  and practical use.
                </p>
                <button className=" btn-custom mt-3">
                  <Link className="text-white text-decoration-none" to={"shop"}>
                    SHOP NOW
                  </Link>
                </button>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="home-right pt-4">
                <img src={homeImg} alt="Home-Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />

      {/* Trending Products */}
      <section className="trending-products">
        <div className="trending-title mt-5 pt-4">
          <h2 className="text-center pt-4 fs-1 font-monospace fw-bolder">
            Trending Products
          </h2>
        </div>
        <div className="product-item">
          <div className="container">
            <div className="row">
              <ProductsList data={trendingProducts} />
            </div>
          </div>
        </div>
      </section>

      {/* Best Sales */}

      <section className="best-sale">
        <div className="trending-title mt-5 pt-4">
          <h2 className="text-center pt-4 fs-1 font-monospace fw-bolder">Best Sales</h2>
        </div>
        <div className="product-item">
          <div className="container">
            <div className="row">
              <ProductsList data={bestSaleProducts} />
            </div>
          </div>
        </div>
      </section>

      {/* Timer Count */}

      <section className="timer-count mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="top-content my-4 text-light">
                <h4 className="fs-5">Limited Offers</h4>
                <h3>Quality ArmChair</h3>
              </div>
              <Clock />
              <button className="btn btn-light fw-semibold mt-4">
                <Link className="text-decoration-none text-dark" to={"shop"}>
                  Visit Store
                </Link>
              </button>
            </div>
            <div className="col-md-6 text-end">
              <img src={counterImg} alt="sofa" />
            </div>
          </div>
        </div>
      </section>

      {/* New arrivals */}

      <section className="new-arrivals">
        <div className="title-arrivals">
          <h2 className="text-center pt-4 fs-1 font-monospace fw-bolder mt-5 pt-5">New arrivals</h2>
        </div>
        <div className="container">
          <div className="row">
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </div>
        </div>
      </section>


      {/* Popular Category */}

      <section className="popular-category">
        <div className="title-arrivals pt-5">
          <h2 className="text-center pt-4 fs-1 font-monospace fw-bolder mt-5">Popular in Category</h2>
        </div>
        <div className="container">
          <div className="row my-5">
            <ProductsList data={popularCategory} />
          </div>
        </div>
      </section>


    </div>
  );
}
