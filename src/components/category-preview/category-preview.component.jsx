import { Link } from 'react-router-dom';

import ProductCard from "../product-card/product-card.component"

import {CategoryTitle, CategoryPreviewContainer} from './category-preview.styles.jsx';
import { Fragment } from 'react';

const CategoryPreview = ({ title, products }) => {
    return (
        <Fragment>
            <h2>
                <CategoryTitle to={`${title}`}>
                    {title.toUpperCase()}
                </CategoryTitle>
            </h2>
            <CategoryPreviewContainer>
                <div className="preview-container">
                    {products.filter((_, index) => index < 4).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </CategoryPreviewContainer>
        </Fragment>
    )
}

export default CategoryPreview;