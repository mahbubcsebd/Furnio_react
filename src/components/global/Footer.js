/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { logo2, payment1, payment2, payment3, payment4 } from '../../assets/img';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerArea}>
        <Container>
          <Row>
            <Col md={3}>
              <div className={style.footerLeft}>
                <img
                  src={logo2}
                  alt=""
                  className={style.footerLogo}
                />
                <p>
                  We Design our furnitures following minimalist philosophies.
                </p>
                <ul className={style.footerSocial}>
                  <li>
                    <a href="https://www.facebook.com">
                      <i className=".fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i className=".fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com">
                      <i className=".fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className=".fa-brands fa-instagram-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className=".fa-brands fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={2}>
              <h4 className={style.footerTitle}>ABOUT</h4>
              <ul className={style.footerLinkCollection}>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Delivery</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h4 className={style.footerTitle}>HELP</h4>
              <ul className={style.footerLinkCollection}>
                <li>
                  <a href="#">Order tracking</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </Col>
            <Col md={5}>
              <h4 className={style.footerTitle}>NEWSLETTER</h4>
              <div className={style.footerRightContent}>
                <p>Join our mailing list for the latest product updates!</p>
                <div className={style.footerEmail}>
                  <input
                    type="text"
                    className={`${style.formControl} form-control`}
                    placeholder="Your email"
                  />
                  <div className={style.inputGroupAppend}>
                    <button className={style.footerSubscriptionBtn}>
                      Subscription
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
          <div className={style.fullLine}></div>
        <Container>
          <div className={style.footerBottomArea}>
            <div className={style.footerBottomLeft}>
              <p>&copy;2022 Uibucket, All Rights Reserved</p>
            </div>
            <div className={style.footerBottomRight}>
              <p>Source Payment :</p>
              <ul className={style.paymentCollection}>
                <li>
                  <img
                    src={payment1}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={payment2}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={payment3}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={payment4}
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer