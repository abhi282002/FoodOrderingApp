import React from "react";
import UserClass from "./UserClass";

import DemoFunction from "./FunctionDemo";
class Offers extends React.Component {
  constructor(props) {
    super(props);
    console.log("Offers Page Constructor is called");
  }
  componentDidMount() {
    console.log("Offers Page Is Mounted Completly");
  }
  render() {
    console.log("Offer page Render method is called");
    return (
      <div>
        <h1>This is Other Page</h1>
        <DemoFunction />
        <DemoFunction />
      </div>
    );
  }
}

export default Offers;
