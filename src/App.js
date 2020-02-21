import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
//context stuff
import { movieDataContext } from "./contexts/ProductContext";
//
// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);
  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <movieDataContext.Provider value={{ products, addItem }}>
        <Navigation cart={cart} />

        <Route exact path="/" component={Products} />

        <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
      </movieDataContext.Provider>
    </div>
  );
}

export default App;
