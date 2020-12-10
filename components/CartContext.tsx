import React, {createContext, useLayoutEffect, useEffect, useReducer, useState} from 'react'
import CartReducer, {sumItems} from '../lib/CartReducer'

/*
example structure 
storage = {
    2: {cantidad: 1, producto: {_id: 100, nombre: 'Polera hombre', precio: 9500} },
    10: {cantidad: 2, producto: {_id: 200, nombre: 'Polera mujera', precio: 8900} }
}
*/
const storage = {}
const initialState = {
    cartItems: storage,
    ...sumItems(storage),
    cartLoadedFromStorage: false
}

export const CartContext = createContext( initialState )

export default function CartContextProvider(props) {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addProduct    = (payload) => dispatch({type: 'ADD', payload})
    const removeProduct = (payload) => dispatch({type: 'REMOVE', payload})
    const increase      = (payload) => dispatch({type: 'INCREASE', payload})
    const decrease      = (payload) => dispatch({type: 'DECREASE', payload})
    const initCart      = (payload) => dispatch({type: 'INITCART', payload})
    const clearCart     = (payload) => dispatch({type: 'CLEAR', payload})
    const handleCheckout = (payload) => dispatch({type: 'CHECKOUT', payload})

    const cartContextValues = {
        ...state,
        addProduct,
        removeProduct,
        increase,
        decrease,
        initCart,
        clearCart,
        handleCheckout
    }

    useEffect( () => {
        if( typeof localStorage !== 'undefined') {
            const carro = localStorage.getItem('cart')
            if( !state.cartLoadedFromStorage && typeof carro === "string" && carro.length > 2 ) {
                initCart( JSON.parse( carro ) )
            }
        }
    }, [initCart, state])
    
    return (
        <CartContext.Provider value={cartContextValues}>
            {props.children}
        </CartContext.Provider>
    )
}

