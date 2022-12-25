import Boton from "../Boton/Boton"
import CartWidget from "../CartWidget/CartWidget"
const Navbar = () => {
    return (        

        <nav>
            <div className="d-flex justify-content-between mt-1">
                <div className="h3 mx-1 mt-1">Relax</div>
                <div>
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