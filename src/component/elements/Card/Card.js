import React from "react";
import { dataShoes } from "../../../utils/productImage";
import { price } from "../../../utils/format";
import './style.css';

export default function Card(props) {
  const { data, onClick } = props;
  return (
    <section className='card-shoes'>
      {data.length > 0 &&
        data.map((el, idx) => {
          return (
            <section key={idx} className='card-shoes-container' onClick={() => onClick(idx)}>
              <section>
                <img src={dataShoes[idx].shoes} alt={`img-${idx}`} />
              </section>
                <section className='shoes-list'>
                  <div>
                    <h6>{el.name}</h6>
                    <h6>{price(el.price)}</h6>
                  </div>
                  <p>{el.category}</p>
                </section>
            </section>
          );
        })}
    </section>
  );
}
