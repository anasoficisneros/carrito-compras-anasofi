import React, { useContext } from 'react'
import { CartContext } from './contex/CartContext.jsx'

export const Catalog = () => {
    const { products, addToCart } = useContext(CartContext)
    return (
        <div className="flex flex-wrap bg-pink-50 p-4 justify-center">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="flex flex-wrap gap-1 shadow shadow-pink-300 border border-pink-300 w-1/4 p-2 m-2 justify-center items-center bg-white rounded-xl" >
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-pink-700">
                            {product.name} </h3>
                        <span>
                            Disponibles: {product.quantity}
                        </span>
                        <span>
                            {product.description} </span>
                        <button
                            onClick={() => addToCart(product.id)}
                            disabled={product.quantity === 0}
                            className={
                                product.quantity === 0
                                    ? "bg-pink-200 text-pink-500 font-medium px-4 py-2 rounded-md cursor-not-allowed"
                                    : "bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded-md transition-colors" }>
                            
                            {product.quantity === 0
                                ? "Agotado"
                                : "Agregar al carrito"}
                        </button>
                    </div>
                    <div>
                        <img
                            src={product.src}
                            alt={product.name}
                            className="max-w-50 rounded-lg"/> </div>

                </div>))}
        </div>)}