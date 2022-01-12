import {Toppings} from "./domain/toppings";
import StoreService from "./store-domain-service";

export interface ToppingsService {
  getToppings(): Toppings;
}

export type LoadToppingsUseCase = (toppingsService: ToppingsService, storeService: StoreService) => Toppings

export const loadToppings: LoadToppingsUseCase = (toppingsService: ToppingsService, storeService: StoreService): Toppings => {
  const toppings: Toppings = toppingsService.getToppings();
  storeService.store<Toppings>(toppings);
  return toppings;
};