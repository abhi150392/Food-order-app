import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "react-shimmer";
import { IMG_CDN_URL } from "../constants";

const RestrauntMenu = () => {
  const { id } = useParams();
  const [restraunt, setRestraunt] = useState(null);

  useEffect(() => {
    getRestrauntInfo();
  }, []);

  async function getRestrauntInfo() {
    const restraunt_API_URL = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=" +
        id
    );
    const json = await restraunt_API_URL.json();
    console.log(json.data);
    setRestraunt(json.data);
  }

  return !restraunt ? (
    <Shimmer />
  ) : (
    <div className="restrauntmenu-container">
      <div>
        <h1>Restraunt id : {id}</h1>
        <h2>{restraunt?.name}</h2>
        <img src={IMG_CDN_URL + restraunt?.cloudinaryImageId} />
        <h3>{restraunt?.cuisines?.join(", ")}</h3>
        <h3>{restraunt?.area + " , " + restraunt?.city}</h3>
        <h3>{restraunt?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restraunt?.menu?.items)?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
