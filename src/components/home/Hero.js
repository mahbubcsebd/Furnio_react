import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { heroImg } from '../../assets/img/index';
import BtnPrimary from '../buttons/BtnPrimary';
import style from './hero.module.css';

const Hero = () => {
  return (
    <section className={style.heroSection}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className={style.heroLeft}>
              <h1 className={style.heroTitle}>Explore Minimal Design</h1>
              <p className={style.heroText}>
                Aliquet sagittis id consectetur purus ut faucibus pulvinar
                elementum. Nulla facilisi morbi tempus iaculis.
              </p>
              <BtnPrimary title="shop now" icon={<AiOutlineArrowRight />}/>
            </div>
          </Col>
          <Col md={6}>
            <div className={style.heroRight}>
              <img
                src={heroImg}
                alt="hero-img"
                className={style.heroImg}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero