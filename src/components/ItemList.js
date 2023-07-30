import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //console.log(items);
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
            <div className="w-3/12 relative ">
              {imageId ? <img src={CDN_URL + imageId} /> : <div></div>}
              <button className="absolute z-10 -bottom-1 left-16 bg-white text-green-600 rounded-md p-1 px-2">
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
