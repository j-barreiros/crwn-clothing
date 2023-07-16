import './product-card.styles.scss'

import Button from "../button/button.component";
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({product}) => {
    const {id,name,imageUrl,price} = product;

    const {addItemToCart} = useContext(CartContext);

    return (
        <article key={id} className="product-card-container">
            <img className="card-image" src={imageUrl}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={'inverted'} onClick={() => addItemToCart(product)}>Add to cart</Button>
        </article>
    )
}

export default ProductCard;