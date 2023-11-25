import { useState } from "react";
import ItemCards from "./ItemCardList";

const ListItems = (props) => {


  const { title, itemCards } = props?.items;
  let { Toggle, setShowIndex } = props;

  function handClick() {
    setShowIndex();
  }
  return (
    <div className="flex flex-col  min-h-[80px] border-b-[14px] overflow-hidden  ">
      <div
        className="flex justify-between items-center w-full cursor-pointer"
        onClick={handClick}
      >
        <div className=" ml-1 mt-2">
          {title} ({itemCards.length})
        </div>
        <div className="text-xs mr-2">{Toggle ? "⬆️" : "⬇️"}</div>
      </div>
      {Toggle && <ItemCards cardItems={itemCards} />}
    </div>
  );
};

export default ListItems;
