import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 mb-5 ">
      <div>
        <h3 className="">Page Not Found !!!!!!!!!! 😥</h3>
        <img src="/img/error.jpg" alt="" />
        <p className=" mt-3 mb-3">Error : 444000000044444!</p>
        <Link to="/">
          <button className="btn btn-primary">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
