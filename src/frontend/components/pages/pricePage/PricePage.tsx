import './pricePage.scss';

import Menu from '../../modules/mehrmals/menu/Menu';
import Price from '../../modules/einmal/priceList/PriceList';
import Question from '../../modules/mehrmals/question/Question';
import Footer from '../../modules/mehrmals/footer/footer';

const PricePage:React.FC = () => {
	return (
		<div className="pricePage">
			<div className="pricePage_menu">
				<Menu hasBackground={true} colorNr={2}/>
			</div>
			<div className="pricePage_price">
				<Price />
			</div>
			<div className="pricePage_question">
				<Question />
			</div>
			<div className="pricePage_footer">
				<Footer />
			</div>
		</div>
	)
}

export default PricePage;