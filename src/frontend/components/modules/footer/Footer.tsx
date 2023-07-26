import './footer.scss';
import '../../../fonts/fonts.css';

import { Link } from 'react-router-dom';

import { logo, discord, twitter, medium } from './footerImagePath';

const Footer:React.FC = () => {
	return(
		<div className="footer">
			<Link to="/">
				<div className="footer_logo">
					<img src={logo} alt="logo" />
				</div>
			</Link>

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