import { useEffect, useState } from "react";
import { ContainerList } from "../styles/styleList";
import { IProduct, getProducts } from "../service/products";
import { Product } from "./Product";

export function List() {

    const [products, setProducts] = useState<IProduct[]>([])

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
                    />
                ))
            }
        </ContainerList>
        </>
    )
}