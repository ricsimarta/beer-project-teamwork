import React from 'react'
import CartItem from './CartItem'
import CartSwiper from './CartSwiper'
function Cart() {

    return (
        <div className='cart-wrapper'>
            <div className='cart' id="cart-nav">
                <h2>Cart</h2>
                <hr className='divider' />
                <CartItem />
                <hr className='divider' />
                <button>Add to order</button>
                <CartSwiper />
            </div>
        </div>
    )
}

export default Cart
