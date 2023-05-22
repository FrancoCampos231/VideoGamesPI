import { useState } from "react";
import { getVideogames, searchName } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";


const SearchBar = () => {

    const dispatch = useDispatch();

    

    const [input,setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value)
        
    }

    const handleClickAll = () => {
        dispatch(getVideogames())
        setInput('')
        
    }

    const handleClick= () => {
        dispatch(searchName(input))
        setInput('')
        
    }

    return (
        <div>
            <input type="search" name="search" placeholder="Search you videogames..." value={input} autoComplete="off"
            onChange={handleInputChange}/>
            <button onClick={handleClick}>Search</button>
            <button onClick={handleClickAll}>AllGames</button>
        </div>
    )
} 

export default SearchBar