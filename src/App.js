import { useState } from "react";
import ListForm from "./components/ListForm";
import ListItems from "./components/ListItems/ListItems";

function App() {
  const [shopItems, setShopItems] = useState([]);
  const onFormSubmit = (item) => {
    setShopItems((previousState) => {
      return ([ ...previousState, item])
    });
  };

  return (
    <div>
      <ListForm handleSubmit={onFormSubmit} />
      <ListItems/>
    </div>
  );
}

export default App;
