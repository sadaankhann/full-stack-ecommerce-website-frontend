import React, { Children, createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

const ProductsArray = ({ children }) => {

    const API = import.meta.env.VITE_API;

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(`${API}/allProducts`, {method : 'GET', credentials : 'include'});
                const data = await response.json();

                const shuffledArray = [...data];
            
                //Fisher–Yates shuffle
                
                for (let i = shuffledArray.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1)); // 0 se i ke beech random
                    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
                }

                setAllProducts(shuffledArray);
            } catch(err) {
                console.error(err);
            }
        }

        getProducts();


    }, [])

    return (
        <ThemeContext.Provider value={{ allProducts, setAllProducts }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ProductsArray
