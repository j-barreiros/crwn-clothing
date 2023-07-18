// Hook
import { useContext } from "react";
// Context
import { CartContext } from "../../contexts/cart.context";
// Components
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
// Style
import './checkout.styles.scss'

const CheckoutPage = () => {

    const {cartItems,getTotalCartValue} = useContext(CartContext);

    return (
        <section className="checkout-container">
            <section className="checkout-header">
                <article className="header-block">
                    <span>Product</span>
                </article>
                <article className="header-block">
                    <span>Description</span>
                </article>
                <article className="header-block">
                    <span>Quantity</span>
                </article>
                <article className="header-block">
                    <span>Price</span>
                </article>
            </section>
            {cartItems.map(item => <CheckoutItem item={item}/>)}
            <span className="total">Total ${getTotalCartValue()}</span>
        </section>
    )
}

export default CheckoutPage;