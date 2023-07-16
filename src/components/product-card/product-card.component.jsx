import './product-card.styles.scss'

import Button from "../button/button.component";

const ProductCard = ({product}) => {
    const {id,name,imageUrl,price} = product; 
    return (
        <article key={id} className="product-card-container">
            <img className="card-image" src={imageUrl}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={'inverted'}>Add to card</Button>
        </article>
    )
}

export default ProductCard;