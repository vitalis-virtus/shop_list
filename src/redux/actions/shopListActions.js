import { v4 as uuidv4 } from "uuid";

const addShopItem = (text) => ({
  type: "ADD_SHOPITEM",
  payload: {
    id: uuidv4(),
    text,
    isPurchased: false,
  },
});

const removeShopItem = (id) => ({
  type: "REMOVE_SHOPITEM",
  payload: {
    id,
  },
});

const buyShopItem = (id) => ({
  type: "BUY_SHOPITEM",
  payload: {
    id,
  },
});

export { addShopItem, removeShopItem, buyShopItem };
