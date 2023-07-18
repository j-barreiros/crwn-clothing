import { useContext } from 'react';
import './checkout-item.styles.scss'
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ item }) => {
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);
    const { id, imageUrl, name, quantity, price } = item;
    return (
        <article key={id} className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div
                    className='arrow'
                    onClick={() => removeItemFromCart(item)}
                >
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div
                    className='arrow'
                    onClick={() => addItemToCart(item)}
                >
                    &#10095;
                </div>
            </span>
            <p className="price">${quantity * price}</p>
            <div className='remove-button' onClick={() => deleteItemFromCart(id)}>&#10005;</div>
        </article>
    )
}

export default CheckoutItem;