import CartItemContainer from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
    const {name,quantity,price,imageUrl} = cartItem
    return (
        <CartItemContainer>
            <img src={imageUrl}/>
            <div className="item-details">
                <span>{name}</span>
                <span>{quantity}x{price}</span>
            </div>
        </CartItemContainer>
    )
}

export default CartItem;