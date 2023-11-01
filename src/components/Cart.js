import { useSelector } from "react-redux";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";
import ListItems from "./ListItems";
import ItemCards from "./ItemCardList";
const Cart = () => {
  // const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.carts.items);
  return (
    <div>
      <ItemCards cardItems={cartItems} />
    </div>
  );
};

export default Cart;
