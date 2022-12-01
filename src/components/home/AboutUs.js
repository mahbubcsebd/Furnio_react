import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { about, provide1, provide2, provide3 } from '../../assets/img';
import style from './aboutus.module.css';

const AboutUs = () => {
  return (
        <section className={style.aboutUsArea}>
            <Container>
                <Row className="align-items-center">
                    <Col md={5}>
                        <div className={style.aboutUsText}>
                            <h2 className="sectionTopTitle">We Provide You The Best Experience</h2>
                            <p className={style.aboutText}>Urna molestie at elementum eu facilisis. Venenatis a the inner condimentum
                                vitae sapien pellentesque.</p>
                            <ul className={style.aboutCollection}>
                                <li><span><img className="mr-2" src={provide1} alt=""/></span> Minimalist
                                    Design</li>
                                <li><span><img className="mr-2" src={provide2} alt=""/></span> Natural
                                    Product</li>
                                <li><span><img className="mr-2" src={provide3} alt=""/></span> Best Quality
                                    Wood</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className={style.homeAboutImg}>
                            <img src={about} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default AboutUs