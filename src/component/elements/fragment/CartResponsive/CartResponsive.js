import React from "react";
import "./style.css";
import icClose from "../../../../assets/ic-close.svg";
import { dataShoes } from "../../../../utils/productImage";
import { price } from "../../../../utils/format";

export default function CartResponsive(props) {
  const { data, onDelete } = props;
  return (
    <section>
      <h3>Product</h3>
      {data.map((el, idx) => {
        return (
          <div key={idx} className='cart-responsive'>
           
              <img src={icClose} alt='ic-close' onClick={() => onDelete(idx)} />
              <img src={dataShoes[el.id].shoes} alt={`img-${el.id}`} />
              <div>
              <div>
                <h5>{el.shoes}</h5>
                <section>
                      <p>Size : {el.size}</p>
                      <div>
                         <p>
                        Color :
                        </p>
                        <div
                          style={{
                            backgroundColor: `${el.color}`,
                            width: "1.5rem",
                            height: "1.5rem",
                          }}
                        ></div>
                     
                      </div>
                     
                    </section>
              </div>
              <div>
                <div>
                  <p>Quantity : {el.quantity}</p>
                  <p>Price : {price(Number(el.price))}</p>
                </div>
                <h6>Total : {price(el.price * el.quantity)} </h6>
              </div>
            </div>
          </div>
        );
      })}

    </section>
  );
}
