import { useState, useEffect } from "react";
import { FETCH_RES_API_URL } from "../constants";

const useRestraunt = (id) => {
  //call an API
  const [restraunt, setRestraunt] = useState(null);

  useEffect(() => {
    getRestrauntInfo();
  }, []);

  async function getRestrauntInfo() {
    const restraunt_API_URL = await fetch(FETCH_RES_API_URL + id);
    const json = await restraunt_API_URL.json();
    console.log(json.data);
    setRestraunt(json.data);
  }
  //return to get Data
  return restraunt;
};

export default useRestraunt;
