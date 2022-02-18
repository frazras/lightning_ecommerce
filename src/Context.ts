import { createContext, useContext } from 'react';
import {Product} from './components/ProductList'

type LineItem = [Product, number];
export type Cart = [LineItem] | [];
export interface CartContextType {
    // set the type of state to be handled with context
    cart: Cart,
    setCart: (cart: Cart) => void,
    addToCart: (product: Product) => void
  }
export const CartContext = createContext<CartContextType>({cart: [], setCart: x=>null, addToCart:y=>null});
export const useCart = () => useContext(CartContext);