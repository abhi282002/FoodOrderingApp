import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  /**
   *
   * Subscribing to the store using a Selector
   *
   */
  const cartItems = useSelector((store) => store.carts.items);
  console.log(cartItems);
  return (
    <div className="w-full mx-auto shadow-lg  h-20 flex items-center justify-between ">
      <div className="flex items-center gap-5 w-[150px]  ml-5">
        <img
          className="w-9 ml-5"
          src="https://cdnlogo.com/logos/s/4/swiggy.svg"
        />
        <h3 className=" opacity-0 lg:opacity-100 text-1xl border-b-2 border-black  block hover:text-orange-600 hover:border-orange-600">
          <Link>Others</Link>
        </h3>
      </div>

      <div className="flex flex-2 mr-3">
        <ul className="flex flex-1 gap-10">
          <li className=" text-black flex gap-1 ">
            <img
              className="mt-0.5 w-5 h-5  rounded-lg"
              src="https://static.vecteezy.com/system/resources/previews/002/205/938/non_2x/offer-tag-icon-free-vector.jpg"
            />
            <span>
              <Link className=" cursor-pointer" to="/offers">
                Offers
              </Link>
            </span>
          </li>
          <li className="flex gap-2">
            <img
              className="w-5 h-5 mt-1
              rounded-lg"
              src="https://banner2.cleanpng.com/20210422/lii/transparent-help-icon-support-icon-6081fa5dd876c4.7457487516191309738866.jpg"
            />
            <span>
              <Link className=" cursor-pointer" to="/helps">
                Help
              </Link>
            </span>
          </li>
          <li className="flex gap-2">
            <img
              className="w-6 h-6 rounded-lg pt-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqvJNvekTmA9b6c9lWVyxLtuS9P1HJxt1uQ&usqp=CAU"
            />
            <span>Abhishek...</span>
          </li>
          <li className="flex gap-1">
            <img
              className="w-5 h-5 rounded"
              src="https://www.clipartmax.com/png/middle/24-241097_bag-cart-icon-font-awesome.png"
            />
            <span>
              <Link className=" cursor-pointer" to="/cart">
                Card ({cartItems.length} Items)
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
