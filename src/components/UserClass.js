import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 1,
    };
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("updated");
  }

  render() {
    const { name, contact, city } = this.props;

    return (
      <div>
        <h1>
          {this.state.count1} - {this.state.count2}{" "}
        </h1>
        <button
          className=" w-14 h-7 bg-blue-400 border border-black"
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 - 1,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default UserClass;
