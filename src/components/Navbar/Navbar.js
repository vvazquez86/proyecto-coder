import Boton from "../Boton/Boton"
import CartWidget from "../CartWidget/CartWidget"
const Navbar = () => {
    return (        

        <nav className="bg-body-tertiary">
            <div className="d-flex justify-content-between align-items-center">                
                <div>
                <img style={{width:'120px', height:'40px'}} src="/img/logo.png" alt="carrito" />
                </div>
                <div className="">
                    <Boton label='Home' category={'/'}/>  
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