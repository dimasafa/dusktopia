import './teamPage.scss';
import '../../../fonts/fonts.css';

import line from '../../../resources/faqPage/line.png';
import icon from '../../../resources/teamPage/icon.png';

import SidePanel from '../../modules/sidePanel/SidePanel';
import Team from '../../modules/team/Team';
import Footer from '../../modules/footer/Footer';


const TeamPage:React.FC = () => {
	return(
		<div className="teamPage">
			<div className="teamPage_logo">
				<div className="teamPage_logo_text">MEMBERS</div>
				<div className="teamPage_logo_img">
					<img src={line} alt="line" />
				</div>
			</div>
			<div className="teamPage_title">
				<div className="teamPage_title_lineOne">MEET</div>
				<div className="teamPage_title_lineTwo">
					<div className="teamPage_title_lineTwo_text1">OUR</div>
					<img src={icon} alt="icon" />
					<div className="teamPage_title_lineTwo_text2">TEAM</div>
				</div>
			</div>
			<div className="teamPage_sidePanel">
				<SidePanel activePage={5}/>
			</div>
			<div className="teamPage_team">
				<Team />
			</div>
			<div className="teamPage_footer">
				<Footer />
			</div>
		</div>
	)
};

export default TeamPage;