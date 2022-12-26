import Boton from "../Boton/Boton"
import CartWidget from "../CartWidget/CartWidget"
const Navbar = () => {
    return (        

        <nav className="bg-body-tertiary">
            <div className="d-flex justify-content-between align-items-center">                
                <div>
                <img style={{width:'120px', height:'40px'}} src="./img/logo.png" alt="carrito" />
                </div>
                <div className="">
                    <Boton label='Home' handleClick={()=>console.log('Home')}/>
                    <Boton label='Productos' handleClick={()=>console.log('Productos')}/>
                    <Boton label='Contacto' handleClick={()=>console.log('Contacto')}/>                    
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default Navbar