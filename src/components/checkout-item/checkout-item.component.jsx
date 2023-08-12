import { useContext } from 'react';
import CheckoutItemContainer from './checkout-item.styles';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ item }) => {
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);
    const { id, imageUrl, name, quantity, price } = item;
    return (
        <CheckoutItemContainer key={id}>
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
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;