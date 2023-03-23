import "./searchBox.style.css"

const SearchBox=({onChangeHandler,className,placeholder})=>{
    return (
        <input 
        className={className}
        type="search"
        onChange={onChangeHandler}
        placeholder={placeholder}/>
    );
}

export default SearchBox;