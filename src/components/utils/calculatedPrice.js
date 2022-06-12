const calculatedPrice = (menuItem) => {
  let returnPrice = menuItem.Price
  menuItem.MenuItemOptionSets.forEach((item) => {
    if(item.IsMasterOptionSet) {
      const newPrice = item.MenuItemOptionSetItems.reduce((a, b) => {
        return a + b.Price;
      }, 0);
      returnPrice = newPrice;
    } 
  })
  return returnPrice;
};

export default calculatedPrice;
