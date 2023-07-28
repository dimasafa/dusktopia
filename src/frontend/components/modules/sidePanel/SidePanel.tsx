import './sidePanel.scss';
import '../../../fonts/fonts.css';

import star from '../../../resources/sidePanel/stern.png';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface IActivePage {
	activePage: number;
}

const SidePanel:React.FC<IActivePage> = ({activePage}) => {

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

	useEffect(() => {
		if (activePage === 1) {
			homePage();
		} else if (activePage === 2) {
			factionPage();
		} else if (activePage === 3) {
			roadmapPage();
		} else if (activePage === 4) {
			faqPage();
		} else if (activePage === 5) {
			teamPage();
		} 
	}, [activePage])
	

	return (
		<div className="sidepanel">
			<div className="sidepanel_menu">
				<ul>
					<Link onClick={homePage}  to="/">
						<li style={homeDisplay} className={home}>Home</li>
					</Link >
					<li style={starOneDisplay}><img src={star} alt="star" /></li>
					<Link onClick={factionPage} to="/faction">
						<li style={factionsDisplay} className={factions}>Factions</li>
					</Link>
					<li style={starTwoDisplay}><img src={star} alt="star" /></li>
					<Link onClick={roadmapPage} to="/road">
						<li style={roadmapDisplay} className={roadmap}>Roadmap</li>
					</Link>
						<li style={starThreeDisplay}><img src={star} alt="star" /></li>
					<Link onClick={faqPage} to="/faq">
						<li style={faqDisplay} className={faq}>FAQ</li>
					</Link>
					<li style={starFourDisplay}><img src={star} alt="star" /></li>
					<Link onClick={teamPage} to="/team">
						<li style={teamDisplay} className={team}>Team</li>
					</Link>

				</ul>
			</div>
		</div>
	)
};

export default SidePanel;