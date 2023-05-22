import CardsConteiner from "../../components/CadsConteiner/CardsConteiner";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import  { getVideogames }  from "../../redux/actions/actions";

const Home = () => {

    const dispatch = useDispatch(); 
    
    useEffect(()=>{
        dispatch(getVideogames());
    },[dispatch])

    return (
        <div>
            <SearchBar/>
            <h1>Este es el Home</h1>
            <CardsConteiner/>
        </div>
    )
}

export default Home;