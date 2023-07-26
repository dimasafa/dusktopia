import './faqPage.scss';
import '../../../fonts/fonts.css';

import icon from '../../../resources/faqPage/icon.png';
import line from '../../../resources/faqPage/line.png';

import SidePanel from '../../modules/sidePanel/SidePanel';
import Faq from '../../modules/faq/Faq';

const FaqPage:React.FC = () => {
	return(
		<div className="faqPage">
			<div className="faqPage_logobox">
				<div className="faqPage_logobox_text">FAQ</div>
				<div className="faqPage_logobox_img">
					<img src={line} alt="line" />
				</div>
			</div>
			<div className="faqPage_title">
				<div className="faqPage_title_lineOne">
					<div className="faqPage_title_lineOne_text1">HAVE</div>
					<img src={icon} alt="icon" />
					<div className="faqPage_title_lineOne_text2">ANY</div>
				</div>
				<div className="faqPage_title_lineTwo">QUESTIONS?</div>
			</div>
			<div className="faqPage_sidePanel">
				<SidePanel activePage={4} />
			</div>
			<div className="faqPage_faq">
				<Faq />
			</div>
		</div>
	)
};

export default FaqPage;