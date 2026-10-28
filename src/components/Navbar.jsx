import React from 'react'
import { Link } from 'react-router'

export const Navbar = () => {

    return (
        <div className="flex flex-col items-center w-screen bg-pink-500 text-white p-4 gap-2">
            <div className="text-center">
                <h1 className="text-2xl font-bold">AnaSofi Store 💖</h1>
                <p className="text-sm">Proyecto de AnaSofi</p>
            </div>
            <ul className="list-none flex gap-4 font-bold cursor-pointer">
                <li>
                    <Link to="/" className="hover:text-pink-100">
                        Catálogo
                    </Link>
                </li> <li>
                    <Link to="/cart" className="hover:text-pink-100">
                        Carrito
                    </Link>
                </li>
            </ul>
        </div>
    )
}
