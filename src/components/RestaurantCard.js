import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="res-card p-4 m-4 w-[280px] bg-gray-100 hover:bg-gray-200">
      <img
        alt="res-image"
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>

      <h3> User : {loggedInUser}</h3>
    </div>
  );
};

export const withLocality = (RestaurantCard) => {
  return (props) => {
    // console.log({ props });
    // console.log({ ...props });
    return (
      <div>
        <label className="absolute  m-4 py-4 px-6 rounded-lg bg-black text-white">
          {props.resData.info.locality}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
