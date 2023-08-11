import { Link } from 'react-router-dom';

import ProductCard from "../product-card/product-card.component"

import './category-preview.styles.scss';
import { Fragment } from 'react';

const CategoryPreview = ({ title, products }) => {
    return (
        <Fragment>
            <h2>
                <Link className="title" to={`${title}`}>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <article className="category-preview-container">
                <div className="preview-container">
                    {products.filter((_, index) => index < 4).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </article>
        </Fragment>
    )
}

export default CategoryPreview;