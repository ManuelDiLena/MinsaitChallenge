import { useState } from 'react'
import './App.css'
import { Cart } from './components/Cart'
import { List } from "./components/List"
import { Menu } from "./components/Menu"
import { IProduct } from './service/products'
import useToggle from './hooks/useToggle'
import { Favorites } from './components/Favorites'

function App() {

    const [cartItems, setCartItems] = useState<IProduct[]>([])
    const [cartVisible, toggleCart] = useToggle(true)
    const [favVisible, toggleFav] = useToggle(false)
    const [favItems, setFavItems] = useState<IProduct[]>([])

    // Function to add products to cart
    const addToCart = (product: IProduct) => {
        // Check if the product is already in the cart
        const existProduct = cartItems.find((item) => item.id === product.id)

        if (existProduct) {
            // If it exists, the quantity is increased
            existProduct.quantity = (existProduct.quantity || 1) + 1

        } else {
            // If it doesn't exist, the product with quantity 1 is added by default
            setCartItems([...cartItems, {...product, quantity: 1}])
        }
    }

    // Function to add products to favorites
    const addToFav = (product: IProduct) => {
        // Check if the product is already in the cart
        const existProduct = favItems.find((item) => item.id === product.id)

        if (!existProduct) {
            setFavItems([...favItems, {...product}])

        }
    }

    return (
        <>
            <Menu 
                onHideCart={toggleCart}
                onHideFav={toggleFav} 
            />
            <div className='container'>
                <List addToCart={addToCart} addToFav={addToFav} />
                {
                    cartVisible && (
                        favVisible ? 
                        (
                            <Favorites favItems={favItems} setFavItems={setFavItems} />
                        ) : (
                            <Cart cartItems={cartItems} setCartItems={setCartItems} />
                        )
                    )
                }
            </div>
        </>
    )
}

export default App
