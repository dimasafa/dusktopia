import './more.scss';
import '../../../fonts/fonts.css';

import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { textFirstPage, textSecondPage, textThirdPage, textFourPage } from './moreVariables';

import { button, buttonwhite, arrow, titleOne, titleTwo, titleThree, titleFour, bgOne, bgTwo, bgThree, bgFour, itemOne01, itemOne02, itemOne03, itemOne04, itemOne05, itemOne06, itemOne07, itemOne08, itemTwo01, itemTwo02, itemTwo03, itemTwo04, itemTwo05, itemTwo06, itemTwo07, itemTwo08, itemThree01, itemThree02, itemThree03, itemThree04, itemThree05, itemThree06, itemThree07, itemThree08, itemFour01, itemFour02, itemFour03, itemFour04, itemFour05, itemFour06, itemFour07, itemFour08 } from './moreImagePath';

import { ScrollbarRefs } from './moreInterfaces';


const More:React.FC = (props) => {
	const location = useLocation();
	const activeMore = location.state?.activeMore;

	const [posOne, setPosOne] = useState(itemOne01);
	const [posTwo, setPosTwo] = useState(itemOne02);
	const [posThree, setPosThree] = useState(itemOne03);
	const [posFour, setPosFour] = useState(itemOne04);
	const [posFive, setPosFive] = useState(itemOne05);
	const [posSix, setPosSix] = useState(itemOne06);
	const [posSeven, setPosSeven] = useState(itemOne07);
	const [posEight, setPosEight] = useState(itemOne08);

	const [activePage, setActivePage] = useState(1);
	const [activeBg, setActiveBg] = useState({
		background: {backgroundImage: `url(${bgOne})`}
	});
	const [activeTitle, setActiveTitle] = useState(titleOne);
	const [activeText, setActiveText] = useState(textFirstPage);

	const nextPageStart = () => {
		if (activePage < 4) {
			setActivePage(activePage + 1);
		} else {
			setActivePage(1);
		}
	}

	const nextPageFinish = () => {
		if (activePage === 1) {
			setActiveBg({
				background: {backgroundImage: `url(${bgOne})`}
			})
			setActiveTitle(titleOne);
			setActiveText(textFirstPage);
			setPosOne(itemOne01);
			setPosTwo(itemOne02);
			setPosThree(itemOne03);
			setPosFour(itemOne04);
			setPosFive(itemOne05);
			setPosSix(itemOne06);
			setPosSeven(itemOne07);
			setPosEight(itemOne08);
		} else if (activePage === 2) {
			setActiveBg({
				background: {backgroundImage: `url(${bgTwo})`}
			})
			setActiveTitle(titleTwo);
			setActiveText(textSecondPage);
			setPosOne(itemTwo01);
			setPosTwo(itemTwo02);
			setPosThree(itemTwo03);
			setPosFour(itemTwo04);
			setPosFive(itemTwo05);
			setPosSix(itemTwo06);
			setPosSeven(itemTwo07);
			setPosEight(itemTwo08);
		} else if (activePage === 3) {
			setActiveBg({
				background: {backgroundImage: `url(${bgThree})`}
			})
			setActiveTitle(titleThree);
			setActiveText(textThirdPage);
			setPosOne(itemThree01);
			setPosTwo(itemThree02);
			setPosThree(itemThree03);
			setPosFour(itemThree04);
			setPosFive(itemThree05);
			setPosSix(itemThree06);
			setPosSeven(itemThree07);
			setPosEight(itemThree08);
		} else if (activePage === 4) {
			setActiveBg({
				background: {backgroundImage: `url(${bgFour})`}
			})
			setActiveTitle(titleFour);
			setActiveText(textFourPage);
			setPosOne(itemFour01);
			setPosTwo(itemFour02);
			setPosThree(itemFour03);
			setPosFour(itemFour04);
			setPosFive(itemFour05);
			setPosSix(itemFour06);
			setPosSeven(itemFour07);
			setPosEight(itemFour08);
		}
	}

	useEffect(() => {
		nextPageFinish();
	}, [activePage]);

	useEffect(() => {
		setActivePage(activeMore);
	}, [activeMore])


	const [buttonPosition, setButtonPosition] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [activeButton, setActiveButton] = useState(buttonwhite);
	const scrollbarRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);

	const handleMouseDown = (e:any) => {
		e.preventDefault();
		setIsDragging(true);
		setActiveButton(button);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
		setActiveButton(buttonwhite);
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (isDragging && scrollbarRef.current && buttonRef.current) {
			const scrollbarElement = scrollbarRef.current;
			const scrollbarRect = scrollbarElement.getBoundingClientRect();
			const buttonRect = buttonRef.current.getBoundingClientRect();
			const minPosition = 0;
			const maxPosition = scrollbarRect.height - buttonRect.height;
			let newPosition = e.clientY - scrollbarRect.top - buttonRect.height / 2;
			newPosition = Math.max(minPosition, Math.min(newPosition, maxPosition));
			setButtonPosition(newPosition);
		}
	};

	const handleMouseLeave = () => {
		setIsDragging(false);
		setActiveButton(buttonwhite);
	};

	const maxContentScroll = () => {
		if (contentRef.current) {
			const contentElement = contentRef.current;
			return contentElement.scrollHeight - contentElement.clientHeight;
		}
		return 0;
	};

	useEffect(() => {
		if (contentRef.current) {
			const contentElement = contentRef.current;
			const maxScroll = maxContentScroll();

			contentElement.scrollTop = (buttonPosition / 350) * maxScroll;
		}
	}, [buttonPosition]);

	return(
		<div className="more" style={activeBg.background}>
			<div className="more_buttonBox">
				<Link to='/faction'>
					<div className="more_buttonBox_buttonLeft">
						<span className="more_buttonBox_buttonLeft_body">Close</span>
					</div>
				</Link>

				<div className="more_buttonBox_buttonRight" onClick={nextPageStart} >
					<span className="more_buttonBox_buttonRight_body">Next</span>
					<img className="more_buttonBox_buttonRight_img" src={arrow} alt="arrow" />
				</div>
			</div>
			<div className="more_info">
				<div className="more_info_title">
					<img src={activeTitle} alt="title" />
				</div>
				<div className="more_info_text" dangerouslySetInnerHTML={{ __html: activeText }}>
				</div>
			</div>
			<div className="more_itemBox" ref={contentRef}>
				<div className="more_itemBox_lineOne">
					<div className="more_itemBox_lineOne_itemOne">
						<img src={posOne} alt="item" />
					</div>
					<div className="more_itemBox_lineOne_itemTwo">
						<img src={posFive} alt="item" />
					</div>
					<div className="more_itemBox_lineOne_itemThree">
						<img src={posEight} alt="item" />
					</div>
					<div className="more_itemBox_lineOne_itemFour">
						<img src={posFive} alt="item" />
					</div>
				</div>
				<div className="more_itemBox_lineTwo">
					<div className="more_itemBox_lineTwo_itemOne">
						<img src={posTwo} alt="item" />
					</div>
					<div className="more_itemBox_lineTwo_itemTwo">
						<img src={posSix} alt="item" />
					</div>
					<div className="more_itemBox_lineTwo_itemThree">
						<img src={posSeven} alt="item" />
					</div>
					<div className="more_itemBox_lineTwo_itemFour">
						<img src={posSix} alt="item" />
					</div>
				</div>
				<div className="more_itemBox_lineThree">
					<div className="more_itemBox_lineThree_itemOne">
						<img src={posThree} alt="item" />
					</div>
					<div className="more_itemBox_lineThree_itemTwo">
						<img src={posSeven} alt="item" />
					</div>
					<div className="more_itemBox_lineThree_itemThree">
						<img src={posSix} alt="item" />
					</div>
					<div className="more_itemBox_lineThree_itemFour">
						<img src={posSeven} alt="item" />
					</div>
				</div>
				<div className="more_itemBox_lineFour">
					<div className="more_itemBox_lineFour_itemOne">
						<img src={posFour} alt="item" />
					</div>
					<div className="more_itemBox_lineFour_itemTwo">
						<img src={posEight} alt="item" />
					</div>
					<div className="more_itemBox_lineFour_itemThree">
						<img src={posFive} alt="item" />
					</div>
					<div className="more_itemBox_lineFour_itemFour">
						<img src={posEight} alt="item" />
					</div>
				</div>
			</div>
			<div className="more_scrollbox" ref={scrollbarRef}>
				<div
					className="more_scrollbox_button"
					ref={buttonRef}
					style={{ top: buttonPosition }}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
				>
					<img src={activeButton} alt="button" />
				</div>
				<div className="more_scrollbox_line"></div>
			</div>
		</div>
	)
};

export default More;