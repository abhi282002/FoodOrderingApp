import React from "react";
class Demo extends React.Component {
  constructor() {
    super();
    console.log("Demo Constructor is called");
  }

  componentDidMount() {
    console.log("Demo Page is Mounted");
  }

  render() {
    console.log("Demo page Render Method is called");
    return (
      <div>
        <h1>This is Demo class Based Component</h1>
      </div>
    );
  }
}

export default Demo;
