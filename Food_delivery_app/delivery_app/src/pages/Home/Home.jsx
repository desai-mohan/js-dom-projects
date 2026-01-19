import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
import FoodDisplay from "../../components/food_display/FoodDisplay.jsx";
import Appdownload from "../../components/Appdownload/Appdownload.jsx";
import Footer from "../../components/footer/footer.jsx";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Appdownload />
    
    </div>
  );
};

export default Home;
