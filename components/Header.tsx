import { useContext } from "react"
import { CartContext } from "./CartContext"

export default function Header(props) {
    const context = useContext(CartContext)
    return (
        <div className="bg-primary">
            Carro ({context.itemCount})
            ${context.total}
        </div>
    )
}