import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import products from '../../constants/productsData';
import SingleProduct from '../global/SingleProduct';

const PopularItem = () => {
  return (
    <section class="popularItemArea">
      <Container class="container">
        <h2 class="sectionTopTitle text-center">Our Popular Items</h2>
        <Row className="laProductWrapper">
            {products.map((item) => (
            <Col md={3} key={uuidv4}>
                <SingleProduct
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                />
            </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}

export default PopularItem