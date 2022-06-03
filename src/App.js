import { useState } from "react";
import ListForm from "./components/ListForm";
import ListItems from "./components/ListItems/ListItems";
import "./styles/App.css";

function App() {
  const [shopItems, setShopItems] = useState([]);
  const onFormSubmit = (item) => {
    setShopItems((previousState) => {
      return [...previousState, item];
    });
  };

  return (
    <div className="app__container">
      <div className="app">
        <ListItems />
        <ListForm handleSubmit={onFormSubmit} />
      </div>
    </div>
  );
}

export default App;
