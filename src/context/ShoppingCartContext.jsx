import {createContext, useContext, useState} from "react";


export const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {

    const [shoppingCart,setShoppingCart] = useState(0)

    return (
        <ShoppingCartContext.Provider value={{shoppingCart,setShoppingCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider

export const useShoppingCartContext = () => useContext(ShoppingCartContext)