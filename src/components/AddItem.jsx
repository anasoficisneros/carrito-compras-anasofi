import React, { useState, useContext } from 'react'
import { CartContext } from './contex/CartContext.jsx'

export const AddItem = () => {
    const { products, setProducts } = useContext(CartContext)
    const [visible, setVisible] = useState(false)
    const [image, setImage] = useState(null)
    const [product, setProduct] = useState({
        name: "",
        description: "",
        src: null,
        quantity: 1,
        id: Date.now()
    })

    const handleFileChange = (e) => {

        const file = e.target.files[0]

        if (file) {
            const url = URL.createObjectURL(file)

            setImage(url)

            setProduct({ ...product, src: url })
        }
    }

    const agregarEquipo = (e) => {
        e.preventDefault()
        const copyProducts = [
            ...products,
            {
                ...product,
                quantity: Number(product.quantity),
                id: Date.now()
            }
        ]

        setProducts(copyProducts)
        setProduct({
            name: "",
            description: "",
            src: null,
            quantity: 1,
            id: Date.now()
        })

        setImage(null)
        setVisible(false)
    }

    return (
        <div className="w-screen flex justify-center">

            <div className="flex flex-col justify-between items-center border border-pink-300 bg-white w-4/5 m-2 p-2 rounded-xl shadow shadow-pink-200">

                <div className="w-full flex">

                    <div className="flex justify-center text-center w-screen">
                        <p className="font-semibold text-pink-700">Agregar equipo de video</p>
                    </div>

                    <button
                        onClick={() => setVisible(!visible)}
                        className="cursor-pointer"
                    >
                        {visible ? "⬆️" : "⬇️"}
                    </button>

                </div>

                {visible && (

                    <form
                        className="flex flex-col mt-2"
                        onSubmit={agregarEquipo}
                    >

                        <label htmlFor="name">nombre:</label>

                        <input
                            id="name"
                            type="text"
                            name="nombre"
                            placeholder="nombre del equipo"
                            className="border border-pink-300 my-2 p-1 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                            required
                            value={product.name}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    name: e.target.value
                                })
                            }
                        />

                        <label htmlFor="descripcion">descripción:</label>

                        <textarea
                            id="descripcion"
                            name="descripcion"
                            placeholder="describe el equipo"
                            className="border border-pink-300 my-2 p-1 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                            required
                            value={product.description}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    description: e.target.value
                                })
                            }
                        />

                        <label htmlFor="cantidad">cantidad:</label>

                        <input
                            type="number"
                            id="cantidad"
                            name="cantidad"
                            placeholder="cantidad"
                            className="border border-pink-300 my-2 p-1 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                            min={1}
                            required
                            value={product.quantity}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    quantity: Number(e.target.value)
                                })
                            }
                        />

                        <label htmlFor="imagen">imagen:</label>

                        <input
                            id="imagen"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="border border-pink-300 my-2 p-1 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                            name="imagen"
                            required
                        />

                        {image && (
                            <img
                                src={image}
                                alt="imagen"
                                className="w-40 h-40 object-cover rounded-lg border border-pink-200"
                            />
                        )}

                        <button
                            type="submit"
                            className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-pink-600 active:scale-95 active:bg-fuchsia-500 transition-all duration-150 ease-in-out mt-2"
                        >
                            Agregar equipo
                        </button>

                    </form>
                )}

            </div>

        </div>
    )
}