import React, { FC } from 'react'
import PropTypes from 'prop-types'
import {useCart, Product, useProducts, Cart} from '../Context'
import classes from './ShoppingCart.module.scss'
import LineItem from './LineItem'

const ShoppingCart = (props: any) => {
    const { cart, setCart, addToCart } = useCart();
    const { products } = useProducts();
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

                {
                cart && cart.length>0 && cart.map((li:[Product,number])=>
                <div className={classes.column} key={li[0].sku}> 
                    <LineItem lineItem={li} />
                    </div>)
                }
                
                
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