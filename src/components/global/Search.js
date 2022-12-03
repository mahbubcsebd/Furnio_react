import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import style from './search.module.css';

const Search = () => {
  return (
    <div className={style.singleSidebar}>
      <div className={`${style.productSearch} mb-3`}>
        <div className={style.searchBox}>
          <input
            type="text"
            placeholder="Search Here"
          />
          <span>
            <AiOutlineSearch />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Search