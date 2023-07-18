import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';

// Components
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartDropDown = () => {

    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem cartItem={item}/>)}
            </div>
            <Button onClick={() =>  navigate('checkout')}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;