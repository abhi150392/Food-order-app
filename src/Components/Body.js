import { useState } from "react";
import { restrauntList } from "../constants";
import RestrauntCard from "./RestrauntCard";

const filteredData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
};

const Body = () => {
  /* Local variable
  const searchTxt = "DOSA";
  */
  //React Variable or state Variable
  const [restaurants, setRestaurants] = useState(restrauntList);
  const [searchText, setSearchText] = useState("");
  return (
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
            const data = filteredData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {restaurants.map((restraunt) => {
          return <RestrauntCard {...restraunt.data} key={restraunt.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
