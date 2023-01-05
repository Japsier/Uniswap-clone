import { BrowserRouter, Routes, Route } from "react-router-dom";
import Swap from "./Components/Swap";
import Nft from "./Components/Nft";
import Tokens from "./Components/Tokens";
import Pool from "./Components/Pool";
import Header from "./Components/Header";
import Homepage from "./Components/HomePage";
import { useState } from "react";




function RouteSwitch() {
  const [activeChain, setActiveChain] = useState("ethereum")

  const changeActiveChain = (chain) => {
    setActiveChain(chain)
  }
  
  return(
    <BrowserRouter>
      <Header activeChain={activeChain} changeActiveChain={changeActiveChain} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Swap" element={<Swap />} />
        <Route path="/nfts" element={<Nft />} />
        <Route path="/tokens" element={<Tokens activeChain={activeChain} changeActiveChain={changeActiveChain} />} />
        <Route path="/pool" element={<Pool />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
