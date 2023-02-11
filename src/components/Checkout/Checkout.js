import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore'
import { db } from "../../service/firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useTitle } from '../../hooks/useTitle';
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";




const Checkout = () => {

    const { cart, totalBuy, clearCart } = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    useTitle('Checkout', [])

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email,
                },
                items: cart,
                totalBuy
            }
            const batch = writeBatch(db)

            const ids = cart.map(prod => prod.id)            

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const productsAddedToCartFromFirestore = await getDocs(productsRef)
            const { docs } = productsAddedToCartFromFirestore

            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    //doc.ref es una referencia al documento, esto se puede hacer debido a que estamos en la misma funcion
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                const { id } = orderAdded
                setOrderId(id)
                clearCart()
                setTimeout(() => {
                    navigate('/')
                }, 5000)
            }
        }
        catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {        
        return <div className='d-flex justify-content-center'>
            <div className="spinner-border text-success m-5" role="status">
            </div>
        </div>
    }

    if (orderId) {
        return (
            <div>
                <h2 className="text-center mt-5">Su orden se genero con exito</h2>
                <h3 className="text-center mt-3">Su orden es la numero: {orderId}</h3>
            </div>
        )
    }

    if (cart.length === 0) {
        return (
            <div>
                <div className="d-flex justify-content-center mt-5">
                    <h3 className="fw-bold">No hay productos en el carrito</h3>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <Link className="btn btn-outline-dark" to={'/'}>Volver al home</Link>
                </div>
            </div>
        )
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (name === '' || email === '' || phone === '') {
            toast.error('Tiene que completar todos los campos')
        } else {
            createOrder();            
        }
    }

    return (
        <div>
            <h4 className="text-center mt-4 fw-bold">Ingrese sus datos para realizar el pedido</h4>
            <div className="container mt-5 col-4">

                <div className="form-floating mb-3">
                    <input type='text' className="form-control" id="floatingInput" placeholder="Nombre y Apeliido" onChange={(ev) => setName(ev.target.value)} required></input>
                    <label htmlFor="floatingInput">Nombre y Apellido</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" placeholder="Telefono" onChange={(ev) => setPhone(ev.target.value)} required></input>
                    <label htmlFor="floatingInput">Telefono</label>
                </div>
                
                <div className="form-floating mb-3">
                    <input type='email' className="form-control" id="floatingInput" placeholder="email" onChange={(ev) => setEmail(ev.target.value)} required></input>
                    <label htmlFor="floatingInput">Email</label>
                </div>                
                <div className="d-flex justify-content-center mt-5">
                    <button onClick={handleSubmit} type="submit" className="btn btn-dark">Generar orden</button>
                </div> 
            </div>
            <Toaster position="top-right"/>        
        </div>
    )
}

export default Checkout