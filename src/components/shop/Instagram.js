import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import {
    insta1,
    insta2,
    insta3,
    insta4,
    insta5,
    insta6
} from '../../assets/img';
import style from './instagram.module.css';

const Instagram = () => {
  return (
    <div className={style.instaSidebar}>
      <h4 className={style.instaTitle}>Instagram</h4>
      <ul className={style.instagramCollection}>
        <li>
          <img
            src={insta1}
            alt=""
          />
          <div className={style.instaHover}>
            <a
              href="https://www.instagram.com/"
              className={style.instaBtn}
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </li>
        <li>
          <img
            src={insta2}
            alt=""
          />
          <div className={style.instaHover}>
            <a
              href="https://www.instagram.com/"
              className={style.instaBtn}
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </li>
        <li>
          <img
            src={insta3}
            alt=""
          />
          <div className={style.instaHover}>
            <a
              href="https://www.instagram.com/"
              className={style.instaBtn}
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </li>
        <li>
          <img
            src={insta4}
            alt=""
          />
          <div className={style.instaHover}>
            <a
              href="https://www.instagram.com/"
              className={style.instaBtn}
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </li>
        <li>
          <img
            src={insta5}
            alt=""
          />
          <div className={style.instaHover}>
            <a
              href="https://www.instagram.com/"
              className={style.instaBtn}
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </li>
        <li>
          <img
            src={insta6}
            alt=""
          />
          <div className={style.instaHover}>
            <a
              href="https://www.instagram.com/"
              className={style.instaBtn}
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Instagram