import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    setShowIndex();
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
        <span>{showItems === true ? "⬆️" : "⬇️"}</span>
      </div>
      {showItems === true ? <ItemList items={itemCards} /> : showItems}
    </div>
  );
};

export default RestaurantCategory;
