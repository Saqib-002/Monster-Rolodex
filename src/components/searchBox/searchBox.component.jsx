import { Component } from "react";
import "./searchBox.style.css"

class SearchBox extends Component {
    render() {
        const {onChangeHandler,className,placeholder}=this.props;
        return (
            <input 
            className={className}
            type="search"
            onChange={onChangeHandler}
            placeholder={placeholder}/>
            );
    }
}

export default SearchBox;