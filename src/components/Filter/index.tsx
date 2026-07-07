import { useState } from "react"
import ButtonFilter from "../ButtonFilter"
import InputPrice from "../InputPrice"
import "./styles.css"

type FormData = {
    min: number;
    max: number;
}

type Props = {
    onFilter: Function
}

export default function Filter({ onFilter }: Props) {

    const [formData, setFormData] = useState<FormData>({
        min: 0,
        max: Number.MAX_VALUE
    })

    function handleSubmit(event: any) {
        event.preventDefault();

        onFilter(
            formData.min || 0,
            formData.max || Number.MAX_VALUE
        );
    }

    function handleInputChange(name: string, value: string) {
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <form onSubmit={handleSubmit} className="dsf-filter dsf-mb20">
            <InputPrice
                name="min"
                value={formData.min || ""}
                placeholder="Preço mínimo"
                onChange={handleInputChange}
            />
            <InputPrice
                name="max"
                value={formData.max ?? ""}
                placeholder="Preço máximo"
                onChange={handleInputChange}
            />
            <ButtonFilter type="submit" text="Filtrar" />
        </form>
    )
}