

const CartWidget = ({ totalQuantity})=>{

    console.log(totalQuantity)
    return(        
        <div className="mx-2 text-danger fw-bold">
            <img className="p-1" style={{width:'35px', height:'35px'}} src="/img/icono.png" alt="carrito" />
            {totalQuantity}            
        </div>
    )
}
export default CartWidget