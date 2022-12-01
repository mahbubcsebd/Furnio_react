import React from 'react';
import { Container } from 'react-bootstrap';
import { discountBg } from '../../assets/img';
import BtnSecondary from '../buttons/BtnSecondary';
import style from './discount.module.css';

const Discount = () => {
  return (
    <section
      className={style.discountArea}
      style={{ backgroundImage: `url(${discountBg})` }}
    >
      <Container>
        <div className={style.discountContentBox}>
          <h2 className={style.discountTitle}>
            Get 10% Off in your fast order
          </h2>

          <BtnSecondary title="shop now" />
        </div>
      </Container>
    </section>
  );
}

export default Discount