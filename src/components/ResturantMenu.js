import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useResInfo from "./useResInfo";
import Liked from "./Liked";
import ListItems from "./ListItems";
import { useState } from "react";
const ResturantMenu = () => {
  const { resId } = useParams();

  const ResInfo = useResInfo(resId);

  const [showIndex, setShowIndex] = useState(null);
 
  if (ResInfo === null) {
    return <Shimmer></Shimmer>;
  }
  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    id,
    totalRatingsString,
    avgRating,
  } = ResInfo?.data?.cards[0]?.card?.card?.info;

  const catagories =
    ResInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const filterCatagories = catagories.filter(
    (c) =>
      c?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <>
      <div className=" flex flex-col items-center">
        <div className="mt-8 w-[700px] flex justify-between items-center">
          <div>
            <p className=" text-xs">
              Home/Kolkata/<span className="  font-medium">{name}</span>
            </p>
          </div>
          <div className=" flex gap-6">
            <Liked />
            <i className="fa fa-search text-2xl" aria-hidden="true"></i>
          </div>
        </div>
        <div className="  min-w-full h-[140px]  mt-[10px]">
          <div className=" w-[690px] h-[140px] border-b-[3px] border-dotted mx-auto flex justify-between items-center">
            <div>
              <h1 className=" font-bold text-xl">{name}</h1>
              <p className=" text-xs mt-1.5">{cuisines.join(" ,")}</p>
              <p className=" text-xs mt-1">{areaName}</p>
              <p className=" text-xs mt-4">
                2.5 kms | ₹30 Delivery fee will apply
              </p>
            </div>
            <div className=" border  border-dotted border-black/40 h-[60px] w-[68px] flex flex-col justify-around">
              <div className="  flex justify-center items-center h-[25px]  border-b border-black/30 border-dotted">
                <i
                  className="fa fa-star-o text-[14px] text-green-600 font-extrabold"
                  aria-hidden="true"
                ></i>

                <p className=" text-green-600  text-center text-[14px] font-bold">
                  {avgRating}
                </p>
              </div>
              <div>
                <p className="text-[10px]  text-center">{totalRatingsString}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-[700px] mx-auto flex flex-col justify-between">
        {filterCatagories.map((e, index) => {
          return (
            <ListItems
              key={e?.card?.card?.title}
              items={e?.card?.card}
              Toggle={showIndex === index ? true : false}
              setShowIndex={() =>
                setShowIndex((prevIndex) =>
                  prevIndex === index ? null : index
                )
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default ResturantMenu;
