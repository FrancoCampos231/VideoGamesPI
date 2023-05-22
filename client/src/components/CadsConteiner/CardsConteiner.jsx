
import { useEffect } from 'react';
import Card from '../Card/Card';
import style from './CardsConteiner.module.css'
import { useSelector } from 'react-redux';


const CardsConteiner = () => {
    
    const allVideogame = useSelector(state=>state.videogame);
    // const search = useSelector(state => state.search)
    
    // let videogame = allVideogame

    
    
    // if(search) {
    //     videogame = search
    // }

    // useEffect(() => {
    //     console.log('hola');
    // },[videogame])
    
    return (
        <div className={style.conteiner}>
            {
                allVideogame.map(card => {
                    return <Card
                        name={card.name}
                        image={card.image}
                        genres={card.genres.join(' ')}
                    />
                })
            }
        </div>
    )
}

export default CardsConteiner