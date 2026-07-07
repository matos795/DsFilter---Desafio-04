import ButtonFilter from "../ButtonFilter"
import InputPrice from "../InputPrice"
import "./styles.css"

export default function Filter() {
    return(
        <div className="dsf-filter dsf-mb20">
            <InputPrice placeholder="Preço mínimo" />
            <InputPrice placeholder="Preço máximo" />
            <ButtonFilter text="Filtrar" />
        </div>
    )
}