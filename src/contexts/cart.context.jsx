import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItems) => cartItems.id === productToAdd.id
    )

    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    return [...cartItems, {...productToAdd, quantity:1}]
}


const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItems) => cartItems.id === productToRemove.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }

    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        );
    }

}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems:[],
    getTotalCartValue: () => {},
    addItemToCart: () => {},
    decreaseItemFromCart: () => {},
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
})

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems,productToRemove));
    }

    const deleteItemFromCart = (productToDeleteId) => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== productToDeleteId));
    }

    const getTotalCartValue = () => {
        return cartItems.reduce((acumulator, current) => acumulator + (current.quantity * current.price),0)
    }

    const value = {isCartOpen,setIsCartOpen,cartItems, getTotalCartValue, addItemToCart, removeItemFromCart, deleteItemFromCart} 

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
