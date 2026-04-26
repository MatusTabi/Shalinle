type SelectProps = {
    options: string[];
    onChange: (value: string) => void;
    value: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ options, onChange, value, ...rest }: SelectProps) => {
    return (
        <div>
            <h1>Select</h1>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                {...rest}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
