import React from "react";
import logo from "./logo.svg";
import noimage from "./noimagefound.jpeg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Stories } from "./pages/Stories";
import { StoryDetails } from "./pages/StoryDetails";
import { Header } from "./components/common/Header";

function App() {
  return (
    <Router>
      <Header />
      <article className="container">
        <Routes>
          <Route path="/" element={<Stories />} />
          <Route path="/:id/:headlinde" element={<StoryDetails />} />
        </Routes>
      </article>
    </Router>
  );
}

export default App;
