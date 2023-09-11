import './roadmapMenu.scss';
import '../../../fonts/fonts.css';

import { useEffect,  useState } from 'react';
import Spinner from '../../modules/spinner/Spinner';

import { colorLeft, colorRight, whiteLeft, whiteRight,one01, one02, one03, one04, one05, two01, two02, two03, two04, two05, three01, three02, three03, three04, three05, four01, four02, four03, four04, four05, five01, five02, five03, five04, five05 } from './roadMapMenuImagePath';

interface RoadmapMenuProps {
	onChangeState: (newZahl: number) => void;
}


const RoadmapMenu:React.FC<RoadmapMenuProps> = ({ onChangeState }) => {

/* 	const [loading, setLoading] = useState(true);
	const dauer = 1500;

	useEffect(() => {
		const timer = setTimeout(() => {
		setLoading(false);
		}, dauer);

		return () => clearTimeout(timer);
	}, [loading]); */

	const [btnOne, setBtnOne] = useState(whiteLeft);
	const [btnTwo, setBtnTwo] = useState(whiteRight);
	const [btnThree, setBtnThree] = useState(whiteLeft);
	const [btnFour, setBtnFour] = useState(whiteRight);
	const [btnFive, setBtnFive] = useState(whiteLeft);

	const [displayOne, setDisplayOne] = useState({
		menuScale: { transform: '', marginLeft:'' },
		gradPosition: { top: '', left: ''},
		gradient: one01
	})
	const [displayTwo, setDisplayTwo] = useState({
		menuScale: { transform: '', marginLeft:'' },
		gradPosition: { top: '', left: ''},
		gradient: one02
	})
	const [displayThree, setDisplayThree] = useState({
		menuScale: { transform: '', marginLeft:'' },
		gradPosition: { top: '', left: ''},
		gradient: one03
	})
	const [displayFour, setDisplayFour] = useState({
		menuScale: { transform: '', marginLeft:'' },
		gradPosition: { top: '', left: ''},
		gradient: one04
	})
	const [displayFive, setDisplayFive] = useState({
		menuScale: { transform: '', marginLeft:'' },
		gradPosition: { top: '', left: ''},
		gradient: one05
	})


	const oneClick = () => {
		setBtnOne(colorLeft);
		setBtnTwo(whiteRight);
		setBtnThree(whiteLeft);
		setBtnFour(whiteRight);
		setBtnFive(whiteLeft);
/* 		setLoading(true); */

		onChangeState(1);

		setDisplayOne({
			menuScale: { transform: 'scale(1.1)', marginLeft:'23px' },
			gradPosition: { top: '', left: ''},
			gradient: one01
		})
		setDisplayTwo({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '', left: ''},
			gradient: one02
		})
		setDisplayThree({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '-5px', left: '40px'},
			gradient: one03
		})
		setDisplayFour({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '', left: ''},
			gradient: one04
		})
		setDisplayFive({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '', left: ''},
			gradient: one05
		})
	}

	const twoClick = () => {
		setBtnOne(whiteLeft);
		setBtnTwo(colorRight);
		setBtnThree(whiteLeft);
		setBtnFour(whiteRight);
		setBtnFive(whiteLeft);
		onChangeState(2);
/* 		setLoading(true); */

		setDisplayOne({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '', left: ''},
			gradient: two01
		})
		setDisplayTwo({
			menuScale: { transform: 'scale(1.1)', marginLeft:'23px' },
			gradPosition: { top: '-30px', left: '-27px'},
			gradient: two02,
			
		})
		setDisplayThree({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '', left: '23px'},
			gradient: two03
		})
		setDisplayFour({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '', left: '-15px'},
			gradient: two04
		})
		setDisplayFive({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '58px', left: ''},
			gradient: two05
		})
	}

	const threeClick = () => {
		setBtnOne(whiteLeft);
		setBtnTwo(whiteRight);
		setBtnThree(colorLeft);
		setBtnFour(whiteRight);
		setBtnFive(whiteLeft);
		onChangeState(3);
/* 		setLoading(true); */

		setDisplayOne({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '', left: ''},
			gradient: three01
		})
		setDisplayTwo({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '-30px', left: '-27px'},
			gradient: three02,
			
		})
		setDisplayThree({
			menuScale: { transform: 'scale(1.1)', marginLeft:'23px' },
			gradPosition: { top: '', left: '23px'},
			gradient: three03
		})
		setDisplayFour({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '', left: '-15px'},
			gradient: three04
		})
		setDisplayFive({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '60px', left: ''},
			gradient: three05
		})
	}

	const fourClick = () => {
		setBtnOne(whiteLeft);
		setBtnTwo(whiteRight);
		setBtnThree(whiteLeft);
		setBtnFour(colorRight);
		setBtnFive(whiteLeft);
		onChangeState(4);
/* 		setLoading(true); */

		setDisplayOne({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '', left: ''},
			gradient: four01
		})
		setDisplayTwo({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '-30px', left: '-27px'},
			gradient: four02,
			
		})
		setDisplayThree({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '', left: '65px'},
			gradient: four03
		})
		setDisplayFour({
			menuScale: { transform: 'scale(1.1)', marginLeft:'23px' },
			gradPosition: { top: '', left: '-15px'},
			gradient: four04
		})
		setDisplayFive({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '50px', left: ''},
			gradient: four05
		})
	}

	const fiveClick = () => {
		setBtnOne(whiteLeft);
		setBtnTwo(whiteRight);
		setBtnThree(whiteLeft);
		setBtnFour(whiteRight);
		setBtnFive(colorLeft);
		onChangeState(5);
/* 		setLoading(true); */

		setDisplayOne({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '', left: ''},
			gradient: five01
		})
		setDisplayTwo({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '-30px', left: '-27px'},
			gradient: five02,
			
		})
		setDisplayThree({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '', left: '65px'},
			gradient: five03
		})
		setDisplayFour({
			menuScale: { transform: '', marginLeft:'' },
			gradPosition: { top: '', left: '25px'},
			gradient: five04
		})
		setDisplayFive({
			menuScale: { transform: 'scale(1.1)', marginLeft:'23px' },
			gradPosition: { top: '43px', left: ''},
			gradient: five05
		})
	}

	return(
		<>
{/* 			{loading ? (
				<Spinner />
			) : ( */}
			<div className="menuR">
				<div className="menuR_left">
					<img onClick={oneClick} src={btnOne} alt="buttonOne" />
					<div className="menuR_left_lineOne"></div>
					<img onClick={twoClick} src={btnTwo} alt="buttonTwo" />
					<div className="menuR_left_lineTwo"></div>
					<img onClick={threeClick} src={btnThree} alt="buttonThree" />
					<div className="menuR_left_lineThree"></div>
					<img onClick={fourClick} src={btnFour} alt="buttonFour" />
					<div className="menuR_left_lineFour"></div>
					<img onClick={fiveClick} src={btnFive} alt="buttonFive" />
				</div>
				<div className="menuR_right">
					<div onClick={oneClick} style={displayOne.menuScale} className="menuR_right_buttonOne">
						<span className="menuR_right_buttonOne_body">
							<div className="menuR_right_buttonOne_body_num">01</div>
							<div className="menuR_right_buttonOne_body_header">GENESIS LANDS DROP</div>
							<div className="menuR_right_buttonOne_body_text">An original collection of 5,555 land plots will be made ready <br></br>
							for the very first Dusktopian adventurers.</div>
							<div style={displayOne.gradPosition} className="menuR_right_buttonOne_body_gradient">
								<img src={displayOne.gradient} alt="gradient" />
							</div>
						</span>
						<span className="menuR_right_buttonOne_tr1"></span>
						<span className="menuR_right_buttonOne_tr2"></span>
					</div>
					<div onClick={twoClick} className="menuR_right_buttonTwo"  style={displayTwo.menuScale}>
						<span className="menuR_right_buttonTwo_body">
							<div className="menuR_right_buttonTwo_body_num">02</div>
							<div className="menuR_right_buttonTwo_body_header">STAKING GOES LIVE</div>
							<div className="menuR_right_buttonTwo_body_text">The EON Corporation Superbank begins rewarding <br></br>
							Dusktopians staking their land plots with $DAWN. </div>
							<div style={displayTwo.gradPosition} className="menuR_right_buttonTwo_body_gradient">
								<img src={displayTwo.gradient} alt="gradient" />
							</div>
						</span>
						<span className="menuR_right_buttonTwo_tr1"></span>
						<span className="menuR_right_buttonTwo_tr2"></span>
					</div>
					<div onClick={threeClick} className="menuR_right_buttonThree" style={displayThree.menuScale}>
						<span className="menuR_right_buttonThree_body">
							<div className="menuR_right_buttonThree_body_num">03</div>
							<div className="menuR_right_buttonThree_body_header">NEW WORLDS EMERGE</div>
							<div className="menuR_right_buttonThree_body_text">Claim a slice of our secret land collection with $DAWN. <br></br>
							Outfit your existing land with new properties and accessories.</div>
							<div style={displayThree.gradPosition} className="menuR_right_buttonThree_body_gradient">
								<img src={displayThree.gradient} alt="gradient" />
							</div>
						</span>
						<span className="menuR_right_buttonThree_tr1"></span>
						<span className="menuR_right_buttonThree_tr2"></span>
					</div>
					<div onClick={fourClick} className="menuR_right_buttonFour" style={displayFour.menuScale}>
						<span className="menuR_right_buttonFour_body">
							<div className="menuR_right_buttonFour_body_num">04</div>
							<div className="menuR_right_buttonFour_body_header">AVATAR COLLECTION DROP</div>
							<div className="menuR_right_buttonFour_body_text">Get the PFP avatars you will use for in-universe <br></br>
							interaction, synergized with your asset holdings.</div>
							<div style={displayFour.gradPosition} className="menuR_right_buttonFour_body_gradient">
								<img src={displayFour.gradient} alt="gradient" />
							</div>
						</span>
						<span className="menuR_right_buttonFour_tr1"></span>
						<span className="menuR_right_buttonFour_tr2"></span>
					</div>
					<div onClick={fiveClick} className="menuR_right_buttonFive" style={displayFive.menuScale}>
						<span className="menuR_right_buttonFive_body">
							<div className="menuR_right_buttonFive_body_num">05</div>
							<div className="menuR_right_buttonFive_body_header">LET THE GAMES BEGIN
							</div>
							<div style={displayFive.gradPosition} className="menuR_right_buttonFive_body_gradient">
								<img src={displayFive.gradient} alt="gradient" />
							</div>
						</span>
						<span className="menuR_right_buttonFive_tr1"></span>
						<span className="menuR_right_buttonFive_tr2"></span>
					</div>
				</div>
			</div>
{/* 			)} */}
		</>

	)
};

export default RoadmapMenu;