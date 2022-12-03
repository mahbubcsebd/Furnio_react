import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import products from '../../constants/productsData';
import Banner from '../global/Banner';
import SingleProduct from '../global/SingleProduct';
import Filter from '../shop/Filter';
import Sidebar from '../shop/Sidebar';

const Shop = () => {
  return (
    <div className="shopPage">
      <Banner
        pageTitle="shop"
        breadcrumb="Home / shop"
      />
      <div className="shopContent">
        <Container>
          <Row>
            <Col md={9}>
              <div className="filterArea mb-4">
                <Filter />
              </div>
              <div className="shopProduct">
                <Row className="">
                  {products.map((item) => (
                    <Col
                      md={4}
                      key={uuidv4}
                    >
                      <SingleProduct
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
            <Col md={3}>
              <div className="shopSidebar">
                  <Sidebar/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Shop