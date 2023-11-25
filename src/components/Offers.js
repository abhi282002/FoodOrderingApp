import React from "react";
import UserClass from "./UserClass";

import DemoFunction from "./FunctionDemo";
class Offers extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }
  render() {
  
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
