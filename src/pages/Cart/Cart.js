import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DataTable from "../../component/elements/DataTable";
import { price } from "../../utils/format";
import { SUCCESS } from "./constants";
import "./style.css";
import icArrow from "../../assets/ic-arrow.svg";
import CartResponsive from "../../component/elements/fragment/CartResponsive";

export default function Cart() {
  const dispatch = useDispatch();
  const dataHeader = ["PRODUCT", "PRICE", "QUANTITY", "TOTAL"];
  const dataBag = JSON.parse(sessionStorage.getItem("test"));
  const [data, setData] = useState(dataBag);
  let total = 0;
  const totalPrice = () => {
    if(data && data.length >= 1){
      data.forEach((element) => {
      return total += Number(element.price);
    });
    }
    return total
  };
  totalPrice();

  useEffect(() => {
    dispatch(successAction(data, ""));
  }, [data, dispatch]);

  function successAction(data, key) {
    return { type: SUCCESS, data, key };
  }

  const onDelete = (value) => {
    dataBag.splice(value, 1);
    sessionStorage.setItem("test", JSON.stringify(dataBag));
    const updateDataBag = JSON.parse(sessionStorage.getItem("test"));
    setData(updateDataBag);
    dispatch(successAction(data, ""));
  };

  return (
    <section className='cart'>
      <section>
        <h2>Your Bag</h2>
      </section>
      <section className='cartDefault'>
        {data && data.length >= 1 ? (
          <>
            <section>
              <DataTable
                header={dataHeader}
                col={data}
                onDelete={(value) => onDelete(value)}
              />
            </section>
            <section className='cart-total-price'>
              <div className='total-price'>
                <h6>TOTAL</h6>
                <h6>{price(total)}</h6>
              </div>
              <div className='pay-now'>
                <h6>PAY NOW</h6>
                <img src={icArrow} alt='ic-arrow' />
              </div>
            </section>
          </>
        ) : (
          <h3>Your Bag Empty</h3>
        )}
      </section>
      <section className='cartResponsive'>
        {data && data.length >= 1 ? (
          <>
            <CartResponsive data={data} onDelete={(value) => onDelete(value)} />
            <section className='cart-total-price'>
              <div className='total-price'>
                <h6>TOTAL</h6>
                <h6>{price(total)}</h6>
              </div>
              <div className='pay-now'>
                <h6>PAY NOW</h6>
                <img src={icArrow} alt='ic-arrow' />
              </div>
            </section>
          </>
        ) : (
          <h3>Your Bag Empty</h3>
        )}
      </section>
    </section>
  );
}
