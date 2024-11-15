const Input = ({ text, type ,placeholder}) => {
    return (
        <div>
            <label>{text}</label>
            <input type={type} placeholder={placeholder}/>
        </div>
    );
};

export default Input;