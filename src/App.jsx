import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsMain from "./Components/NewsMain";

const App = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in"); // Fixed default value

  return (
    <div>
      <Navbar setCategory={setCategory} setCountry={setCountry} />
      <NewsMain category={category} country={country} />
    </div>
  );
};

export default App;
