import React from 'react';
import productCat from '../../constants/catogoryData';
import style from './category.module.css';

const Category = () => {
  return (
    <div className={`${style.category} mb-4`}>
      <h4 className={style.categoryTitle}>Product categories</h4>
      <div className={style.categoryContentBox}>
        <ul className={style.catCollecection}>
          {productCat.map((item) => (
            <li className="d-flex justify-content-between align-items-center mb-1">
              <p>
                <a
                  href="shop-details.html"
                  className={style.catLink}
                >
                  {item.category}
                </a>
              </p>
              <p className={style.catAvailable}>({item.number})</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category