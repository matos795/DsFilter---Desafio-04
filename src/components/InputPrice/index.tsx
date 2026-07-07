import "./styles.css"

type Props = {
    placeholder: string;
}

export default function InputPrice({ placeholder }: Props) {
    return (
        <div className="dsf-input">
            <input type="text" placeholder={placeholder} />
        </div>
    )
}