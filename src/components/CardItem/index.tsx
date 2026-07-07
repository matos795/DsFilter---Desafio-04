import type { ProductDTO } from "../../models/product"
import "./styles.css"

type Props = {
    product: ProductDTO
}

export default function CardItem({product}: Props) {
    return(
        <div className="dsf-card-item">
            <p>{product.name}</p>
            <h2>R$ {product.price.toFixed(2)}</h2>
        </div>
    )
}