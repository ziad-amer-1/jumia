import React from "react"
import "./SingleProduct.css"
import JumiaExpressLogo from "../../assets/jexpress-logo.png"
import { AiOutlineCaretDown } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { MdAddShoppingCart } from "react-icons/md"
import { BsStarHalf, BsStarFill } from "react-icons/bs"
import { formatCurrency } from "../../utils/formatCurrency"

function SingleProduct() {
  const singleProduct = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/1/1.jpg",
      "https://dummyjson.com/image/i/products/1/2.jpg",
      "https://dummyjson.com/image/i/products/1/3.jpg",
      "https://dummyjson.com/image/i/products/1/4.jpg",
      "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    ],
  }

  return (
    <div className="single-product">
      <div className="single-product__left">
        <div className="single-product__left__left">
          <img src={singleProduct.thumbnail} className="product-img" alt="" />
          <div className="share">
            <h2>share this product</h2>
            <FaFacebookF />
            <BsTwitter />
          </div>
        </div>
        <div className="single-product__left__right">
          <div className="title">{singleProduct.title}</div>
          <div className="brand">
            Brand: <span>{singleProduct.brand}</span>
          </div>
          <div className="stars">
            <BsStarFill color="#ff9900" />
            <BsStarFill color="#ff9900" />
            <BsStarFill color="#ff9900" />
            <BsStarFill color="#ff9900" />
            <BsStarHalf color="#ff9900" /> (<span>{singleProduct.rating}</span>
            {""}){""}
          </div>
          <div className="price">{formatCurrency(singleProduct.price)}</div>
          <div className="discount">
            <span className="lastPrice">
              {formatCurrency(
                singleProduct.price +
                  singleProduct.price * (singleProduct.discountPercentage / 100)
              )}
            </span>
            <span className="discount-value">
              -{singleProduct.discountPercentage}%
            </span>
          </div>
          <button className="addToCartButton main-btn">
            <MdAddShoppingCart fontSize={25} /> <span>Add To Cart</span>{" "}
          </button>
        </div>
      </div>
      <div className="single-product__right">
        <h2>Delivery & Returns</h2>
        <article>
          <h3>
            <img src={JumiaExpressLogo} alt="Jumia Express Logo" />
          </h3>
          <p>
            Order from Jumia Express items and get free shipping.{" "}
            <span className="details-popup">Details</span>
          </p>
        </article>
        <div className="location-container">
          <h2>Choose your location</h2>
          <div className="select-box">
            <select required defaultValue={"DEFAULT"}>
              <option disabled>Please select</option>
              <option>Al Beheira</option>
              <option>Al Daqahliya</option>
              <option>Al Fayoum</option>
              <option>Al Gharbia</option>
              <option>Al Meniya</option>
              <option>Al Monufia</option>
              <option>Al Sharqia</option>
              <option>Alexandria</option>
              <option>Aswan</option>
              <option>Asyut</option>
              <option>Bani Souaif</option>
              <option>Cairo</option>
              <option>Damietta</option>
              <option value="DEFAULT">Giza</option>
              <option>Ismailia</option>
              <option>Kafr El-Sheikh</option>
              <option>Luxor</option>
              <option>North Coast</option>
              <option>Port Said</option>
              <option>Qalyubia</option>
              <option>Qena</option>
              <option>Red Sea</option>
              <option>Sohag</option>
              <option>South Sinai</option>
              <option>Suez</option>
            </select>
            <AiOutlineCaretDown className="dropdown-menu" />
          </div>
          <div className="select-box">
            <select required>
              <option value disabled>
                Please select
              </option>
              <option>Abnoub</option>
              <option>Abouteag</option>
              <option>Aelbdarey</option>
              <option>Arab Elawamer</option>
              <option>Assuit Elgdeda</option>
              <option>Asyut</option>
              <option>Beny Hossien</option>
              <option>Dayrout</option>
              <option>Dronka</option>
              <option>Elfath</option>
              <option>Elghnayem</option>
              <option>Elqusya</option>
              <option>Elzawya</option>
              <option>Manflout</option>
              <option>Manqbad</option>
              <option>Refa</option>
              <option>Sahel Selim</option>
              <option>Serfa</option>
            </select>
            <AiOutlineCaretDown className="dropdown-menu" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
