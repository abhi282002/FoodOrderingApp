import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
import { IMG_CDN_URL } from "../../utils/constants";
const ItemCards = ({ cardItems }) => {
  console.log(cardItems);
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className=" mt-7">
      {cardItems?.map((item) => (
        <div
          className=" min-h-[140px] flex flex-col border-b-2  mt-4"
          key={item?.card?.info?.id}
        >
          <div className=" ml-1 flex justify-between">
            <div className=" w-9/12">
              <h2>{item?.card?.info?.name}</h2>
              <h3 className=" pt-1">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </h3>
              <p className=" text-[10px] text-black/40 mt-5 mb-5">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="relative mr-3 h-[100px]">
              {item.card.info.imageId ? (
                <>
                  <img
                    src={IMG_CDN_URL + item?.card?.info?.imageId}
                    className="border shadow-lg shadow-slate-400 w-[113px] h-[100px] rounded-lg"
                  />
                  <div className=" absolute left-[14px] bottom-[-10px]">
                    <button
                      className="border border-slate-300 bg-white/100 w-[86px] text-green-500 font-bold shadow-sm rounded-sm h-[35px]"
                      onClick={() => handleAddItems(item)}
                    >
                      ADD+
                    </button>
                  </div>
                </>
              ) : (
                <button
                  className="border h-[39px] bg-white/100 w-[86px] text-green-500 font-bold shadow-sm rounded "
                  onClick={handleAddItems}
                >
                  ADD
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
