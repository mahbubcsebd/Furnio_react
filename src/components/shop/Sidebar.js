import React from 'react';
import Search from '../global/Search';
import Category from './Category';
import Color from './Color';
import Instagram from './Instagram';
import Tag from './Tag';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Category />
      <Color />
      <Tag />
      <Instagram />
      <Search />
    </div>
  );
}

export default Sidebar