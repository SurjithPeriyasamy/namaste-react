import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;

  const { loggedInUser, loggedBtn } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="res-card p-4 m-4 w-[260px] h-[350px] bg-gray-200 shadow-xl rounded-md hover:bg-gray-300 flex flex-col justify-between"
    >
      <img
        alt="res-image"
        className="rounded-lg w-full h-36"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="text-xs font-bold flex justify-between items-center my-2">
        <span className="bg-green-500 rounded-md text-white w-fit py-1 px-2">
          ⭐ {avgRating}
        </span>
        <span>{sla.slaString}</span>
        <span>{costForTwo}</span>
      </h4>
      <h3> User : {loggedInUser}</h3>
    </div>
  );
};

export const withLocality = (RestaurantCard) => {
  return ({ resData }) => {
    const { locality } = resData.info;
    // console.log(resData);
    return (
      <div>
        <label className="absolute z-0 m-4 py-4 px-6 rounded-lg bg-black text-white">
          {locality}
        </label>
        <RestaurantCard resData={resData} />
      </div>
    );
  };
};

export default RestaurantCard;
