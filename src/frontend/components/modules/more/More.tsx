import './more.scss';
import '../../../fonts/fonts.css';



import button from '../../../resources/more/button.png';
import arrow from '../../../resources/more/arrow.png';
import titleOne from '../../../resources/more/titleOne.png';
import titleTwo from '../../../resources/more/titleTwo.png';
import titleThree from '../../../resources/more/titleThree.png';
import titleFour from '../../../resources/more/titleFour.png';

import itemOne01 from '../../../resources/more/01_01.png';
import itemOne02 from '../../../resources/more/01_02.png';
import itemOne03 from '../../../resources/more/01_03.png';
import itemOne04 from '../../../resources/more/01_04.png';
import itemOne05 from '../../../resources/more/01_05.png';
import itemOne06 from '../../../resources/more/01_06.png';
import itemOne07 from '../../../resources/more/01_07.png';
import itemOne08 from '../../../resources/more/01_08.png';



const More:React.FC = () => {




	return(
		<div className="more">
			<div className="more_buttonBox">
				<div className="more_buttonBox_buttonLeft">
					<span className="more_buttonBox_buttonLeft_body">Close</span>
				</div>
				<div className="more_buttonBox_buttonRight">
					<span className="more_buttonBox_buttonRight_body">Next</span>
					<img className="more_buttonBox_buttonRight_img" src={arrow} alt="arrow" />
				</div>
			</div>
			<div className="more_info">
				<div className="more_info_title">
					<img src={titleOne} alt="title" />
				</div>
				<div className="more_info_text">
					Modern-day Dusktopia begins here <br></br> <br></br>
					The first thing that counts here is survival Only then can you think of profit; then finally domination<br></br><br></br>
					Forge your alliances with the EON Corporation, the rival mafia gangs, or even an utterly corrupt police force - and crush all standing in your way
				</div>
			</div>
			<div className="more_itemBox" >
				<div className="more_itemBox_lineOne">
					<div className="more_itemBox_lineOne_itemOne">
						<img src={itemOne01} alt="item" />
					</div>
					<div className="more_itemBox_lineOne_itemTwo">
						<img src={itemOne05} alt="item" />
					</div>
					<div className="more_itemBox_lineOne_itemThree">
						<img src={itemOne08} alt="item" />
					</div>
					<div className="more_itemBox_lineOne_itemFour">
						<img src={itemOne05} alt="item" />
					</div>
				</div>
				<div className="more_itemBox_lineTwo">
					<div className="more_itemBox_lineTwo_itemOne">
						<img src={itemOne02} alt="item" />
					</div>
					<div className="more_itemBox_lineTwo_itemTwo">
						<img src={itemOne06} alt="item" />
					</div>
					<div className="more_itemBox_lineTwo_itemThree">
						<img src={itemOne07} alt="item" />
					</div>
					<div className="more_itemBox_lineTwo_itemFour">
						<img src={itemOne06} alt="item" />
					</div>
				</div>
				<div className="more_itemBox_lineThree">
					<div className="more_itemBox_lineThree_itemOne">
						<img src={itemOne03} alt="item" />
					</div>
					<div className="more_itemBox_lineThree_itemTwo">
						<img src={itemOne07} alt="item" />
					</div>
					<div className="more_itemBox_lineThree_itemThree">
						<img src={itemOne06} alt="item" />
					</div>
					<div className="more_itemBox_lineThree_itemFour">
						<img src={itemOne07} alt="item" />
					</div>
				</div>
				<div className="more_itemBox_lineFour">
					<div className="more_itemBox_lineFour_itemOne">
						<img src={itemOne04} alt="item" />
					</div>
					<div className="more_itemBox_lineFour_itemTwo">
						<img src={itemOne08} alt="item" />
					</div>
					<div className="more_itemBox_lineFour_itemThree">
						<img src={itemOne05} alt="item" />
					</div>
					<div className="more_itemBox_lineFour_itemFour">
						<img src={itemOne08} alt="item" />
					</div>
				</div>
			</div>
			<div className="more_scrollbox">
				<div className="more_scrollbox_button" >
					<img src={button} alt="button" />
				</div>
				<div className="more_scrollbox_line"></div>
			</div>
		</div>
	)
};

export default More;