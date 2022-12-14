import React, { useState, useEffect } from "react"
import "./Header.css"
import Banner from "../../assets/Banner-2-EN.png"
import JumiaIcon from "../../assets/jumia-icon.png"
import EnFlag from "../../assets/england.png"
import EgFlag from "../../assets/egypt.png"
import JumiaLogo from "../../assets/jumia-logo.png"
import { MdOutlineSearch, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { IoPersonOutline } from "react-icons/io5"
import {
  AiOutlineQuestionCircle,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai"
import { BiHeart } from "react-icons/bi"
import { FiShoppingBag } from "react-icons/fi"
import { BsChatLeftDots } from "react-icons/bs"
import { Link } from 'react-router-dom'

function Header() {
  const [isAccountActive, setIsAccountActive] = useState(false)
  const [isHelpAcitve, setIsHelpAcitve] = useState(false)
  const [isCartAtive, setIsCartActive] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [menuOpened, setMenuOpened] = useState(true)

  useEffect(() => {
    if (window.innerWidth > 850) {
      setMenuOpened(true)
    } else {
      setMenuOpened(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
      if (windowWidth > 850) {
        setMenuOpened(true)
      }
    })
  }, [window.innerWidth])

  return (
    <header>
      <div className="header__banner">
        <img
          src={Banner}
          alt="free shipping banner"
          className="header__banner__img"
        />
      </div>
      <div className="header__small-banner">
        <a className="header__small-banner__sellOnJumia" href="#">
          <img
            src={JumiaIcon}
            alt="Jumia icon"
            className="header__small-banner__img"
          />
          <span className="header__small-banner__text">Sell on Jumia</span>
        </a>
        <div className="header__small-banner__middle-icons">
          <span>FOOD</span>
          <span>PRIMO</span>
          <span>PAY</span>
          <span>LOGISTICS</span>
        </div>
        <div className="header__small-banner__lang">
          <div className="lang-flag">
            <span>
              <img src={EnFlag} alt="" className="half-transparent" />
            </span>
            <span>English</span>
          </div>
          <div
            className="lang-flag"
            style={{ border: 0, marginRight: 0, paddingRight: 0 }}
          >
            <span>
              <img src={EgFlag} alt="" />
            </span>
            <span lang="ar" style={{ color: "#222" }}>
              ????????
            </span>
          </div>
          <div className="eg"></div>
        </div>
        <div className="w-3"></div>
      </div>
      <div className="header__header">
        <Link to='/' className="header__header__logo">
          <img src={JumiaLogo} alt="Jumia Logo" />
        </Link>
        <div className="header__header__search">
          <div className="header__header__search--input">
            <span className="search-icon">
              <MdOutlineSearch />
            </span>
            <input
              type="text"
              placeholder="Search Products, brands and categories"
              className="search-input"
            />
          </div>
          <div className="header__header__search--button">
            <button className="main-btn">search</button>
          </div>
        </div>
        {windowWidth <= 850 && (
          <div className="menu-icon-container">
            <AiOutlineMenu
              fontSize={25}
              onClick={() => setMenuOpened(!menuOpened)}
            />
          </div>
        )}
        {menuOpened && (
          <div className="header__header__account-help-cart">
            <div
              className={isAccountActive ? "account active" : "account"}
              onClick={() => {
                setIsAccountActive(!isAccountActive)
                setIsHelpAcitve(false)
                setIsCartActive(false)
              }}
            >
              {isAccountActive && (
                <div className="toggled-menu">
                  <button className="main-btn">sing in</button>
                  <hr />
                  <ul className="account-menu">
                    <li className="account-item">
                      <IoPersonOutline />
                      My Account
                    </li>
                    <li className="account-item">
                      <FiShoppingBag />
                      Orders
                    </li>
                    <li className="account-item">
                      <BiHeart />
                      Saved Items
                    </li>
                  </ul>
                </div>
              )}
              <span>
                <IoPersonOutline />
              </span>
              <span>Account </span>
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
            <div
              className={isHelpAcitve ? "help active" : "help"}
              onClick={() => {
                setIsAccountActive(false)
                setIsHelpAcitve(!isHelpAcitve)
                setIsCartActive(false)
              }}
            >
              {isHelpAcitve && (
                <div className="help-menu">
                  <ul>
                    <li>Help Center</li>
                    <li>Place &amp; track order</li>
                    <li>Order Cancellation</li>
                    <li>Return &amp; Refunds</li>
                    <li>Payment &amp; Jumia account</li>
                  </ul>
                  <hr />
                  <button className="main-btn">
                    <BsChatLeftDots fontSize={20} />
                    live chat
                  </button>
                </div>
              )}
              <span>
                <AiOutlineQuestionCircle />
              </span>
              <span>Help</span>
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
            <div
              className={isCartAtive ? "cart active" : "cart"}
              onClick={() => {
                setIsAccountActive(false)
                setIsHelpAcitve(false)
                setIsCartActive(!isCartAtive)
              }}
            >
              <span>
                <AiOutlineShoppingCart />
              </span>
              <span>Cart</span>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
