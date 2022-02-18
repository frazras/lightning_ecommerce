import { createContext, useContext } from 'react';
import {Product} from './components/ProductList'

type LineItem = [Product, number];
export type Cart = [LineItem] | [];
export interface CartContextType {
    // set the type of state to be handled with context
    cart: Cart,
    setCart: (cart: Cart) => void,
    addToCart: (product: Product, cart: Cart) => void
  }
export const CartContext = createContext<CartContextType>({cart: [] as Cart, setCart: x=>null, addToCart:(x:Product,y:Cart)=>{null;}});
export const useCart = () => useContext(CartContext);