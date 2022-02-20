import React, { FC } from 'react'
import PropTypes from 'prop-types'
import {useCart, Product, useProducts} from '../Context'
import classes from './ShoppingCart.module.scss'

const ShoppingCart = (props: any) => {
    const { cart, setCart, addToCart } = useCart();
    const { products } = useCart();
    function add(product:Product) {
        addToCart(product, cart)
        console.log('You added '+ product.name + ' to the cart.');
    }
    function remove(product:Product) {
    addToCart(product, cart)
    console.log('You added '+ product.name + ' to the cart.');
    }
  return (
            <div className={classes.CartContainer}>
                <div className={classes.Header}>
                    <h5 className={classes.Action}>Remove all</h5>
                </div>

                <div className={classes.CartItems}>
                    <div className={classes.imagebox}>
                        <img alt="apple" src="images/apple.png"/>
                    </div>
                    <div className={classes.about}>
                        <h2 className={classes.title}>Apple Juice</h2>

                    </div>
                    <div className={classes.counter}>
                        <div className={classes.btn} onClick={(e) => add(props.product)}>+</div>
                        <div className={classes.count}>2</div>
                        <div className={classes.btn} onClick={(e) => add(props.product)}>-</div>
                    </div>
                    <div className={classes.prices}>
                        <div className={classes.amount}>$2.99</div>
                        <div className={classes.remove}><u>Remove</u></div>
                    </div>
                </div>

                
                <hr /> 
                <div className={classes.checkout}>
                    <div className={classes.total}>
                        <div>
                            <div className={classes.Subtotal}>Sub-Total</div>
                            <div className={classes.items}>2 items</div>
                        </div>
                        <div className={classes.totalamount}>$6.18</div>
                    </div>
                    <button className={classes.button}>Checkout</button>
                </div>
            </div>
                
  )
}
ShoppingCart.propTypes = {
    product:PropTypes.any
}
export default ShoppingCart