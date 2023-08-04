import RestaurantCard, { withLocality } from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.3410364&lng=77.7171642&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //Optional Chaining
    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const RestaurantWithLocal = withLocality(RestaurantCard);

  // if (onlineStatus === false) {
  //   return <h1>Please Check Your Internet Connection!!! </h1>;
  // }
  //Conditional Rendering
  return listOfRestaurant.length == 0 ? (
    <ShimmerUi />
  ) : onlineStatus === false ? (
    <h1>Please Check Your Internet Connection!!! </h1>
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search-container m-4 p-4">
          <input
            className="border border-solid border-black"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-100 px-4 py-2 m-4 rounded-lg"
            onClick={() => {
              const searchOutput = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(searchOutput);
            }}
          >
            Search
          </button>
        </div>
        <div className="rating-container">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg mr-2"
            onClick={() => {
              const topRes = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterRestaurant(topRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <label> UserName : </label>
          <input
            type="text"
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {filterRestaurant.map((restaurant) => {
          return (
            <Link
              to={"restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.locality == "Brough Road" ? (
                <RestaurantWithLocal resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
