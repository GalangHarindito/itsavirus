import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import queryString from "querystring";
import { getAllProducts } from "../Product/action";
import { dataShoes } from "../../utils/productImage";
import icPlay from "../../assets/ic-play.svg";
import "./style.css";
import RadioCustom from "../../component/elements/RadioCustom";
import icDelivery from "../../assets/ic-delivery.svg";
import { price } from "../../utils/format";
import { Link } from "react-router-dom";

export default function DetailShoes() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { data } = useSelector((s) => s.product);
  const { id } = queryString.parse(location.search.replace("?", ""));
  const [userSize, setUserSize] = useState("");
  const [userColor, setUserColor] = useState("");
  const [userBag, setUserBag] = useState({});
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!userSize || !userColor) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [userSize, userColor]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  //const sizeUser = () => {
  //  setChecked()
  //}

  return (
    <section className='detail-shoes'>
      <section className='image-shoes'>
        <img src={dataShoes[id].shoes} alt={`img=${id}`} />
      </section>
      <section className='description-shoes'>
        {data.length > 0 && (
          <>
            <div>
              <p>{data[id].category}</p>
            </div>
            <div>
              <h3>{data[id].name}</h3>
            </div>
            <div>
              <p>{data[id].description}</p>
            </div>
            <div>
              <a href={data[id].video} target='_blank'>
                <img src={icPlay} alt='' />
              </a>
              <p>PLAY VIDEO</p>
            </div>
            <div>
              <p>SELECT SIZE(US)</p>
              <div className='size-user'>
                {data[id].sizes.map((size, idx) => {
                  return (
                    <div key={idx}>
                      <RadioCustom
                        label={size}
                        value={size}
                        onChange={(e) => setUserSize(e.target.value)}
                        check={userSize}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <p>SELECT COLOR</p>
              <div className='size-user'>
                {data[id].colors.map((color, idx) => {
                  return (
                    <div key={idx}>
                      <RadioCustom
                        value={color.color_hash}
                        onChange={(e) => setUserColor(e.target.value)}
                        check={userColor}
                        use='color'
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </section>

      <section className='image-detail-shoes'>
        {dataShoes[id].detail1 ? (
          <img src={dataShoes[id].detail1} alt={`detail-1`} />
        ) : (
          <div className='no-detail'>no image</div>
        )}
        {dataShoes[id].detail2 ? (
          <img src={dataShoes[id].detail2} alt={`detail-1`} />
        ) : (
          <div className='no-detail'>no image</div>
        )}
        {dataShoes[id].detail3 ? (
          <img src={dataShoes[id].detail3} alt={`detail-1`} />
        ) : (
          <div className='no-detail'>no image</div>
        )}
        {dataShoes[id].detail4 ? (
          <img src={dataShoes[id].detail4} alt={`detail-1`} />
        ) : (
          <div className='no-detail'>no image</div>
        )}
      </section>
      <section className='add-bag'>
        <div>
          <img src={icDelivery} alt='' />
          <p>free shipping over $100 purchase</p>
        </div>
        <div>
          {data.length > 0 && (
            <h5
              onClick={() => {
                if (!disabled) {
                  const product = {
                    shoes: data[id].name,
                    size: userSize,
                    color: userColor,
                    id: id,
                    price: data[id].price,
                    quantity: 1,
                  };
                  const arr = JSON.parse(sessionStorage.getItem("test")) || [];
                  arr.push(product);
                  sessionStorage.setItem("test", JSON.stringify(arr));
                  history.push("/cart");
                }
                else{
                  window.alert('Choose Your Size and Color')
                }
              }}
            >
              {`ADD TO BAG - ${price(data[id].price)}`}
            </h5>
          )}
        </div>
      </section>
    </section>
  );
}
