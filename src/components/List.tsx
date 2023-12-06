import { useEffect, useState } from "react";
import { ContainerList } from "../styles/styleList";
import { IProduct, getProducts } from "../service/products";
import { Product } from "./Product";

interface ListProps {
    addToCart: (product: IProduct) => void;
    addToFav: (product: IProduct) => void;
}

export function List({ addToCart, addToFav }: ListProps) {

    const [products, setProducts] = useState<IProduct[]>([])

    // Rendering of the list of products obtained
    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.error(error))
    }, [])

    return (
        <>
        <ContainerList>
            {
                products.map((product) => (
                    <Product 
                        key={product.id}
                        productName={product.productName}
                        image={product.image_url}
                        description={product.productDescription}
                        stock={product.stock}
                        price={product.price}
                        addToCart={() => addToCart(product)}
                        addToFav={() => addToFav(product)}
                    />
                ))
            }
        </ContainerList>
        </>
    )
}