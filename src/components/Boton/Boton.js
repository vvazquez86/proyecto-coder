const Boton = ({label, handleClick})=>{
    return(
        <button 
            className="btn btn-outline-secondary m-2" onClick={handleClick}>
            {label}
            
        </button>
    )
}

export default Boton