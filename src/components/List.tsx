import { useEffect, useState } from "react";
import { ContainerList } from "../styles/styleList";
import { IProduct, getProducts } from "../service/products";
import { Product } from "./Product";

interface ListProps {
    addToCart: (product: IProduct) => void;
}

export function List({ addToCart }: ListProps) {

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
                        addToCart={() => addToCart(product)}
                    />
                ))
            }
        </ContainerList>
        </>
    )
}