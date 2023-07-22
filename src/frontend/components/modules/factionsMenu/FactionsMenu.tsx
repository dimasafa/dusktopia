import './factionsMenu.scss';
import '../../../fonts/fonts.css';

import { useState, CSSProperties } from 'react';

import colorLeft from '../../../resources/factionMenu/color_left_border.png';
import colorRight from '../../../resources/factionMenu/color_right_border.png';
import whiteLeft from '../../../resources/factionMenu/white_left_border.png';
import whiteRight from '../../../resources/factionMenu/white_right_border.png';

import bild_1 from '../../../resources/factionMenu/bild_1.jpg';
import bild_2 from '../../../resources/factionMenu/bild_2.jpg';
import bild_3 from '../../../resources/factionMenu/bild_3.jpg';
import bild_4 from '../../../resources/factionMenu/bild_4.jpg';

import buttenOne from '../../../resources/factionMenu/btnOne.png';


const FactionsMenu:React.FC = () => {

	const [btnOne, setBtnOne] = useState(whiteLeft);
	const [btnTwo, setBtnTwo] = useState(whiteRight);
	const [btnThree, setBtnThree] = useState(whiteLeft);
	const [btnFour, setBtnFour] = useState(whiteRight);

	const [bildDisplayOne, setBildDisplayOne] = useState({ 
		tltle: { textTransform: '' },
		img: { display: 'none' },
		btn: { display: 'none' },
		line: { height: '80px' },
		margin: { marginBottom: '109px' }
	});
	const [bildDisplayTwo, setBildDisplayTwo] = useState({ 
		img: { display: 'none' },
		btn: { display: 'none' },
		line: { height: '80px' }
	});
	const [bildDisplayThree, setBildDisplayThree] = useState({ 
		img: { display: 'none' },
		btn: { display: 'none' },
		line: { height: '80px' }
	});
	const [bildDisplayFour, setBildDisplayFour] = useState({ 
		img: { display: 'none' },
		btn: { display: 'none' },
	});

	const clickOne = () => {
		setBtnOne(colorLeft);

		setBildDisplayOne({
			tltle: { textTransform: 'uppercase' },
			img: { display: 'block' },
			btn: { display: 'block' },
			line: { height: '200px' },
			margin: { marginBottom: '0px' }
		});
	}

	return (
		<div className="menu">
			<div className="menu_left">
				<div style={bildDisplayOne.margin} className="menu_left_blockOne">
					<div style={bildDisplayOne.tltle as CSSProperties} onClick={clickOne} className="menu_left_blockOne_title">Blighted Badlands</div>
					<img style={bildDisplayOne.img} className='menu_left_blockOne_bild' src={bild_1} alt="bildBadlands" />
					<img src={buttenOne} alt="ButtenMore" style={bildDisplayOne.btn} className="menu_left_blockOne_button">
					</img>
				</div>
				<div className="menu_left_blockTwo">
					<div className="menu_left_blockTwo_title">Glacial Frontier</div>
					<img style={bildDisplayTwo.img} className='menu_left_blockTwo_bild' src={bild_2} alt="bildGlacial" />
					<div style={bildDisplayTwo.btn} className="menu_left_blockTwo_button">
						<span className="menu_left_blockTwo_button_body">More</span>
					</div>
				</div>
				<div className="menu_left_blockThree">
					<div className="menu_left_blockThree_title">Sundered Grove</div>
					<img style={bildDisplayThree.img} className='menu_left_blockThree_bild' src={bild_3} alt="bildSundered" />
					<div style={bildDisplayThree.btn} className="menu_left_blockThree_button">
						<span className="menu_left_blockThree_button_body">More</span>
					</div>
				</div>
				<div className="menu_left_blockFour">
					<div className="menu_left_blockFour_title">Sky Citadel</div>
					<img style={bildDisplayFour.img} className='menu_left_blockFour_bild' src={bild_4} alt="bildSky" />
					<div style={bildDisplayFour.btn} className="menu_left_blockFour_button">
						<span className="menu_left_blockFour_button_body">More</span>
					</div>
				</div>
			</div>
			<div className="menu_right">
				<img onClick={clickOne} className="menu_right_knofpOne" src={btnOne} alt="buttonOne" />
				<div style={bildDisplayOne.line} className="menu_right_lineOne"></div>

				<img className="menu_right_knofpTwo" src={btnTwo} alt="buttonTwo" />
				<div style={bildDisplayTwo.line} className="menu_right_lineTwo"></div>

				<img className="menu_right_knofpThree" src={btnThree} alt="buttonThree" />
				<div style={bildDisplayThree.line} className="menu_right_lineThree"></div>

				<img className="menu_right_knofpFour" src={btnFour} alt="buttonFour" />
			</div>
		</div>
	)
}

export default FactionsMenu;