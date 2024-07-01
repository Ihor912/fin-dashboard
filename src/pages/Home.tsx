import React from "react";
import Counter from "../features/counter/Counter";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Counter />
    </div>
  );
};

export default Home;
