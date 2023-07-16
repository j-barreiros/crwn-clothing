import './cart-item.styles.scss'

const CartItem = ({cartItem}) => {
    const {name,quantity,price,imageUrl} = cartItem
    return (
        <article className="cart-item-container">
            <img src={imageUrl}/>
            <div className="item-details">
                <span>{name}</span>
                <span>{quantity}x{price}</span>
            </div>
        </article>
    )
}

export default CartItem;