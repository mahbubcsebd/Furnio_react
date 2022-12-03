import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { errorImg } from '../../assets/img';
import BtnPrimary from '../buttons/BtnPrimary';
import style from './errorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div
      id="pageError"
      className="sp-80"
    >
      <div className={style.pageErrorSection}>
        <Container>
          <Row className="mb-4">
            <Col
              md={8}
              className="offset-md-2"
            >
              <div className={style.errorContent}>
                <div className={style.ecImg}>
                  <img
                    src={errorImg}
                    alt=""
                  />
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <div className={`${style.backHomeBtn} text-center mx-auto mt-2`}>
              <h2 className={style.errorTitle}>
                Sorry! We can’t Find This Pages
              </h2>
              <p className={`${style.errorText} mb-4`}>
                Oops! The page you are looking for does not exit. it might been
                moved or deleted.
              </p>
              <BtnPrimary title="Back to home" url="/"/>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ErrorMessage;
