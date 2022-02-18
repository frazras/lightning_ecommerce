import React from 'react'
import PropTypes from 'prop-types'
import classes from "./ProductCard.module.scss";

const ProductCard = (props: any) => {
  return (
    <div className={classes.card}>
        <img src={props.img} alt="product" />
        <h2>{props.name}</h2>
        <p className={classes.price}>${props.price}</p>
        <p>Take this pet home with you today.</p>
        <p><button>Add to Cart</button></p>
    </div>
  )
}

ProductCard.propTypes = {
  name:PropTypes.string,
  price:PropTypes.string,
  img:PropTypes.string,
  addToCart:PropTypes.func
}

export default ProductCard