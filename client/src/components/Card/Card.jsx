import style from './Card.module.css'

const Card = (props) => {
    return (
        <div className={style.cardContainer}>
            <p>Name: {props.name}</p>
            <img src={props.image} alt="" width='150' height='100' />
            <p>Genres: {props.genres}</p>
        </div>
    )
}

export default Card;