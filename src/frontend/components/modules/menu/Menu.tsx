import './menu.scss';
import '../../../fonts/fonts.css';

import { Link } from 'react-router-dom'

import { logo, discord, twitter, medium } from './menuImagePath';

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
				<Link to="/faction">
					<div className="menu_right_button">
						<span className="menu_right_button_body">Whitepaper</span>
						<span className="menu_right_button_tr1"></span>
						<span className="menu_right_button_tr2"></span>
					</div>
				</Link>
			</div>
		</div>
	)
};

export default Menu;