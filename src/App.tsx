import React, { useEffect, useState } from "react";
import { Home } from "./components";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./components/details";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />

        {/* <Route path="about" element={<About />} />  */}
      </Routes>
    </div>
  );
};

export default App;
