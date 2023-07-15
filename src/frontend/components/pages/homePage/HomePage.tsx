import './homePage.scss';

import Menu from '../../modules/mehrmals/menu/Menu';
import Solid from '../../modules/einmal/solid/Solid';
import Wood from '../../modules/mehrmals/woodArt/WoodArt';
import Work from '../../modules/mehrmals/ourWork/OurWork';
import About from '../../modules/mehrmals/about/About';
import Question from '../../modules/mehrmals/question/Question';
import Footer from '../../modules/mehrmals/footer/footer';

const HomePage:React.FC = () => {
	return (
		<div className="homePage">
			<div className="homePage_menu">
				<Menu hasBackground={false} colorNr = {0}/>
			</div>
			<div className="homePage_solid">
				<Solid />
			</div>
			<div className="homePage_wood">
				<Wood />
			</div>
			<div className="homePage_work">
				<Work />
			</div>
			<div className="homePage_about">
				<About />
			</div>
			<div className="homePage_question">
				<Question />
			</div>
			<div className="homePage_footer">
				<Footer />
			</div>
		</div>
	)
}

export default HomePage;