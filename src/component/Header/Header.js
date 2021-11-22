import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "./style.css";
import icNike from "../../assets/ic-nike.svg";
import icShoppingBag from "../../assets/ic-shopping-bag.svg";
import icUser from "../../assets/ic-user.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [menuBar, setMenuBar] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const { data } = useSelector(s => s.cart)
  const menuButton = () => {
    setMenuBar(!menuBar);
  };


  const totalBag = JSON.parse(sessionStorage.getItem('test'))

  return (
    <header>
      <nav>
        <div className='navbar'>
          <div className='nav-container'>
            <img src={icNike} alt='ic-nike' />
          </div>
          <div className={`bar-menu ${menuBar? 'change' : ''}`} onClick={() => menuButton()}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
          <div className={`nav-menu ${menuBar ? "block" : "none"}`}>
            <ul>
              <li className={splitLocation[1] === "" || splitLocation[1] === "product" || splitLocation[1] === "cart"  ? "active" : ""}>
                <Link to='/'>New Release</Link>
              </li>
              <li className={splitLocation[1] === "man" ? "active" : ""}>
                <Link to='/man'>Man</Link>
              </li>
              <li className={splitLocation[1] === "woman" ? "active" : ""}>
                <Link to='/woman'>Woman</Link>
              </li>
              <li className={splitLocation[1] === "kids" ? "active" : ""}>
                <Link to='/kids'>Kids</Link>
              </li>
              <li className={splitLocation[1] === "customize" ? "active" : ""}>
                <Link to='/customize'>Customize</Link>
              </li>
            </ul>
          </div>
          <div className={`nav-menu-2`}>
            <ul>
              <li>
                <Link to='/cart'>
                  <img src={icShoppingBag} alt='shopping-bag' />

                  {totalBag && totalBag.length >= 1 && <label>{totalBag.length}</label>}
                </Link>
              </li>
              <li>
                <Link>
                </Link>
                <img src={icUser} alt='user' />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
