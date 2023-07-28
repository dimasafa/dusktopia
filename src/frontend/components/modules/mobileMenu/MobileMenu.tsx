import './mobileMenu.scss';
import '../../../fonts/fonts.css';

import { Link } from 'react-router-dom'

import hamb from '../../../resources/menu/hamburger.png';


const MobileMenu:React.FC = () => {
	return(
		<div className="mobileMenu">
			<div className="mobileMenu_mobile">
				<Link to='/mob'>
					<img src={hamb} alt="hamburger" />
				</Link>
			</div>

			

		</div>
	)
};

export default MobileMenu;