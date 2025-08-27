import React from "react";
import { Route, Routes } from "react-router";
import PortfolioScreen from "./screens/PortfolioScreen";
import Cursor from "./components/Cursor";

function App() {
  return (
     <div className="relative">
      {/* <Cursor /> */}
    <Routes>
      <Route path="/" element={<PortfolioScreen />} />
    </Routes>
    </div>
  );
}

export default App;
