import './firstPageContent.scss';
import '../../../fonts/fonts.css';


const FirstPageContent:React.FC = () => {
	return (
		<div className="content">
			<div className="content_title">FROM DUSK TO DAWN</div>
			<div className="content_btnBox">
				<div className="content_btnBox_first">
					<span className="content_btnBox_first_body">Mint</span>
					<span className="content_btnBox_first_tr1"></span>
					<span className="content_btnBox_first_tr2"></span>
				</div>
				<div className="content_btnBox_second">
					<span className="content_btnBox_second_body">Connect Wallet</span>
					<span className="content_btnBox_second_tr3"></span>
					<span className="content_btnBox_second_tr4"></span>
				</div>
			</div>
		</div>
	)
};

export default FirstPageContent;