/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AiOutlineEye, AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai';
import style from './singleProduct.module.css';

const SingleProduct = (props) => {
    const {id, img, name, price} = props;
  return (
      <div className={`${style.singleProduct} mb-5`} key={id}>
        <div className={style.spTop}>
          <img
            src={img}
            alt=""
            className={style.productImg}
          />
          <div className={style.spHoverBox}>
            <ul className={style.spHoverCollection}>
              <li>
                <a href="#">
                  <AiOutlineShopping />
                </a>
              </li>
              <li>
                <a href="wishlist.html">
                  <AiOutlineHeart />
                </a>
              </li>
              <li>
                <a href="product-details.html">
                  <AiOutlineEye />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.spBottom}>
          <h4 className={style.productName}>{name}</h4>
          <p className={style.productPrice}>
            $<span>{price}</span>
          </p>
        </div>
      </div>
  );
}

export default SingleProduct