import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from "./Dashboard/Dashboard";
import Landing from "./Landing/Landing";
import Chatbot from "./Chatbot/Chatbot";
import Split from "./Split/Split";
import Errorr from "./Erorr/Erorr";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/split" element={<Split />} />
          <Route path="*" element={<Errorr />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
