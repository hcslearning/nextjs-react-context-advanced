import Header from './Header'
import Footer from './Footer'
import CartContextProvider, { CartContext } from './CartContext'

export default function Layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}