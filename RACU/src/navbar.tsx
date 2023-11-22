import './navbar.css'
import { Outlet } from "react-router"
import { Link } from 'react-router-dom';
import UserProf from '../src/assets/images/12.png'
import gameIcon from '../src/assets/icons/games.png'
import { HomeFilled, GitlabFilled } from '@ant-design/icons';

const NavBar: React.FC = () => {
    return <>
        <div className="nav-container">
            <img className='nav-logo' src={ UserProf } alt="" />
            <span className='username'>Username</span>
            <Link className='navLinks' to='/home'>
            <HomeFilled />
            <span>
                Home</span>
            </Link>

            <Link className='navLinks' to='/home'>
            <img className='nav-icons' src={ gameIcon }/>
            <span>
                Games</span>
            </Link>

            <Link className='navLinks' to='profile'>
            <GitlabFilled />
            <span>
                Profile</span>
            </Link>
        </div>
        <Outlet/>

    </>
}

export default NavBar;