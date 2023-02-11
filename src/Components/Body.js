import { useEffect, useState } from "react";
import { restrauntList } from "../constants";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const filteredData = (searchText, allrestaurants) => {
  return allrestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  /* Local variable
  const searchTxt = "DOSA";
  */
  //React Variable or state Variable
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // console.log("useState Called");
    getRestrauntsData();
  }, []);

  async function getRestrauntsData() {
    const api_URL = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await api_URL.json();
    console.log(json);
    setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
  }
  console.log("render");

  //early rendering
  if (!allrestaurants) {
    return null;
  }

  return !allrestaurants.length ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            // console.log(e.target.value);
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filteredData(searchText, allrestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {filteredrestaurants.length === 0 ? (
          <h1>No restraunt found with the Name!!!!!!</h1>
        ) : (
          filteredrestaurants.map((restraunt) => {
            return (
              <RestrauntCard {...restraunt.data} key={restraunt.data.id} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
