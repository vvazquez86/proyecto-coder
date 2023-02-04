import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => {
                return [...prev, productToAdd]
            })
        }
    }

    const isInCart = (id) => cart.some(prod => id === prod.id)
    
    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity           
        })
        return accu
    }
    
    console.log(cart)
    
    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value={{ addItem, isInCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}