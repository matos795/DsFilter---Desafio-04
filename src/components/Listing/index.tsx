import type { ProductDTO } from "../../models/product"
import CardItem from "../CardItem"
import "./styles.css"

type Props = {
    products: ProductDTO[]
}

export default function Listing({ products }: Props) {
    return (
        <div className="dsf-listing dsf-mb20">
            {
                products?.map(product => (
                    <CardItem key={product.id} product={product} />
                ))
            }
        </div>
    )
}