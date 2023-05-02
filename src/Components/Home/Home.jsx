import React, { useEffect, useState } from 'react';
import SingleChef from '../SingleChef/SingleChef';
import './Home.css';

const Home = () => {
  const [chef, setChef] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/chef')
      .then((response) => response.json())
      .then((data) => setChef(data));
  }, []);

  return (
    <div className="chef_container container mt-3">
      {chef.map((singleChef) => (
        <SingleChef singleChef={singleChef} key={singleChef.id}></SingleChef>
      ))}
    </div>
  );
};

export default Home;
