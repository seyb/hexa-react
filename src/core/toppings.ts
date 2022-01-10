import {Toppings} from "./domain/toppings";
import StoreService from "./store-domain-service";

export interface ToppingsService {
  getToppings(): Promise<Toppings>;
}

export type LoadToppingsUseCase = (toppingsService: ToppingsService, storeService: StoreService) => Promise<Toppings>

export const loadToppings: LoadToppingsUseCase = async (toppingsService: ToppingsService, storeService: StoreService): Promise<Toppings> => {
  const toppings: Toppings = await toppingsService.getToppings();
  storeService.store<Toppings>(toppings);
  return toppings;
};