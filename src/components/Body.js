import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useEffect, useState } from "react";

export default Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Please Check Your Internet Connection!!! </h1>;
  }

  //Conditional Rendering

  return listOfRestaurant.length == 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
            className="top-rate"
            onClick={() => {
              const topRes = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurant(topRes);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="res-container">
        {filterRestaurant.map((restaurant) => {
          return (
            <Link
              to={"restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
