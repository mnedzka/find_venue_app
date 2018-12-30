import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [150, 250, 400],
    positions: ["balcony", "medium", "star"],
    desc: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,",
      "quisquam! Maxime quasi at asperiores, nihil omnis, aliquid iusto molestiae",
      "quod ipsum odio tempore harum fugit cumque dolores. Dolores"
    ],
    linkTo: ["www.google.com", "www.google.com", "www.google.com"],
    delay: [500, 0, 500]
  };

  showBoxes = () => (
    <Zoom delay={this.UNSAFE_componentWillMount.state.delay[i]} key={i}>
      this.state.prices.map((price, i) => (
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${this.state.prices[i]}</span>
            <span>${this.state.positions[i]}</span>
          </div>
          <div className="pricing_description">{this.state.desc[i]}</div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              bck="#ffa800"
              color="#ffffff"
              link={this.state.linkTo[i]}
            />
          </div>
        </div>
      </div>
      ));
    </Zoom>
  );

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
