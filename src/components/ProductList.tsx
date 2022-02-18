import React, {FC, useEffect} from 'react';
import ProductCard from './ProductCard';
import classes from "./ProductList.module.scss";

export interface Product {
  img: string,
  name: string,
  price: string,
  sku?: string,
  category?: string,
  inventory: number,
}

export const ProductList: FC = () => {
  const [products, setProducts] = React.useState([]);

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
          products && products.length>0 && products.map((product:Product)=>
          <div className={classes.column} key={product.sku}> 
            <ProductCard  product={product} />
            </div>)
        }
      </div>
    </div>
  );
}
