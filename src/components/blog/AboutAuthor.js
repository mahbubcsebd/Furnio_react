import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { aboutAuthor } from '../../assets/img';
import style from './aboutAuthor.module.css';

const AboutAuthor = () => {
  return (
    <div className={`${style.aboutAuthorBox} mb-4`}>
      <div className={style.aboutAuthorTop}>
        <img
          src={aboutAuthor}
          alt=""
          className={style.aboutAuthorImg}
        />
        <h5 className={style.aboutAuthorName}>About author</h5>
        <p className={style.aboutAuthorText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt
        </p>
      </div>
      <div className={style.aboutAuthorBottom}>
        <ul className={style.aboutAuthorSocial}>
          <li>
            <a href="https://www.facebook.com">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutAuthor