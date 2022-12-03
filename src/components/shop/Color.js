/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import style from './color.module.css';

const Color = () => {
  return (
    <div className={`${style.singleSidebar} mb-4`}>
      <h4 className={style.colorTitle}>Color</h4>
      <ul className={style.colorCollection}>
        <li>
          <button
            className={style.colorChoice}
          ></button>
        </li>
        <li>
          <button
            className={style.colorChoice}
          ></button>
        </li>
        <li>
          <button
            className={style.colorChoice}
          ></button>
        </li>
        <li>
          <button
            className={style.colorChoice}
          ></button>
        </li>
        <li>
          <button
            className={style.colorChoice}
          ></button>
        </li>
        <li>
          <button
            className={style.colorChoice}
          ></button>
        </li>
      </ul>
    </div>
  );
}

export default Color