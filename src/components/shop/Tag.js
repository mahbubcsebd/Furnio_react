import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './tag.module.css';

const Tag = () => {
    const navigate = useNavigate()
  return (
    <div className={`${style.tagSidebar} mb-4`}>
      <h4 className={style.tagTitle}>Tag</h4>
      <ul className={style.tagCollection}>
        <li>
          <button
            onClick={() => {
              navigate('/shop');
            }}
          >
            Accesories
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate('/shop');
            }}
          >
            Dishware
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate('/shop');
            }}
          >
            Furnishing
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate('/shop');
            }}
          >
            Lights
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate('/shop');
            }}
          >
            Special
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Tag