import React from 'react';
import Form from 'react-bootstrap/Form';
import { AiOutlineFilter } from 'react-icons/ai';
import style from './filter.module.css';

const Filter = () => {
  return (
    <div className={style.productFilterBox}>
      <div className={style.filterLeft}>
        <button className={style.filterBtn}>
          <AiOutlineFilter /> Filter
        </button>
        <p>Showing 1–12 of 32 results</p>
      </div>
      <div className={style.filterRight}>
        <div className={style.productSort}>
          <div className={`${style.sortingWrapper} form-group`}>
            <Form.Select
              className={`${style.productSorting} form-control`}
              id="product-sorting"
            >
              <option value="default">Default Sorting</option>
              <option value="New">New</option>
              <option value="Low to high">Low to high</option>
              <option value="High to low">High to low</option>
            </Form.Select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter