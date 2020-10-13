import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/scss/styles.css";


import FooterComponent from "./Components/footer/FooterComponent";


import RoutePagesComponent from "./Pages/RoutePagesComponent";
import HeaderComponent from "./Components/header/HeaderComponent";


if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
} else {
  // production code
  console.log = function () { };
}

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">

          <HeaderComponent />
          <main role="main" class="container">
            <RoutePagesComponent />
          </main>
          <FooterComponent />

        </div>
      </Router>
    );
  }
}

export default App;
