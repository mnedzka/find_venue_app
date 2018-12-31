import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26456.877791046256!2d-118.48077211310374!3d34.01539438169789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb202baf4fc1%3A0x389fd942b82d10f6!2sSunset+Park%2C+Santa+Monica%2C+Kalifornia+90405%2C+Stany+Zjednoczone!5e0!3m2!1spl!2spl!4v1546249484602"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>location</div>
      </div>
    </div>
  );
};

export default Location;
