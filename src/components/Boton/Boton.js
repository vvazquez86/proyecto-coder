const Boton = ({label, handleClick})=>{
    return(
        <button 
            className="btn btn-outline-dark m-2" onClick={handleClick}>
            {label}
            
        </button>
    )
}

export default Boton