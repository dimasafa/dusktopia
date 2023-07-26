import './roadPage.scss';
import '../../../fonts/fonts.css';

import { useEffect, useState } from 'react';

import bg01 from '../../../resources/roadPage/bg01.png';
import bg02 from '../../../resources/roadPage/bg02.png';
import bg03 from '../../../resources/roadPage/bg03.png';
import bg04 from '../../../resources/roadPage/bg04.png';
import bg05 from '../../../resources/roadPage/bg05.png';

import line from '../../../resources/roadPage/line.png';
import icon from '../../../resources/roadPage//icon.png';

import SidePanel from '../../modules/sidePanel/SidePanel';
import RoadmapMenu from '../../modules/roadmapMenu/RoadmapMenu';


const RoadPage:React.FC = () => {

	const [activeNum, setActiveNum] = useState(1);

	const [activeBg, setActiveBg] = useState({
		bg: {backgroundImage: `url(${bg01})`}
	});

	const setBg = (newZahl:number):void => {
		setActiveNum(newZahl);
	}

	useEffect (() => {
		if (activeNum === 1) {
			setActiveBg({
				bg: {backgroundImage: `url(${bg01})`}
			})
		} else if (activeNum === 2) {
			setActiveBg({
				bg: {backgroundImage: `url(${bg02})`}
			})
		} else if (activeNum === 3) {
			setActiveBg({
				bg: {backgroundImage: `url(${bg03})`}
			})
		} else if (activeNum === 4) {
			setActiveBg({
				bg: {backgroundImage: `url(${bg04})`}
			})
		} else if (activeNum === 5) {
			setActiveBg({
				bg: {backgroundImage: `url(${bg05})`}
			})
		}

	}, [activeNum]);




	return (
		<div className="roadPage" style={activeBg.bg}>
			<div className="roadPage_logo">
				<div className="roadPage_logo_text">OUR WAY</div>
				<img src={line} alt="line" />
			</div>
			<div className="roadPage_text">
				<div className="roadPage_text_textLeft">ROAD</div>
				<img src={icon} alt="icon" />
				<div className="roadPage_text_textRight">MAP</div>
			</div>
			<div className="roadPage_sidePanel">
				<SidePanel activePage={3} />
			</div>
			<div className="roadPage_roadMenu">
				<RoadmapMenu onChangeState={setBg}/>
			</div>
		</div>
	)
};

export default RoadPage;