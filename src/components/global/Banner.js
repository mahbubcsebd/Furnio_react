import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { bannerBg } from '../../assets/img';
import style from './banner.module.css';

const Banner = (props) => {
  const {pageTitle, breadcrumb} = props
  return (
    <section
      className={style.topBanner}
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <Container>
        <Row>
          <div className={style.bannerTitle}>
            <h2>{pageTitle}</h2>
            <div className={style.bannerBreadcrumb}>
              <Breadcrumb className={style.mainBreadcrumb}>
                <Breadcrumb.Item
                  className={style.breadcrumbItem}
                  href="#"
                >
                  {breadcrumb}
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Banner