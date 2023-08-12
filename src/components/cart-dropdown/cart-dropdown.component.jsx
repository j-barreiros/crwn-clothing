import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';

// Styled
import { CartDropdownContainer,  CartItemsContainer, EmptyMessage} from './cart-dropdown.styles';

// Components
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartDropDown = () => {

    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ? cartItems.map(item => <CartItem cartItem={item}/>) 
                : 
                <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItemsContainer>
            <Button onClick={() =>  navigate('checkout')}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropDown;