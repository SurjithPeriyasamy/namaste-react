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

  const { loggedInUser, setUserName, loggedBtn } = useContext(UserContext);

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
      <div className="flex items-center flex-col mb-10 w-full ">
        <div className="mt-4 md:mt-0 md:mx-6 flex justify-center  w-full ">
          <input
            className="w-5/12 px-4 py-2 border placeholder:text-gray-600 border-r-0 border-solid border-red-500 rounded-l-lg focus:outline-none"
            data-testid="searchInput"
            placeholder="Search a restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-red-500 text-white ease-linear duration-200 hover:bg-green-800 px-4 py-2 rounded-r-lg"
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
        <div className="my-6 mx-6 flex flex-wrap lg:justify-between w-[47%] sm:flex-col sm:items-center xl:flex-row">
          <div>
            <button
              className="px-8 py-2 bg-red-500 rounded-lg mr-2 sm:mb-4 xl:mb-0 hover:bg-green-700 text-white ease-linear duration-200"
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
            <label className="pr-2 text-base font-medium"> UserName </label>
            <input
              type="text"
              placeholder="Login & Enter your name"
              className="border border-red-600 rounded-lg py-2 px-4 placeholder:text-gray-600 focus:outline-none"
              value={loggedInUser}
              onChange={(e) =>
                loggedBtn == "Logout" && setUserName(e.target.value)
              }
            />
          </div>
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
