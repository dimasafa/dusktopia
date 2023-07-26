import './factionPage.scss';
import '../../../fonts/fonts.css';

import SideMenu from '../../modules/sidePanel/SidePanel';
import FactionsMenu from '../../modules/factionsMenu/FactionsMenu';

const FactionPage:React.FC = () => {


	return (
		<div className="factionPage">
			<div className="factionPage_title">FACTIONS</div>
			<div className="factionPage_sideMenu">
				<SideMenu activePage={2} />
			</div>
			<div className="factionPage_factionMenu">
				<FactionsMenu />
			</div>
		</div>
	)
};

export default FactionPage;