import React from "react";
import { price } from "../../../utils/format";
import { dataShoes } from "../../../utils/productImage";
import icClose from "../../../assets/ic-close.svg";
import "./style.css";

export default function DataTable(props) {
  const { header, col, onDelete } = props;

  return (
    <section>
      <table>
        <thead>
          <tr>
            {header.map((header, idx) => {
              return <th key={idx}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {col.map((el, idx) => {
            return (
              <tr key={idx}>
                <td className='bag-detail'>
                  <section>
                    <img src={icClose} alt='' onClick={() => onDelete(idx)} style={{cursor:'pointer'}} />
                  </section>
                  <section>
                    <img src={dataShoes[el.id].shoes} alt={`img-${el.id}`} />
                  </section>
                  <section>
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
                  </section>
                </td>
                <td>{price(Number(el.price))}</td>
                <td>{el.quantity}</td>
                <td>{price(el.price * el.quantity)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
