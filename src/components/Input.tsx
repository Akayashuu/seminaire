function Input({ value, label, onChange } : {
    value: number;
    label: string;
    onChange: (value: number) => void;
}) {
    return (
        <div className="flex flex-col">
            <label className="font-bold">{label}</label>
            <input
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
            />
        </div>
    );
}

export default Input;