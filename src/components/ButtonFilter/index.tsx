import "./styles.css"

type Props = {
    text: string
    type: "submit" | "reset"
}

export default function ButtonFilter({text, type}: Props) {
    return(
        <button type={type} className="dsf-btn-filter dsf-btn">
            {text}
        </button>
    )
}