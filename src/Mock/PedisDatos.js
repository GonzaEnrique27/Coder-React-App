import products from "./data/Products"

export const PedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(products)
        }, 1000)
    })
}