import './factionPage.scss';
import '../../../fonts/fonts.css';

import { useState, useEffect } from 'react';

import SideMenu from '../../modules/sidePanel/SidePanel';
import FactionsMenu from '../../modules/factionsMenu/FactionsMenu';
import MobileMenu from '../../modules/mobileMenu/MobileMenu';
import Spinner from '../../modules/spinner/Spinner';

const FactionPage:React.FC = () => {

	const [loading, setLoading] = useState(true);
	const dauer = 500;

	useEffect(() => {
		const timer = setTimeout(() => {
		setLoading(false);
		}, dauer);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
			<div className="factionPage">
				<div className="factionPage_mobileM">
					<MobileMenu />
				</div>
				<div className="factionPage_title">FACTIONS</div>
				<div className="factionPage_sideMenu">
					<SideMenu activePage={2} />
				</div>
				<div className="factionPage_factionMenu">
					<FactionsMenu />
				</div>
			</div>
		)}
		</>


	)
};

export default FactionPage;