import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("listitem")}>
          Events starts in
        </ListItem>
        <ListItem button onClick={() => console.log("listitem")}>
          Venue Info
        </ListItem>
        <ListItem button onClick={() => console.log("listitem")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => console.log("listitem")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log("listitem")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
