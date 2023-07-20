import RestroCard from "./RestaurentCard";
import reslist from "../utils/mockData";
import { useState } from "react";

export default Body = () => {
  const [listOfRestaurent, setList] = useState(reslist);

  return (
    <div className="body">
      <button
        className="filter"
        onClick={() => {
          const filterdRes = listOfRestaurent.filter(
            (res) => res.info.avgRating > 4
          );
          setList(filterdRes);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {listOfRestaurent.map((restaurent) => (
          <RestroCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};
