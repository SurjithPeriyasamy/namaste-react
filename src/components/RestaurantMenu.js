import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams(); //it is a object

  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerUi />;
  }
  const { name, costForTwoMessage, cuisines } =
    resInfo?.data.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center w-6/12 m-auto">
      <h1 className="font-bold text-lg m-4">{name}</h1>
      <p className="font-semibold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => {
            if (index == showIndex) {
              return setShowIndex(null);
            }
            setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
