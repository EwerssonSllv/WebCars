interface InputProps {
    type: string,
    placeholder: string,
    name: string

}

export function Input({ type, placeholder, name }: InputProps) {
    return (
        <div>
            <input className="w-full border-2 rounded-md h-11 px-2"
                placeholder={placeholder}
                type={type}
                name={name}
            />
        </div>
    )
}