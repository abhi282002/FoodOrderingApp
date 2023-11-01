import RestaurantCard, { withLabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import apiData from "../../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";
const Body = () => {
  const [SearchText, setSearchText] = useState("");
  const [ActualRestaurantList, SetActualRestaurantList] = useState([]);
  const [FilterRestaurantList, SetFilterRestaurantList] = useState([]);
  const WithLabelPromoted = withLabel(RestaurantCard);
  const [auth, setAuth] = useState(true);
  const HandleAuth = () => {
    if (auth) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(apiData);
      const json = await data.json();
      console.log(json);
      if (!fetchData) {
        throw Error("Please Check Your Internet Connention");
      }
      SetActualRestaurantList(
        json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      SetFilterRestaurantList(
        json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  const { loggedInUser, setUserName } = useContext(UserContext);
  return FilterRestaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="w-full  border-t border-black/5">
        <div className=" max-w-7xl mx-auto bg-white/80 ">
          <div className="flex flex-auto gap-4  mt-4 ml-2">
            <input
              type="search"
              name="food"
              className=" py-1 px-5 w-80 border rounded-xl border-blue-300  focus:outline-none focus:shadow-outline"
              value={SearchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
              onClick={(e) => {
                const filterList = ActualRestaurantList.filter((res) => {
                  return res?.info?.name
                    .toLowerCase()
                    .includes(SearchText.toLowerCase());
                });

                SetFilterRestaurantList(filterList);
              }}
            >
              Search
            </button>
            <div>
              <button
                className="w-[80px] h-[50px] bg-blue-500 text-white font-bold text-lg border border-blue-600 rounded-lg"
                onClick={HandleAuth}
              >
                {auth ? "LogIn" : "LogOut"}
              </button>
            </div>
            <div>
              {/** How to update loggedInUser(UserContext) */}
              <label className="mr-1">UserName:</label>
              <input
                type="search"
                className=" pl-4 border border-black outline-none"
                value={loggedInUser}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
          </div>

          <h1 className="mt-6 ml-2 font-bold text-2xl">
            Restaurants with online food delivery in Kolkata
          </h1>
          <div className=" flex flex-wrap gap-6 mt-6 ml-3 md:flex md:flex-wrap">
            <button className=" border border-black/30 rounded-xl px-2  text-black/75">
              Filter
            </button>
            <button className=" border border-black/30 rounded-xl px-2  text-black/75">
              <span className="  flex justify-center  items-center">
                Sort By
                <span className="flex ml-1.5 mb-1.5">
                  <i class="fa-solid fa-sort-down"></i>
                </span>
              </span>
            </button>
            <button className=" border border-black/30 rounded-xl px-2 cursor-pointer  text-black/75">
              Fast Delivery
            </button>
            <button className=" border border-black/30 rounded-xl px-2 cursor-pointer  text-black/75">
              New on Swiggy
            </button>
            <button
              className=" border border-black/30 rounded-xl px-2 cursor-pointer  text-black/75"
              onClick={() => {
                const filterData = ActualRestaurantList?.filter(
                  (resturantItems) => {
                    return resturantItems?.info?.avgRating >= 4.0;
                  }
                );
                SetFilterRestaurantList(filterData);
              }}
            >
              Rating 4.0+
            </button>
            <button className=" border border-black/30 rounded-xl px-2 cursor-pointer  text-black/75">
              Pure Veg
            </button>
            <button className=" border border-black/30 rounded-xl px-2 cursor-pointer  text-black/75">
              Rs. 300-Rs. 600
            </button>
            <button className=" border border-black/30 rounded-xl px-2 cursor-pointer  text-black/75">
              Less than Rs. 300
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {FilterRestaurantList?.map((resturantItems) => {
              return (
                <Link
                  key={resturantItems.info.id}
                  to={"/resturants/" + resturantItems.info.id}
                >
                  {resturantItems?.info.hasOwnProperty(
                    "aggregatedDiscountInfoV2"
                  ) === true ? (
                    <RestaurantCard restData={resturantItems.info} />
                  ) : (
                    <WithLabelPromoted restData={resturantItems.info} />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
