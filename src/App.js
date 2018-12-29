import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNFO from "./components/venueNFO";
import Highlights from "./components/Highlights";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        // style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header />
        <Featured />
        <VenueNFO />
        <Highlights />
      </div>
    );
  }
}

export default App;
