import './menu.scss';
import '../../../fonts/fonts.css';

import logo from '../../../resources/menu/logo.png';
import discord from '../../../resources/menu/discord.png';
import twitter from '../../../resources/menu/twitter.png';
import medium from '../../../resources/menu/medium.png';


const Menu:React.FC = () => {
	return(
		<div className="menu">
			<div className="menu_left">
				<img src={logo} alt="logo" />
			</div>
			<div className="menu_right">
				<div className="menu_right_icon">
					<img src={discord} alt="discord" />
					<img src={twitter} alt="twitter" />
					<img src={medium} className="menu_right_icon_3" alt="medium" />
				</div>
				<div className="menu_right_button">
					<span className="menu_right_button_body">Whitepaper</span>
					<span className="menu_right_button_tr1"></span>
					<span className="menu_right_button_tr2"></span>
				</div>
			</div>
		</div>
	)
};

export default Menu;