import ProductCardContainer from "./product-card.styles";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({product}) => {
    const {id,name,imageUrl,price} = product;

    const {addItemToCart} = useContext(CartContext);

    return (
        <ProductCardContainer key={id}>
            <img className="card-image" src={imageUrl}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => addItemToCart(product)}>Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;