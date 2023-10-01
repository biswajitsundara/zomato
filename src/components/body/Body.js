import { restlist } from "../../../mockdata/restlist";
import RestaurantCard from "../card/RestaurantCard";
import { useState, useEffect } from "react";
import { API_URL } from "../../utils/constants";
import Shimmer from "../card/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    setFilteredRestaurant(restList);
  };

  const onlineStatus = useOnlineStatus();
  if(!onlineStatus){
    return <h1>You are offline</h1>
  }

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
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="btn-search"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((rest) =>
              rest.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestaurants.filter(
              (rest) => rest.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.info.id}`} className="link-route">
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
        {console.log(filteredRestaurant)}
      </div>
    </div>
  );
};

export default Body;
