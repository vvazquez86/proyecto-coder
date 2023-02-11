import { getDoc, doc, getDocs, collection, query, where } from "firebase/firestore"
import { createAdaptedProductsFromFirestore } from "../../adapters/productAdapter"
import { db } from "../firebase/firebaseConfig"

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                return createAdaptedProductsFromFirestore(doc)
            })
            resolve(productsAdapted)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getProductsById = (idProduct) => {
    return new Promise((resolve, reject) =>{
        const docRef = doc(db, 'products', idProduct)
        getDoc(docRef).then(doc => {
            if (doc.exists()) {
                const product = createAdaptedProductsFromFirestore(doc)
                resolve(product)
            } else {
                resolve(null)
            }
        }).catch(error => {
            reject(error)
        })        
    })
}