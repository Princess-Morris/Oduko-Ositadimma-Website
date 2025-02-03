import "./style.css"

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    
}

export default function InputComponent({type, name, placeholder, value, onChange, className}: inputProps){
    return (
        <input 
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    )
}