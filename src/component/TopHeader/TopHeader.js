import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import icDelivery from "../../assets/ic-delivery.svg";

export default function TopHeader() {
  return (
    <section className='top-header'>
      <section></section>
      <section>
        <img src={icDelivery} alt='' />
        <p>free shipping over $100 purchase</p>
      </section>
      <section>
        <div>
          <Link>Shipping</Link>
          <Link>FAQ</Link>
          <Link>Contact</Link>
        </div>
      </section>
    </section>
  );
}
