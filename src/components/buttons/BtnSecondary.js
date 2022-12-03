import React from 'react';
import { useNavigate } from 'react-router-dom';

const BtnSecondary = ({ title, icon, url }) => {
  const navigate = useNavigate();
  return (
    <button
      className="btnSecondary"
      onClick={() => {
        navigate(`${url}`);
      }}
    >
      {`${title} `}
      <span className="ml-2">{icon}</span>
    </button>
  );
};

export default BtnSecondary;
