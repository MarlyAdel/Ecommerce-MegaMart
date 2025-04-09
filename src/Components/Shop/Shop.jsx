import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import CommonSection from '../CommonSection/CommonSection'
import './Shop.css'
import products from '../../assets/data/products'
import ProductsList from '../ProductsList/ProductsList'

export default function Shop() {

  const [productsData , setProductsData] = useState(products)

  function handleFilter(e){
     const filterValue = e.target.value
     if(filterValue === "sofa"){
      const filterProducts = products.filter((item) => item.category === "sofa")
         setProductsData(filterProducts);
    }

    if(filterValue === "mobile"){
      const filterProducts = products.filter((item) => item.category === "mobile")
         setProductsData(filterProducts);
    }

    if(filterValue === "chair"){
      const filterProducts = products.filter((item) => item.category === "chair")
         setProductsData(filterProducts);
    }

    if(filterValue === "watch"){
      const filterProducts = products.filter((item) => item.category === "watch")
         setProductsData(filterProducts);
    }

    if(filterValue === "wireless"){
      const filterProducts = products.filter((item) => item.category === "wireless")
         setProductsData(filterProducts);
    }
  }

  function handleSearch(e){
    const searchValue = e.target.value

    const searchProducts = products.filter((item) => item.productName.toLowerCase().includes(searchValue.toLowerCase()))

    setProductsData(searchProducts);
  }


  return (
    <div>
      <Helmet>
        <title>Shop</title>
      </Helmet>

      <CommonSection title="Products" />

      <section>
        <div className="container my-5">
          <div className="row gy-3">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="shop-options">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                  <option value="mobile">Mobile</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless Headphones</option>
                </select>
              </div>
            </div>
            
            <div className="col-12 col-md-6">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <span>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="container">
          <div className="row">
            {productsData.length == 0 ? (
              <h1 className="text-center py-5">No Products are found😔</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
