import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LNInvoice from "./pages/LNInvoice";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageCTA from "./pages/PageCTA";
import { Cart, CartContext, Product, Products, ProductsContext } from './Context';
import React, { SetStateAction, useEffect } from "react";


function App() {
    const [cart, setCart] = React.useState([] as Cart);
    const addToCart = (product:Product, cart:Cart) => {
        const newcart = cart.slice();
        let found = false;
        for (let i = 0; i < newcart.length; i++) {
            const li = newcart[i];
            if(li[0] === product) {
                li[1]++;
                found = true;
                break;
            }
        }
        if(!found){
            newcart.push([product,1])
        }
        setCart(newcart as SetStateAction<Cart>);
    }
    const removeFromCart = (product:Product, cart:Cart) => {
        const newcart = cart.slice();
        let remove = 0;
        for (let i = 0; i < newcart.length; i++) {
            const li = newcart[i];
            if(li[0] === product) {
                li[1]--;
                if (li[1] < 1) { 
                    remove = i+1; 
                    break;
                }
            }
        }
        if(remove){
            newcart.splice(remove-1, 1)
        }
        setCart(newcart as SetStateAction<Cart>);
    }
    const [products, setProducts] = React.useState([] as Products     );

    const getProducts=()=>{
      fetch('products.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setProducts(myJson)
        });
    }
    useEffect(()=>{
      getProducts()
    },[])
  
    return (
        <ProductsContext.Provider value={{products, setProducts, getProducts}}>
            <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/ln-invoice" element={<LNInvoice />} />
                        <Route path="/page-two" element={<PageTwo />} />
                        <Route path="/page-three" element={<PageThree />} />
                        <Route path="/page-cta" element={<PageCTA />} />
                    </Routes>
                </Layout>
            </CartContext.Provider>
        </ProductsContext.Provider>
    );
}

export default App;