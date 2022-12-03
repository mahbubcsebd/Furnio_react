import React from 'react';
import ErrorMessage from '../error/ErrorMessage';
import Banner from '../global/Banner';

const Error = () => {
  return (
    <div className="errorPage">
      <Banner
        pageTitle="Error - 404"
        breadcrumb="Error"
       />
      <ErrorMessage />
    </div>
  );
}

export default Error