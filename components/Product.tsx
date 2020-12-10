import getProductos from '../lib/ProductService'
import Image from 'next/image'
import { useContext } from 'react'
import { CartContext } from './CartContext'

export function ProductItem({producto}) {
    return (
        <CartContext.Consumer>{ obj => { return (
        <div className="col">
            <div className="p-2">
                <Image width="300" height="300" src={producto.imagen} alt={producto.nombre} />
                <h2>{producto.nombre}</h2>
                <span className="me-2">{producto.precio}</span>
                <button className="btn btn-primary" onClick={ () => {obj.addProduct({cantidad: 1, producto });} }>Add</button>
            </div>
        </div>
        )}}</CartContext.Consumer>
    )
}

export default function ProductList(props) {
    const productos = getProductos()
    return (
        <div className="row">
            {productos.map( p => <ProductItem key={p._id} producto={p} />)}
        </div>
    )
}