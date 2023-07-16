import { useContext } from 'react';
import { ProductContexts } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss'

const Shop = () => {
    const {products} = useContext(ProductContexts);
    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard product={product}/>
            ))}
        </div>
    )
}

export default Shop;