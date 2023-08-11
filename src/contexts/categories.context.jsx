import { createContext, useEffect, useState } from "react";

import {getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContexts = createContext({
    categoriesMap:{},
})

export const CategoriesProvider= ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = {categoriesMap}

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, [])

    return (
        <CategoriesContexts.Provider value={value}>
            {children}
        </CategoriesContexts.Provider>
    )
}