import { useEffect, useState } from "react";
import { IProduct, getProducts } from "../service/products";

export function List() {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.error(error))
    }, [])

    return (
        <div>
            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>
                            <h3>{product.productName}</h3>
                            <p>{product.stock}</p>
                            <p>{product.price}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}