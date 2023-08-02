import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to="/product-detail/2">detail</Link>
    </div>
  );
};

export default Home;
