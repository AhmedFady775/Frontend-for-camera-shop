import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Footer/Footer";
// import Player from "./components/Pages/Player/Player";
// import Character from "./components/Pages/Character/Character";
// import Create_Character from "./components/Pages/Create_Character/Create_Character";
// import Create_Item from "./components/Pages/Create_Item/Create_Item";
// import Create_Player from "./components/Pages/Create_Player/Create_Player";
// import Create_Reward from "./components/Pages/Create_Reward/Create_Reward";
import Cart from "./components/Cart/Cart";

// import Rewards from "./components/Pages/Rewards/Rewards";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="Player" element={<Player />} />
        <Route path="Character" element={<Character />} /> */}
        <Route path="Cart" element={<Cart />} />
        {/* <Route path="Rewards" element={<Rewards />} /> */}
        {/* <Route path="Create_Reward" element={<Create_Reward />} />
        <Route path="Create_Item" element={<Create_Item />} />
        <Route path="Create_Player" element={<Create_Player />} />
        <Route path="Create_Character" element={<Create_Character />} /> */}
      </Routes>

      <Footer />
    </>
  );
};

export default App;
