import React from 'react';
import Container from "./Components/Container";
import { BrowserRouter as Router } from "react-router-dom"
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Container />
    </div>
  </Router>
)

export default App;
