import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const { title, itemCards } = data;

  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    return setShowItems(!showItems);
  };
  return (
    <div className="bg-gray-100  shadow-lg m-4">
      <div
        className=" m-2 p-2 cursor-pointer flex justify-between font-bold text-lg"
        onClick={handleClick}
      >
        <span>
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems === true ? <ItemList items={itemCards} /> : showItems}
    </div>
  );
};

export default RestaurantCategory;
