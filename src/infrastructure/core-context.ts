import React from "react";
import {loadToppings} from "../core/toppings";
import storeService from "./services/store.service";
import toppingsService from "./services/toppings.service";

const coreContext = {
  useCases: {
    loadToppings: loadToppings.bind(null, toppingsService, storeService)
  }
}

export default React.createContext(coreContext)
