import { NavLink } from "react-router-dom";
import style from './Landing.module.css';

const Landing = () => {
    return (
        <div className={style.containerLanding}>
            
            <h1 className={style.fountText}>Welcome to Videogames!</h1>
            <div>
                <NavLink to='/home'>
                    <button className={style.buttonHome}>Home Page</button>
                </NavLink>
            </div>

        </div>
    )
}

export default Landing;