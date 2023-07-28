import './startPage.scss';

import Menu from '../../modules/menu/Menu';
import Content from '../../modules/firstPageContent/FirstPageContent';
import SideMenu from '../../modules/sidePanel/SidePanel';
import MobileMenu from '../../modules/mobileMenu/MobileMenu';


const StartPage:React.FC = () => {
	return(
		<div className="startPage">
			<div className="startPage_menu">
				<Menu />
			</div>
			<div className="startPage_mobile">
				<MobileMenu />
			</div>
			<div className="startPage_content">
				<Content />
			</div>
			<div className="startPage_sideMenu">
				<SideMenu activePage={1} />
			</div>
		</div>
	)
};

export default StartPage;