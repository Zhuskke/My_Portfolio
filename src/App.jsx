import React from "react";
import { Route, Routes } from "react-router";
import PortfolioScreen from "./screens/PortfolioScreen";

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<PortfolioScreen />} />
      </Routes>
    </div>
  );
}

export default App;
