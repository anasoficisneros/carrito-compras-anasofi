import { useState } from 'react'
import { CartContext } from './CartContext.jsx'

import foto1 from '../../assets/camara.jpg'
import foto2 from '../../assets/tripie.jpg'
import foto3 from '../../assets/lente.jpg'
import foto4 from '../../assets/micro.jpg'

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([
        { name: "cámara", id: 1, quantity: 3, src: foto1, description: "cámara ultima generación" },
        { name: "tripie", id: 2, quantity: 5, src: foto2, description: "tripie para cámara profesional" },
        { name: "lente", id: 3, quantity: 7, src: foto3, description: "lente alta resolución" },
        { name: "microfono", id: 4, quantity: 2, src: foto4, description: "microfono inalambrico" },
    ])

    const [productsCart, setProductsCart] = useState([])

    const addToCart = (id) => {

        const product = products.find((product) => product.id === id)

        if (!product || product.quantity === 0) {
            return
        }

        const copyProducts = products.map((product) => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity - 1 }
            }
            else {
                return product
            }
        })

        setProducts(copyProducts)

        if (productsCart.find((product) => product.id === id)) {

            const copyProductCart = productsCart.map((product) => {
                if (product.id === id) {
                    return { ...product, quantity: product.quantity + 1 }
                }
                else {
                    return product
                }
            })

            setProductsCart(copyProductCart)

        }
        else {

            const copyProduct = { ...product, quantity: 1 }

            const copyProductCart = [...productsCart, copyProduct]

            setProductsCart(copyProductCart)
        }
    }

    const removeFromCart = (id, quantity) => {    
        const copyProducts = products.map((product) => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity + quantity }
            }
            else {
                return product
            }
        })

        setProducts(copyProducts)


        const copyProductCart = productsCart.filter(
            (product) => product.id !== id
        )

        setProductsCart(copyProductCart)
    }

    return (
        <CartContext.Provider value={{
            products,
            setProducts,
            productsCart,
            addToCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}