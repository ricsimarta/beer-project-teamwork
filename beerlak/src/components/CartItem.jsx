import React, { useState } from 'react'
import CartData from '../CartData.json'

function CartItem() {

    const[cartData, setCartData] = useState(CartData)
    
    const[amounts, setAmounts] = useState(1)
    function increaseAmount(){
        console.log("Increased")
        setAmounts(amounts + 1)
    }

    function decreaseAmount(){
        console.log("Decreased")
        setAmounts(amounts - 1)
    }

    return (
        <div className='cart-content'>
            {cartData.map(({id, name, type, fill, price}) => (
            <div className='cart-item' key = {id}>
                <div>
                    <h3>{name}</h3>
                    <p>{type}, {fill}ml</p>
                </div>
                <div>
                    <button className="amountButton" onClick={decreaseAmount}>-</button>
                    <span>{amounts}</span>
                    <button className="amountButton" onClick={increaseAmount}>+</button>
                </div>
                <div>
                    <p className='cart-item-price'>{amounts*price} Ft</p>
                </div>
                <div>
                    <i className="gg-close-o"></i>
                </div>
            </div>     
            ))}
        </div>
    )
}

export default CartItem
