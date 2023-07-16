import { createContext, useState } from "react";

import Products from '../shop-data.json';

export const ProductContexts = createContext({
    products:[],
})

export const ProductsProvider= ({children}) => {
    const [products, setProducts] = useState(Products);
    const value = {products}

    return (
        <ProductContexts.Provider value={value}>
            {children}
        </ProductContexts.Provider>
    )
}