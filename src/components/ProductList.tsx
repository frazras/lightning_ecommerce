import React, {FC, useEffect} from 'react';
import ProductCard from './ProductCard';
import classes from "./ProductList.module.scss";

interface Product {
  img: string,
  name: string,
  price: string,
  sku?: string,
  category?: string,
  inventory: number,
}

const ProductList: FC = () => {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);

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
    <div className="App">
      <div className={classes.columns}>
        {
          products && products.length>0 && products.map((item:Product)=>
          <div className={classes.column} key={item.sku}> 
            <ProductCard  name={item.name} price={item.price} img={item.img + "?x=" + item.name} addToCart={setCart}/>
            </div>)
        }
      </div>
    </div>
  );
}

export default ProductList;
