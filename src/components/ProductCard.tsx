import React from 'react'
import PropTypes from 'prop-types'
import classes from "./ProductCard.module.scss";

const ProductCard = (props: any) => {
  return (
    <div className={classes.card}>
        <img src="https://www.w3schools.com/w3images/jeans3.jpg" alt="product" />
        <h2>Product 12</h2>
        <p className={classes.price}>$19.99</p>
        <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
        <p><button>Add to Cart</button></p>
    </div>
  )
}

ProductCard.propTypes = {}

export default ProductCard