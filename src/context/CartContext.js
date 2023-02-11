import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])    

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd]) 
                       
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => id === prod.id)
    }

    const removeItem = (id) =>{
        const cartUpdate = cart.filter(prod => prod.id !== id)
        setCart(cartUpdate)
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity           
        })
        return accu
    } 

    const clearCart = () => {
        setCart([])
    }
    
    const getTotalBuy =() => {
        let total = 0

        cart.forEach(prod => {
            total += prod.quantity * prod.price         
        })
        return total
    }
    
    const totalQuantity = getTotalQuantity()
    

    const totalBuy = getTotalBuy()

    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, totalQuantity, totalBuy, clearCart, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}