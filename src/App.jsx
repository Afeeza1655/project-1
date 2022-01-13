import React from "react";
import HomePage from "./Components/Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopUpForm from "./Components/Pages/PopUpForm";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pop" element={<PopUpForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
