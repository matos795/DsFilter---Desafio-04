import "./styles.css"

type Props = {
    text: string
}

export default function ButtonFilter({text}: Props) {
    return(
        <div className="dsf-btn-filter dsf-btn">
            {text}
        </div>
    )
}