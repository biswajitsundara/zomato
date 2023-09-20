import { restlist } from "../../../mockdata/restlist";
import RestaurantCard from "../card/RestaurantCard";
import { useState, useEffect } from "react";
import { API_URL } from "../../utils/constants";
import Shimmer from "../card/Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const restList =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restList);
  };

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          placeholder="Search for Dishes and Restaurants"
          class="search-box"
        ></input>
        <button className="btn-search">Search</button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestaurants.filter(
              (rest) => rest.info.avgRating > 4.3
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
