function Storage( cartItems ) {
    console.log("Storage")
    console.log( typeof localStorage )
    if( typeof localStorage !== 'undefined' ) {
        localStorage.setItem('cart', JSON.stringify( Object.keys( cartItems ).length > 0 ? cartItems : {}))
    }
}

export function sumItems( cartItems ) {
    console.log("cartItems:")
    console.dir( cartItems )

    Storage( cartItems )
    const itemCount = Object.values( cartItems ).reduce( (total, item) => total + item.cantidad, 0 )
    const total     = Object.values( cartItems ).reduce( (total, item) => total + item.producto.precio * item.cantidad, 0 )
    return { itemCount, total }
}

export default function CartReducer(state, action){
    
    console.log("CartReducer:state")
    console.dir(state)
    console.log("CartReducer:action")
    console.dir(action)
    
    let newState = null
    switch( action.type ) {
        case 'ADD':
            newState = {
                ...state
            }
            if( !newState.cartItems.hasOwnProperty(`${action.payload.producto._id}`) ){
                newState.cartItems[`${action.payload.producto._id}`] = {}
                newState.cartItems[`${action.payload.producto._id}`].producto = action.payload.producto
                newState.cartItems[`${action.payload.producto._id}`].cantidad = 1
            } else {
                newState.cartItems[`${action.payload.producto._id}`].cantidad += 1
            }
            
            newState = {
                ...newState,
                ...sumItems( newState.cartItems )
            }
            console.log("newState")
            console.dir(newState)
            return newState
            break;

    }
}