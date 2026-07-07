import "./styles.css"

type Props = {
    name: string;
    value: string | number;
    placeholder: string;
    onChange: Function;
}

export default function InputPrice({ name, value, placeholder, onChange }: Props) {

    function handleChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;

        onChange(name, value);
    }

    return (
        <div className="dsf-input">
            <input
                name={name}
                value={value === 0 || value === Number.MAX_VALUE ? "" : value}
                type="text"
                placeholder={placeholder}
                onChange={handleChange} />
        </div>
    )
}