import { NavLink } from "react-router-dom";
import style from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={style.mainConteiner}>
            <NavLink to='/home'>
                <button>HOME</button>
            </NavLink>
            <NavLink to='/create'>
                <button>Create</button>
            </NavLink>
            <NavLink to='/'>
                <button>Log Out</button>
            </NavLink>
        </div>
    )
}

export default NavBar;