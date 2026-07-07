import "./styles.css"
import Filter from "../Filter";
import Listing from "../Listing";
import { useContext, useEffect, useState } from "react";
import type { ProductDTO } from "../../models/product";
import * as productService from "../../services/product-service"
import { ContextProductsCount } from "../../utils/context-products";

type QueryParams = {
    min: number,
    max: number
}

export default function ListingBody() {

    const { setContextProductsCount } = useContext(ContextProductsCount)

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        min: 0,
        max: Number.MAX_VALUE
    })

    useEffect(() => {
        const filteredProducts = productService.findByPrice(
            queryParams.min,
            queryParams.max
        );

        setProducts(filteredProducts);
        setContextProductsCount(filteredProducts.length);
    }, [queryParams, setContextProductsCount]);

    function handleFilter(min: number, max: number) {
        setQueryParams({ min, max });
    }

    return (
        <>
            <main className="dsf-container">
                <div className="dsf-listing-body">
                    <Filter onFilter={handleFilter} />
                    <Listing products={products} />
                </div>
            </main>
        </>
    )
}