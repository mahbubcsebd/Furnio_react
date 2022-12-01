import React from 'react';

const BtnSecondary = ({title,icon}) => {
  return (
    <a
      href="shop.html"
      className="btnSecondary"
    >
      {`${title} ` }
      <span className="ml-2">
        {icon}
      </span>
    </a>
  );
};

export default BtnSecondary;
