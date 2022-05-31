const initialState = [
  // {
  //   text: "sdfsdfsdf",
  //   id: "sdf-sdf8sdf",
  // },
  // {
  //   text: "fsdfsdfs",
  //   id: "sfsd087s67df",
  // },
];

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SHOPITEM":
      return [...state, action.payload];
    case "REMOVE_SHOPITEM":
      return state.filter((item) => item.id !== action.payload.id);
    case "BUY_SHOPITEM":
      const itemToUpdate = state.find((item) => item.id === action.payload.id);
      console.log(itemToUpdate);
      if (itemToUpdate) {
        itemToUpdate.isPurchased = !itemToUpdate.isPurchased;
      }
      console.log(itemToUpdate);
      console.log(state.filter((item) => item.id !== action.payload.id))
      return[...state.filter((item) => item.id !== action.payload.id), itemToUpdate]
    default:
      return state;
  }
};

export default shopReducer;
