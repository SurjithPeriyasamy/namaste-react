import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); //it is a object

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerUi />;
  }
  const { name, city, costForTwoMessage, cuisines } =
    resInfo?.data.cards[0]?.card?.card?.info;

  const { itemCards, title } =
    resInfo?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{city}</h3>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h1>Menu</h1>
      <ul>
        <h2>{title}</h2>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs. {item.card.info.price / 100} &rarr; (
              {item.card.info.itemAttribute.vegClassifier})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
