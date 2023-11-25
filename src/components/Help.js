// const Help = () => {
//   return (
//     <div>
//       <h1>Submit your problem</h1>
//     </div>
//   );
// };

// export default Help;

import Profile from "./Children";

import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";
class Help extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1> User:{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <div className="flex gap-5">
          <input type="text" placeholder="Testing input tag" />
          <input type="text" placeholder="password" />
        </div>

        <UserClass
          name="Abhishek Sharma"
          contact="837482937"
          city="Midnapore"
        />
        <Profile />
      </>
    );
  }
}

export default Help;
