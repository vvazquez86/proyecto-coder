const products = [
    {
        id: 1, 
        name: 'Quemador de incienso en bronce', 
        price: 4500, 
        category: 'incienso', 
        img:'/img/quemadorincienso.jpg', 
        stock: 10, 
        description:'Quemador de incienso retro, material: Bronce'
    },
    {
        id: 2, 
        name: 'Lampara de sal del Himalaya', 
        price: 1800, 
        category: 'lampara', 
        img:'/img/lamparadesal.jpg', 
        stock: 25, 
        description:'Lampara generica de sal del Himalaya'
    },
    {
        id: 3, 
        name: 'Lampara de sal con cascada de humo', 
        price: 3800, 
        category: 'lampara', 
        img:'/img/lamparadesalconcasacadadehumo.jpg', 
        stock: 10, 
        description:'Lampara de sal y cascada de humo con Buda, Material: Ceramica'
    },
    {
        id: 4, 
        name: 'Humificador Modelo T', 
        price: 5200, 
        category: 'humificador', 
        img:'/img/humificadort.jpg', 
        stock: 5, 
        description:'Humificador electrico, modelo rosa'
    },
    {
        id: 5, 
        name: 'Humificador smart inalambrico', 
        price: 4200, 
        category: 'humificador', 
        img:'/img/humificadorbola.jpg', 
        stock: 15, 
        description:'Humificador modelo bola, inalambrico'
    }
]

export const getProducts = (categoryId) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        console.log(categoryId)
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    
    return new Promise((resolve) => {        
        console.log(id)
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}