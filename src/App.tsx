import React, {useCallback, useContext} from 'react';
import './App.css';
import CoreContext from "./infrastructure/core-context";
import {Topping} from "./core/domain/toppings";


function App() {
  const { useCases } = useContext(CoreContext)
  const getToppings = useCallback(useCases.loadToppings,[] );

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {getToppings().map((topping: Topping) => <li>{topping.label}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
