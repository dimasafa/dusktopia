import './mobileWindowMenu.scss';
import '../../../fonts/fonts.css';

import { logo, kreuz, star, discord, twitter, medium } from './mobileMenuImagePath';

import { Link } from 'react-router-dom'

const MobileWindowMenu:React.FC = () => {
	return (
		<div className="mobileWin">
			<div className="mobileWin_window">
				<div className="mobileWin_window_menu">
					<div className="mobileWin_window_menu_logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="mobileWin_window_menu_kreuz">
						<Link to='/'>
							<img src={kreuz} alt="kreuz" />
						</Link>
						
					</div>
				</div>
				<div className="mobileWin_window_box">
					<div className="mobileWin_window_box_list">
						<Link to='/'>
							<li>Home</li>
						</Link>
						<img src={star} alt="star" />
						<Link to='/faction'>
							<li>Factions</li>
						</Link>
						<img src={star} alt="star" />
						<Link to='/road'>
							<li>Roadmap</li>
						</Link>
						<img src={star} alt="star" />
						<Link to='/faq'>
							<li>FAQ</li>
						</Link>
						<img src={star} alt="star" />
						<Link to='/team'>
							<li>Team</li>
						</Link>
					</div>
				</div>

				<div className="mobileWin_window_icon">
					<div className="mobileWin_window_icon_iconBox">
						<div className="mobileWin_window_icon_iconBox_disc">
							<img src={discord} alt="discord" />
						</div>
						<div className="mobileWin_window_icon_iconBox_twit">
							<img src={twitter} alt="twitter" />
						</div>
						<div className="mobileWin_window_icon_iconBox_med">
							<img src={medium} alt="medium" />
						</div>
						
					</div>
				</div>

			</div>
		</div>
	)
};

export default MobileWindowMenu;