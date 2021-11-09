import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
