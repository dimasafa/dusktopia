import './contactPage.scss';

import Menu from '../../modules/mehrmals/menu/Menu';
import Contact from '../../modules/einmal/contact/Contact';
import Footer from '../../modules/mehrmals/footer/footer';

const ContactPage:React.FC = () => {
	return (
		<div className="contactPage">
			<div className="contactPage_menu">
				<Menu hasBackground={true} colorNr={4}/>
			</div>
			<div className="contactPage_contact">
				<Contact />
			</div>
			<div className="contactPage_footer">
				<Footer />
			</div>
		</div>
	)
};

export default ContactPage;