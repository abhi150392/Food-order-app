export const filteredData = (searchText, allrestaurants) => {
  return allrestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};
