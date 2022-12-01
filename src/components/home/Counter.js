import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { counterMain, counterSm } from '../../assets/img';
import style from './counter.module.css';

const Counter = () => {
  return (
    <section className={style.counterArea}>
      <div className={style.counterSection}>
        <Container>
          <Row>
            <Col md={6}>
              <div className={style.counterLeft}>
                <img
                  src={counterMain}
                  alt=""
                  className={style.counterMainImg}
                />
                <img
                  src={counterSm}
                  alt=""
                  className={style.counterSmImg}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className={style.counterRight}>
                <h2>We provide look and accuracy</h2>
                <p className={style.counterRightText}>
                  Aiam in arcu cursus euismod quis viverra nibh. Tincidunt nunc
                  pulvinar sapien et ligula ullamcorper malesuada. A scelerisque
                  purus semper eget duis.
                </p>

                <div className={style.counterContentBox}>
                  <div
                    className={style.singleServiceCounter}
                  >
                    <h1 className={style.counterNum}>
                      <span className={style.counter}>35</span>
                    </h1>
                    <h5 className={style.counterTitle}>Awards Gained</h5>
                  </div>
                  <div
                    className={style.singleServiceCounter}
                  >
                    <h1 className={style.counterNum}>
                      <span className={style.counter}>35</span>k+{' '}
                    </h1>
                    <h5 className={style.counterTitle}>Quality Products</h5>
                  </div>
                  <div
                    className={style.singleServiceCounter}
                  >
                    <h1 className={style.counterNum}>
                      <span className={style.counter}>15</span>k+{' '}
                    </h1>
                    <h5 className={style.counterTitle}>Happy Customers</h5>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Counter