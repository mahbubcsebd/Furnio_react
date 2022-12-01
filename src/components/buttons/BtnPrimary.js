import React from 'react';

const BtnPrimary = ({ title, icon }) => {
  return (
    <a
      href="shop.html"
      className="btnPrimary"
    >
      {`${title} `}
      <span className="ml-2">{icon}</span>
    </a>
  );
};

export default BtnPrimary;
