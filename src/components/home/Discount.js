import React from 'react';
import { Container } from 'react-bootstrap';
import { discountBg } from '../../assets/img';
import BtnSecondary from '../buttons/BtnSecondary';
import style from './discount.module.css';

const Discount = () => {
  return (
    <section
      className={`${style.discountArea} mb-0`}
      style={{ backgroundImage: `url(${discountBg})` }}
    >
      <Container>
        <div className={style.discountContentBox}>
          <h2 className={style.discountTitle}>
            Get 10% Off in your fast order
          </h2>

          <BtnSecondary title="shop now" url="/shop" />
        </div>
      </Container>
    </section>
  );
}

export default Discount