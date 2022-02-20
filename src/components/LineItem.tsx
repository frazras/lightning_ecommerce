import React from 'react'
import PropTypes from 'prop-types'
import classes from './LineItem.module.scss';
import {useProducts, useCart, Product} from '../Context'

const LineItem = (props: any) => {
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
    const prod:Product = props.lineItem[0];
    const qnty:number = props.lineItem[1];
    return (
        <div className={classes.CartItems}>
            <div className={classes.imagebox}>
                <img alt="apple" src={prod.img}/>
            </div>
            <div className={classes.about}>
                <h2 className={classes.title}>{prod.name}</h2>

            </div>
            <div className={classes.counter}>
                <div className={classes.btn} onClick={(e) => add(prod)}>+</div>
                <div className={classes.count}>{qnty}</div>
                <div className={classes.btn} onClick={(e) => remove(prod)}>-</div>
            </div>
            <div className={classes.prices}>
                <div className={classes.amount}>{prod.price}sats</div>
                <div className={classes.remove}><u>Remove</u></div>
            </div>
        </div>
    )
}

LineItem.propTypes = {
    lineItem:PropTypes.any
}

export default LineItem