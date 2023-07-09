import '../../../fonts/fonts.css';
import './Menu.scss';
import logo from "../../../resources/menu/logo.png";

const Menu: React.FC = () => {


    return (
        <div className='menu'>
            <div className="menu_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu_list">
                <a href=""></a>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Prices for services</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Login</a> </li>
                <li className="menu_list_sign"><a href="#">Sign Up</a></li>
            </div>

        </div>
    )
}

export default Menu;