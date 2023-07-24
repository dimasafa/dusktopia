import './team.scss';
import '../../../fonts/fonts.css';

import { useState } from 'react';

import heroOne from '../../../resources/team/active_01.png';
import heroTwo from '../../../resources/team/active_02.png';
import heroThree from '../../../resources/team/active_03.png';
import heroFour from '../../../resources/team/active_04.png';

import stamp from '../../../resources/team/stamp.png';
import star from '../../../resources/team/star.png';
import gradAcive from '../../../resources/team/gradientActive.png';
import gradPassive from '../../../resources/team/gradientPassive.png';

import { textOne, textTwo, textThree, textFour } from './teamVariables';

const Team:React.FC = () => {

	const [activeDisplay, setActiveDisplay] = useState({
		image: heroOne,
		stelle: 'Co-founder / Ecosystem Chief',
		name: '@jaypegsonly',
		text: textOne
	})
	const [firstDisplay, setFirstDisplay] = useState({
		image: heroTwo,
		stelle: 'Co-founder / Operations Chief',
		name: '@0xSUPERPOTATO',
		text: textTwo
	})
	const [secondDisplay, setSecondDisplay] = useState({
		image: heroThree,
		stelle: 'Co-founder / Design Chief',
		name: '@madking3126',
		text: textThree
	})
	const [thirdDisplay, setThirdDisplay] = useState({
		image: heroFour,
		stelle: 'Blockchain Chief',
		name: '@ITSCUZZO',
		text: textFour
	})

	

	const bildOne = () => {
		setActiveDisplay({
			image: heroOne,
			stelle: 'Co-founder / Ecosystem Chief',
			name: '@jaypegsonly',
			text: textOne
		})
		setFirstDisplay({
			image: heroTwo,
			stelle: 'Co-founder / Operations Chief',
			name: '@0xSUPERPOTATO',
			text: textTwo
		})

		setSecondDisplay({
			image: heroThree,
			stelle: 'Co-founder / Design Chief',
			name: '@madking3126',
			text: textThree
		})

		setThirdDisplay({
			image: heroFour,
			stelle: 'Blockchain Chief',
			name: '@ITSCUZZO',
			text: textFour
		})
		setStartPersone(1);
		setFirstPersone(2);
		setSecondPersone(3);
		setThirdPersone(4);
	};

	const bildTwo = () => {
		setThirdDisplay({
			image: heroOne,
			stelle: 'Co-founder / Ecosystem Chief',
			name: '@jaypegsonly',
			text: textOne
		})
		setActiveDisplay({
			image: heroTwo,
			stelle: 'Co-founder / Operations Chief',
			name: '@0xSUPERPOTATO',
			text: textTwo
		})

		setFirstDisplay({
			image: heroThree,
			stelle: 'Co-founder / Design Chief',
			name: '@madking3126',
			text: textThree
		})

		setSecondDisplay({
			image: heroFour,
			stelle: 'Blockchain Chief',
			name: '@ITSCUZZO',
			text: textFour
		})
		setStartPersone(4);
		setFirstPersone(1);
		setSecondPersone(2);
		setThirdPersone(3);
	};

	const bildThree = () => {
		setSecondDisplay({
			image: heroOne,
			stelle: 'Co-founder / Ecosystem Chief',
			name: '@jaypegsonly',
			text: textOne
		})
		setThirdDisplay({
			image: heroTwo,
			stelle: 'Co-founder / Operations Chief',
			name: '@0xSUPERPOTATO',
			text: textTwo
		})
		setActiveDisplay({
			image: heroThree,
			stelle: 'Co-founder / Design Chief',
			name: '@madking3126',
			text: textThree
		})
		setFirstDisplay({
			image: heroFour,
			stelle: 'Blockchain Chief',
			name: '@ITSCUZZO',
			text: textFour
		})
		setStartPersone(3);
		setFirstPersone(4);
		setSecondPersone(1);
		setThirdPersone(2);
	};

	const bildFour = () => {
		setFirstDisplay({
			image: heroOne,
			stelle: 'Co-founder / Ecosystem Chief',
			name: '@jaypegsonly',
			text: textOne
		})
		setSecondDisplay({
			image: heroTwo,
			stelle: 'Co-founder / Operations Chief',
			name: '@0xSUPERPOTATO',
			text: textTwo
		})

		setThirdDisplay({
			image: heroThree,
			stelle: 'Co-founder / Design Chief',
			name: '@madking3126',
			text: textThree
		})

		setActiveDisplay({
			image: heroFour,
			stelle: 'Blockchain Chief',
			name: '@ITSCUZZO',
			text: textFour
		})
		setStartPersone(2);
		setFirstPersone(3);
		setSecondPersone(4);
		setThirdPersone(1);
		
	};

	const [startPersone, setStartPersone] = useState(1)
	const [firstPersone, setFirstPersone] = useState(2)
	const [secondPersone, setSecondPersone] = useState(3)
	const [thirdPersone, setThirdPersone] = useState(4)

	const ClickOne = () => {
		if (startPersone === 1 && firstPersone === 2 && secondPersone === 3 && thirdPersone === 4) {
		bildOne();
		} else if (startPersone === 4 && firstPersone === 1 && secondPersone === 2 && thirdPersone === 3) {
		bildTwo();
		} else if (startPersone === 3 && firstPersone === 4 && secondPersone === 1 && thirdPersone === 2) {
		bildThree();
		} else if (startPersone === 2 && firstPersone === 3 && secondPersone === 4 && thirdPersone === 1) {
		bildFour();
		}
	};

	const ClickTwo = () => {
		if (startPersone === 1 && firstPersone === 2 && secondPersone === 3 && thirdPersone === 4) {
		bildTwo();
		} else if (startPersone === 4 && firstPersone === 1 && secondPersone === 2 && thirdPersone === 3) {
		bildThree();
		} else if (startPersone === 3 && firstPersone === 4 && secondPersone === 1 && thirdPersone === 2) {
		bildFour();
		} else if (startPersone === 2 && firstPersone === 3 && secondPersone === 4 && thirdPersone === 1) {
		bildOne();
		}
	};

	const ClickThree = () => {
		if (startPersone === 1 && firstPersone === 2 && secondPersone === 3 && thirdPersone === 4) {
		bildThree();
		} else if (startPersone === 4 && firstPersone === 1 && secondPersone === 2 && thirdPersone === 3) {
		bildFour();
		} else if (startPersone === 3 && firstPersone === 4 && secondPersone === 1 && thirdPersone === 2) {
		bildOne();
		} else if (startPersone === 2 && firstPersone === 3 && secondPersone === 4 && thirdPersone === 1) {
		bildTwo();
		}
	};

	const ClickFour = () => {
		if (startPersone === 1 && firstPersone === 2 && secondPersone === 3 && thirdPersone === 4) {
		bildFour();
		} else if (startPersone === 4 && firstPersone === 1 && secondPersone === 2 && thirdPersone === 3) {
		bildOne();
		} else if (startPersone === 3 && firstPersone === 4 && secondPersone === 1 && thirdPersone === 2) {
		bildTwo();
		} else if (startPersone === 2 && firstPersone === 3 && secondPersone === 4 && thirdPersone === 1) {
		bildThree();
		}
	};


	return(
		<div className="team">
			<div onClick={ClickOne} className="team_active">
				<div className="team_active_box">
					<span className="team_active_box_body">
						<div className="team_active_box_body_bild">
							<img src={activeDisplay.image} alt="activeHero" />
						</div>
						<div className="team_active_box_body_text">{activeDisplay.stelle}</div>
						<div className="team_active_box_body_name">{activeDisplay.name}</div>
					</span>
					<span className="team_active_box_tr1"></span>
					<span className="team_active_box_tr2"></span>
					<div className="team_active_box_gradient">
						<img src={gradAcive} alt="gradient" />
					</div>
				</div>
			</div>
			<div onClick={ClickTwo} className="team_first">
				<div className="team_first_box">
					<span className="team_first_box_body">
						<div className="team_first_box_body_bild">
							<img src={firstDisplay.image} alt="passiveHero" />
						</div>
						<div className="team_first_box_body_text">{firstDisplay.stelle}</div>
						<div className="team_first_box_body_name">{firstDisplay.name}</div>
					</span>
					<span className="team_first_box_tr1"></span>
					<span className="team_first_box_tr2"></span>
					<div className="team_first_box_gradient">
						<img src={gradPassive} alt="gradient" />
					</div>
				</div>
			</div>
			<div onClick={ClickThree} className="team_second">
				<div className="team_second_box">
					<span className="team_second_box_body">
						<div className="team_second_box_body_bild">
							<img src={secondDisplay.image} alt="passiveHero" />
						</div>
						<div className="team_second_box_body_text">{secondDisplay.stelle}</div>
						<div className="team_second_box_body_name">{secondDisplay.name}</div>
					</span>
					<span className="team_second_box_tr1"></span>
					<span className="team_second_box_tr2"></span>
					<div className="team_second_box_gradient">
						<img src={gradPassive} alt="gradient" />
					</div>
				</div>
			</div>
			<div onClick={ClickFour} className="team_third">
				<div className="team_third_box">
					<span className="team_third_box_body">
						<div className="team_third_box_body_bild">
							<img src={thirdDisplay.image} alt="passiveHero" />
						</div>
						<div className="team_third_box_body_text">{thirdDisplay.stelle}</div>
						<div className="team_third_box_body_name">{thirdDisplay.name}</div>
					</span>
					<span className="team_third_box_tr1"></span>
					<span className="team_third_box_tr2"></span>
					<div className="team_third_box_gradient">
						<img src={gradPassive} alt="gradient" />
					</div>
				</div>
			</div>
			<div className="team_text">
				<div
					className="team_text_text"
					dangerouslySetInnerHTML={{ __html: activeDisplay.text }}
				/>
			</div>
			<div className="team_stamp">
				<img src={stamp} alt="stamp" />
			</div>
			<div className="team_star">
				<img src={star} alt="star" />
			</div>
		</div>
	)
};

export default Team;