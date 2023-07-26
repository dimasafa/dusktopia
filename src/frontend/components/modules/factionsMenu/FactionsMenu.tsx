import './factionsMenu.scss';
import '../../../fonts/fonts.css';

import { useState, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

import {colorLeft, colorRight, whiteLeft, whiteRight, bild_1, bild_2, bild_3, bild_4, buttenOne, buttenTwo, buttenThree, buttenFour} from './factionMenuImagePath';

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
		tltle: { textTransform: '' },
		img: { display: 'none' },
		btn: { display: 'none' },
		line: { height: '80px' },
		margin: { marginBottom: '109px' }
	});
	const [bildDisplayThree, setBildDisplayThree] = useState({ 
		tltle: { textTransform: '' },
		img: { display: 'none' },
		btn: { display: 'none' },
		line: { height: '80px' },
		margin: { marginBottom: '109px' }
	});
	const [bildDisplayFour, setBildDisplayFour] = useState({ 
		tltle: { textTransform: '' },
		img: { display: 'none' },
		btn: { display: 'none' },
	});

	const clickOne = () => {
		setBtnOne(colorLeft);
		setBtnTwo(whiteRight);
		setBtnThree(whiteLeft);
		setBtnFour(whiteRight);

		setBildDisplayOne({
			tltle: { textTransform: 'uppercase' },
			img: { display: 'block' },
			btn: { display: 'block' },
			line: { height: '200px' },
			margin: { marginBottom: '0px' }
		});

		setBildDisplayTwo({
			tltle: { textTransform: '' },
			img: { display: 'none' },
			btn: { display: 'none' },
			line: { height: '80px' },
			margin: { marginBottom: '109px' }
		});

		setBildDisplayThree({
			tltle: { textTransform: '' },
			img: { display: 'none' },
			btn: { display: 'none' },
			line: { height: '80px' },
			margin: { marginBottom: '109px' }
		});

		setBildDisplayFour({
			tltle: { textTransform: '' },
			img: { display: 'none' },
			btn: { display: 'none' },
		});
	}

	const clickTwo = () => {
		setBtnOne(whiteLeft);
		setBtnTwo(colorRight);
		setBtnThree(whiteLeft);
		setBtnFour(whiteRight);

		setBildDisplayOne({
			tltle: { textTransform: '' },
			img: { display: 'none' },
			btn: { display: 'none' },
			line: { height: '80px' },
			margin: { marginBottom: '109px' }
		});

		setBildDisplayTwo({
			tltle: { textTransform: 'uppercase' },
			img: { display: 'block' },
			btn: { display: 'block' },
			line: { height: '200px' },
			margin: { marginBottom: '0px' }
		});

		setBildDisplayThree({
			tltle: { textTransform: '' },
			img: { display: 'none' },
			btn: { display: 'none' },
			line: { height: '80px' },
			margin: { marginBottom: '109px' }
		});

		setBildDisplayFour({
			tltle: { textTransform: '' },
			img: { display: 'none' },
			btn: { display: 'none' },
		});
	}

	const clickThree = () => {
		setBtnOne(whiteLeft);
		setBtnTwo(whiteRight);
		setBtnThree(colorLeft);
		setBtnFour(whiteRight);

		setBildDisplayOne({
			tltle: { textTransform: '' },
			img: { display: 'none' },
			btn: { display: 'none' },
			line: { height: '80px' },
			margin: { marginBottom: '109px' }
		});

		setBildDisplayTwo({
			tltle: { textTransform: '' },
			img: { display: 'none' },
			btn: { display: 'none' },
			line: { height: '80px' },
			margin: { marginBottom: '109px' }
		});

		setBildDisplayThree({
			tltle: { textTransform: 'uppercase' },
			img: { display: 'block' },
			btn: { display: 'block' },
			line: { height: '200px' },
			margin: { marginBottom: '0px' }
		});

		setBildDisplayFour({
			tltle: { textTransform: '' },
			img: { display: 'none' },
			btn: { display: 'none' },
		});
	}

	const clickFour = () => {
		setBtnOne(whiteLeft);
		setBtnTwo(whiteRight);
		setBtnThree(whiteLeft);
		setBtnFour(colorRight);

		setBildDisplayOne({
			tltle: { textTransform: '' },
			img: { display: 'none' },
			btn: { display: 'none' },
			line: { height: '80px' },
			margin: { marginBottom: '109px' }
		});

		setBildDisplayTwo({
			tltle: { textTransform: '' },
			img: { display: 'none' },
			btn: { display: 'none' },
			line: { height: '80px' },
			margin: { marginBottom: '109px' }
		});

		setBildDisplayThree({
			tltle: { textTransform: '' },
			img: { display: 'none' },
			btn: { display: 'none' },
			line: { height: '80px' },
			margin: { marginBottom: '109px' }
		});

		setBildDisplayFour({
			tltle: { textTransform: 'uppercase' },
			img: { display: 'block' },
			btn: { display: 'block' },
		});
	}

	const navigate = useNavigate();

	const handleClick = (value:number) => {
		navigate('/more', { state: { activeMore: value } });
	};

	return (
		<div className="menuF">
			<div className="menuF_left">
				<div style={bildDisplayOne.margin} className="menuF_left_blockOne">
					<div style={bildDisplayOne.tltle as CSSProperties} onClick={clickOne} className="menuF_left_blockOne_title">Blighted Badlands</div>
					<img style={bildDisplayOne.img} className='menuF_left_blockOne_bild' src={bild_1} alt="bildBadlands" />

					<img src={buttenOne} alt="ButtenMore" 
					style={bildDisplayOne.btn} className="menuF_left_blockOne_button"
					onClick={() => handleClick(1)}
					>
					</img>

				</div>
				<div style={bildDisplayTwo.margin} className="menuF_left_blockTwo">
					<div onClick={clickTwo} style={bildDisplayTwo.tltle as CSSProperties} className="menuF_left_blockTwo_title">Glacial Frontier</div>
					<img style={bildDisplayTwo.img} className='menuF_left_blockTwo_bild' src={bild_2} alt="bildGlacial" />

					<img src={buttenTwo} 
					alt="ButtenMore" 
					style={bildDisplayTwo.btn} className="menuF_left_blockTwo_button"
					onClick={() => handleClick(2)}>
					</img>
				</div>
				<div  style={bildDisplayThree.margin} className="menuF_left_blockThree">
					<div onClick={clickThree} style={bildDisplayThree.tltle as CSSProperties}className="menuF_left_blockThree_title">Sundered Grove</div>
					<img style={bildDisplayThree.img} className='menuF_left_blockThree_bild' src={bild_3} alt="bildSundered" />

					<img src={buttenThree} 
					alt="ButtenMore" 
					style={bildDisplayThree.btn} className="menuF_left_blockThree_button"
					onClick={() => handleClick(3)}>
					</img>
				</div>
				<div className="menuF_left_blockFour">
					<div onClick={clickFour} style={bildDisplayFour.tltle as CSSProperties} className="menuF_left_blockFour_title">Sky Citadel</div>
					<img style={bildDisplayFour.img} className='menuF_left_blockFour_bild' src={bild_4} alt="bildSky" />

					<img src={buttenFour} 
					alt="ButtenMore" 
					style={bildDisplayFour.btn} className="menuF_left_blockFour_button"
					onClick={() => handleClick(4)}>
					</img>
				</div>
			</div>
			<div className="menuF_right">
				<img onClick={clickOne} className="menuF_right_knofpOne" src={btnOne} alt="buttonOne" />
				<div style={bildDisplayOne.line} className="menuF_right_lineOne"></div>

				<img onClick={clickTwo} className="menuF_right_knofpTwo" src={btnTwo} alt="buttonTwo" />
				<div style={bildDisplayTwo.line} className="menuF_right_lineTwo"></div>

				<img onClick={clickThree} className="menuF_right_knofpThree" src={btnThree} alt="buttonThree" />
				<div style={bildDisplayThree.line} className="menuF_right_lineThree"></div>

				<img onClick={clickFour} className="menuF_right_knofpFour" src={btnFour} alt="buttonFour" />
			</div>
		</div>
	)
}

export default FactionsMenu;