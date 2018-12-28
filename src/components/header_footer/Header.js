import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          boxShadow: "none",
          backgroundColor: "#2f2f2f",
          padding: "10px 0"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">MUSICAL EVENTS</div>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
