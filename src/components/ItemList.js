import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAdditem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } =
          item.card.info;
        return (
          <div
            key={id}
            className="ml-10 mr-2 my-2 p-2 border-b-2 border-gray-400 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="my-2">
                {name} - ₹ {price / 100 || defaultPrice / 100}
              </div>
              <p className="text-xs">{description}</p>
            </div>
            <div className="w-3/12 relative">
              {/* <div></div> */}
              {imageId ? <img src={CDN_URL + imageId} /> : <div></div>}
              <button
                className="absolute z-10 -bottom-1 left-[60px]  bg-black text-green-600 rounded-md p-1 px-2 "
                onClick={() => handleAdditem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
