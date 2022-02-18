import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageCTA from "./pages/PageCTA";
import { Cart, CartContext } from './Context';
import React, { SetStateAction } from "react";
import { Product } from "./components/ProductList";


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
    return (
        <CartContext.Provider value={{ cart, setCart, addToCart}}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/page-one" element={<PageOne />} />
                    <Route path="/page-two" element={<PageTwo />} />
                    <Route path="/page-three" element={<PageThree />} />
                    <Route path="/page-cta" element={<PageCTA />} />
                </Routes>
            </Layout>
        </CartContext.Provider>
    );
}

export default App;