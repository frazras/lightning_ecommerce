import React, {FC, useEffect} from 'react';
import ProductCard from './ProductCard';

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
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setProducts(myJson)
      });
  }
  useEffect(()=>{
    getProducts()
  },[])



  return (
    <>
    <div className="App">
     {
       products && products.length>0 && products.map((item:Product)=><p>{item.name}</p>)
     }
    </div>
    </>
  );
}

export default ProductList;
