import { useState } from "react"

const ItemCount = ({initial = 1, stock}) =>{
    
    const [count, setCount] = useState(initial)

    const decrement = ()=>{
        if(count > 1){
            setCount(prev => prev - 1)
        }        
    }

    const increment = ()=>{
        if (count < stock){
            setCount(prev => prev + 1)
        }         
    }
    return(        
        <div className="border text-center mt-4 p-3">  
            <h4>{count}</h4>
            <div className="m-3 d-flex justify-content-around">
                <button className="btn btn-success" onClick={decrement}>-</button>
                <button className="btn btn-success" onClick={increment}>+</button>                
            </div>            
            <button className="btn btn-secondary" >Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount