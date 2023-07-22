import './sidePanel.scss';
import '../../../fonts/fonts.css';

import star from '../../../resources/sidePanel/stern.png';

import { useState } from 'react';


const SidePanel:React.FC = () => {

	const [home, setHome] = useState('sidepanel_menu_active');
	const [factions, setFactions] = useState('');
	const [roadmap, setRoadmap] = useState('');
	const [faq, setFaq] = useState('');
	const [team, setTeam] = useState('');

	const [homeDisplay, setHomeDisplay] = useState({ display: 'block' });
	const [factionsDisplay, setFactionsDisplay] = useState({ display: 'block' });
	const [roadmapDisplay, setRoadmapDisplay] = useState({ display: 'block' });
	const [faqDisplay, setFaqDisplay] = useState({ display: 'none' });
	const [teamDisplay, setTeamDisplay] = useState({ display: 'none' });
	const [starOneDisplay, setStarOneDisplay] = useState({ display: 'block' });
	const [starTwoDisplay, setStarTwoDisplay] = useState({ display: 'block' });
	const [starThreeDisplay, setStarThreeDisplay] = useState({ display: 'none' });
	const [starFourDisplay, setStarFourDisplay] = useState({ display: 'none' });

	const homePage = () => {
		setHome('sidepanel_menu_active');
		setFactions('');
		setRoadmap('');
		setFaq('');
		setTeam('');

		setHomeDisplay({ display: 'block' });
		setFactionsDisplay({ display: 'block' });
		setRoadmapDisplay({ display: 'block' });
		setFaqDisplay({ display: 'none' });
		setTeamDisplay({ display: 'none' });

		setStarOneDisplay({ display: 'block' });
		setStarTwoDisplay({ display: 'block' });
		setStarThreeDisplay({ display: 'none' });
		setStarFourDisplay({ display: 'none' });

	}

	const factionPage = () => {
		setHome('');
		setFactions('sidepanel_menu_active');
		setRoadmap('');
		setFaq('');
		setTeam('');

		setHomeDisplay({ display: 'block' });
		setFactionsDisplay({ display: 'block' });
		setRoadmapDisplay({ display: 'block' });
		setFaqDisplay({ display: 'none' });
		setTeamDisplay({ display: 'none' });

		setStarOneDisplay({ display: 'block' });
		setStarTwoDisplay({ display: 'block' });
		setStarThreeDisplay({ display: 'none' });
		setStarFourDisplay({ display: 'none' });
	}

	const roadmapPage = () => {
		setHome('');
		setFactions('');
		setRoadmap('sidepanel_menu_active');
		setFaq('');
		setTeam('');

		setHomeDisplay({ display: 'none' });
		setFactionsDisplay({ display: 'block' });
		setRoadmapDisplay({ display: 'block' });
		setFaqDisplay({ display: 'block' });
		setTeamDisplay({ display: 'none' });

		setStarOneDisplay({ display: 'none' });
		setStarTwoDisplay({ display: 'block' });
		setStarThreeDisplay({ display: 'block' });
		setStarFourDisplay({ display: 'none' });
	}

	const faqPage = () => {
		setHome('');
		setFactions('');
		setRoadmap('');
		setFaq('sidepanel_menu_active');
		setTeam('');

		setHomeDisplay({ display: 'none' });
		setFactionsDisplay({ display: 'none' });
		setRoadmapDisplay({ display: 'block' });
		setFaqDisplay({ display: 'block' });
		setTeamDisplay({ display: 'block' });

		setStarOneDisplay({ display: 'none' });
		setStarTwoDisplay({ display: 'none' });
		setStarThreeDisplay({ display: 'block' });
		setStarFourDisplay({ display: 'block' });
	}

	const teamPage = () => {
		setHome('');
		setFactions('');
		setRoadmap('');
		setFaq('');
		setTeam('sidepanel_menu_active');

		setHomeDisplay({ display: 'none' });
		setFactionsDisplay({ display: 'none' });
		setRoadmapDisplay({ display: 'block' });
		setFaqDisplay({ display: 'block' });
		setTeamDisplay({ display: 'block' });

		setStarOneDisplay({ display: 'none' });
		setStarTwoDisplay({ display: 'none' });
		setStarThreeDisplay({ display: 'block' });
		setStarFourDisplay({ display: 'block' });
	}
	

	return (
		<div className="sidepanel">
			<div className="sidepanel_menu">
				<ul>
					<li onClick={homePage} style={homeDisplay} className={home}>Home</li>
					<li style={starOneDisplay}><img src={star} alt="star" /></li>
					<li onClick={factionPage} style={factionsDisplay} className={factions}>Factions</li>
					<li style={starTwoDisplay}><img src={star} alt="star" /></li>
					<li onClick={roadmapPage} style={roadmapDisplay} className={roadmap}>Roadmap</li>
					<li style={starThreeDisplay}><img src={star} alt="star" /></li>
					<li onClick={faqPage} style={faqDisplay} className={faq}>FAQ</li>
					<li style={starFourDisplay}><img src={star} alt="star" /></li>
					<li onClick={teamPage} style={teamDisplay} className={team}>Team</li>
				</ul>
			</div>
		</div>
	)
};

export default SidePanel;