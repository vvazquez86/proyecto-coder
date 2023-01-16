import { NavLink } from "react-router-dom"

const Boton = ({label, category})=>{
    return(
        <NavLink to={category}
            className={({ isActive}) => isActive?"btn btn-success m-2":"btn btn-outline-success m-2"}>
            {label}            
        </NavLink>
    )
}

export default Boton