import React from "react";
import Button from "@material-ui/core/Button";

import ticketIcon from "../../resources/images/icons/ticket.png";

const MyButton = ({ text, bck, color, link }) => {
  return (
    <Button
      href={link}
      variant="contained"
      size="small"
      style={{
        background: bck,
        color: color
      }}
    >
      <img src={ticketIcon} className="iconImage" alt="button icon" />
      {text}
    </Button>
  );
};

export default MyButton;
