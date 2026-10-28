import { BrowserRouter, Routes, Route } from 'react-router'

import { Catalog } from './components/Catalog.jsx'
import { Cart } from './components/Cart.jsx'
import { Navbar } from './components/Navbar.jsx'
import { AddItem } from './components/AddItem.jsx'

import { CartProvider } from './components/contex/CartProvider.jsx'
function App() {
    return ( <>
            <CartProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <AddItem />
                                    <Catalog />
                                </>
                            }/>
                        <Route
                            path="/cart"
                            element={<Cart />}/>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </>
    )
}
export default App