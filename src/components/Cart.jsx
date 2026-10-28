import React, { useContext } from 'react'
import { CartContext } from './contex/CartContext.jsx'
export const Cart = () => {
    const { productsCart, removeFromCart } = useContext(CartContext)
    return (
        <div className="flex flex-wrap bg-pink-100 p-4 mt-auto w-full min-h-screen justify-center content-start">

            {productsCart.length === 0 && (
                <p className="text-pink-700 font-bold">
                    El carrito está vacío</p>)}

            {productsCart.map((product) => (

                <div
                    key={product.id}
                    className="flex gap-2 shadow shadow-pink-300 border border-pink-300 w-1/3 p-2 m-2 items-center flex-col bg-white rounded-xl">
                    <h3 className="font-bold text-pink-700">
                        {product.name}
                    </h3>
                    <span>
                        En carrito: {product.quantity}
                    </span>
                    <span>
                        {product.description}
                    </span>
                    <button
                        onClick={() =>
                            removeFromCart(product.id, product.quantity)}
                        className="bg-rose-600 hover:bg-rose-500 text-white font-medium px-4 py-2 rounded-md transition-colors">
                        Quitar del carrito
                    </button>

                </div>
            ))}

        </div>
    )
}