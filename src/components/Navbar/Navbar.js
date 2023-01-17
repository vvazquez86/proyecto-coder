import Boton from "../Boton/Boton"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (        

        <nav className="bg-body-tertiary">
            <div className="d-flex justify-content-between align-items-center">                
                <div>
                    <Link to='/'>
                        <img style={{width:'120px', height:'40px'}} src="/img/logo.png" alt="carrito" />
                    </Link>                
                </div>
                <div className="col-4">                    
                    <Boton label='Lamparas' category={'category/lampara'}/>
                    <Boton label='Humificadores' category={'category/humificador'}/>
                    <Boton label='Inciensos' category={'category/incienso'}/>                    
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default Navbar