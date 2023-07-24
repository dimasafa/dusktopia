import './footer.scss';
import '../../../fonts/fonts.css';

import logo from '../../../resources/menu/logo.png';
import discord from '../../../resources/menu/discord.png';
import twitter from '../../../resources/menu/twitter.png';
import medium from '../../../resources/menu/medium.png';

const Footer:React.FC = () => {
	return(
		<div className="footer">
			<div className="footer_logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="footer_iconBox">
				<div className="footer_iconBox_dis">
					<img src={discord} alt="discord" />
				</div>
				<div className="footer_iconBox_twi">
					<img src={twitter} alt="twitter" />
				</div>
				<div className="footer_iconBox_med">
					<img src={medium} alt="medium" />
				</div>

			</div>
			<div className="footer_text">Copyright © 2022. All rights reserved.</div>
		</div>
	)
};

export default Footer;