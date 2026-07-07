import "./styles.css"
import Filter from "../Filter";
import Listing from "../Listing";
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../models/product";
import * as productService from "../../services/product-service"

type QueryParams = {
    min: number,
    max: number
}

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        min: 0,
        max: Number.MAX_VALUE
    })

    useEffect(() => {
        setProducts(productService.findByPrice(queryParams.min, queryParams.max));
    }, [queryParams])

    return (
        <>
            <main className="dsf-container">
                <div className="dsf-listing-body">
                    <Filter />
                    <Listing products={products} />
                </div>
            </main>
        </>
    )
}