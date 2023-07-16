import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {

    const {isCartOpen,setIsCartOpen,cartItems} = useContext(CartContext); 

    const toggleIsCartOpen = () => {
        console.log("printei")
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartItems.reduce((acumulator,current) => acumulator + current.quantity,0)}</span>
        </div>
    )
}

export default CartIcon;