import { IMG_CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, areaName } =
    props.restData;

  return (
    <div className=" w-full flex flex-col items-center">
      <div className=" mt-10 w-64 h-72  flex flex-col items-center hover:border dark:hover:border-white/5   rounded-sm hover:border-white/100 hover:shadow-lg">
        <div>
          <img
            className=" w-80 h-40 rounded-xl"
            src={IMG_CDN_URL + cloudinaryImageId}
          />
        </div>
        <div className=" w-60">
          <h3 className="pl-2 mt-1.5 text-black font-medium line-clamp-1">
            {name}
          </h3>
          <div className="pl-2 flex gap-1.5 mt-2">
            <img
              className=" w-5 h-5  rounded-xl inline-block"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"
            />
            <span className="w-5 h-5">{avgRating}</span>
          </div>
          <h3 className="pl-2 mt-1.5 line-clamp-1">{cuisines.join(" ,")}</h3>
          <h3 className="pl-2 mt-1.5">{areaName}</h3>
        </div>
      </div>
    </div>
  );
};
export const withLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="dark:bg-black w-full flex flex-col items-center">
        <RestaurantCard {...props} />
        <h1 className=" text-center  relative bottom-[158px] right-6 text-white/100  font-black text-lg ml-2">
          {props?.restData?.aggregatedDiscountInfoV3.header}{" "}
          {props?.restData?.aggregatedDiscountInfoV3.subHeader}``
        </h1>
      </div>
    );
  };
};
export default RestaurantCard;
