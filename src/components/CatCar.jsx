import React from 'react'
import { Catalog } from './Catalog.jsx'
import { Cart } from './Cart.jsx'
import { AddItem } from './AddItem.jsx'

export const CatCar = () => {

    return (
        <div className="flex flex-col min-h-screen h-full">

            <AddItem />

            <Catalog />

            <Cart />

        </div>
    )
}