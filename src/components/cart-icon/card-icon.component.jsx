import { useContext } from 'react';
import {CartIconContainer, StyledItemCount, StyledShoppingIcon} from './cart-icon.styles.jsx';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {

    const {cartItems,toggleIsCartOpen} = useContext(CartContext);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <StyledShoppingIcon/>
            <StyledItemCount>{cartItems.reduce((acumulator,current) => acumulator + current.quantity,0)}</StyledItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;