import './faq.scss';
import '../../../fonts/fonts.css';

import { one, two, three, four, five, six, seven } from './FaqImagePath';

const Faq:React.FC = () => {
	return(
		<div className="faq">
			<div className="faq_button">
				<span className="faq_button_body">
					<div className="faq_button_body_lineOne">
						<div className="faq_button_body_lineOne_first">
							<div className="faq_button_body_lineOne_first_header">How many?</div>
							<div className="faq_button_body_lineOne_first_text">Our genesis land NFT collection will comprise</div>
							<div className="faq_button_body_lineOne_first_text2">5555 NFTs.</div>
						</div>
						<div className="faq_button_body_lineOne_second">
							<div className="faq_button_body_lineOne_second_left">
								<img src={one} alt="bild" />
							</div>
							<div className="faq_button_body_lineOne_second_center">
								<img src={two} alt="bild" />
								<img src={two} alt="bild" />
								<img src={two} alt="bild" />
							</div>
							<div className="faq_button_body_lineOne_second_right">
								<img src={three} alt="bild" />
								<img src={four} alt="bild" />
								<img src={three} alt="bild" />
							</div>
						</div>
						<div className="faq_button_body_lineOne_third">
							<div className="faq_button_body_lineOne_third_header">How DO I Get Dusklist?</div>
							<div className="faq_button_body_lineOne_third_text">Get engaged and active with the community. The earlier you are and more sGet engaged and active with the community. The earlier you are and more support you bring, the higher your chances.upport you bring, the higher your chances.</div>
						</div>
						<div className="faq_button_body_lineOne_fourth">
							<div className="faq_button_body_lineOne_fourth_header">HOW MUCH?</div>
							<div className="faq_button_body_lineOne_fourth_text">Each genesis land NFT will be priced at</div>
							<div className="faq_button_body_lineOne_fourth_text2">0.12eth + gas fees.</div>
						</div>
					</div>
					<div className="faq_button_body_lineTwo">
						<div className="faq_button_body_lineTwo_first">
							<div className="faq_button_body_lineTwo_first_header">WHEN mint?</div>
							<div className="faq_button_body_lineTwo_first_text">We are targeting a release <span> in mid May.</span></div>
						</div>
						<div className="faq_button_body_lineTwo_second">
							<div className="faq_button_body_lineTwo_second_header">Maximum mintable?</div>
							<div className="faq_button_body_lineTwo_second_text1">For Dusklist: <span> 1 per wallet.</span></div>
							<div className="faq_button_body_lineTwo_second_text2">For public sale: <span> 2 per transaction.</span></div>
						</div>
						<div className="faq_button_body_lineTwo_third">
							<div className="faq_button_body_lineTwo_third_header">When is staking?</div>
							<div className="faq_button_body_lineTwo_third_text">Staking with the EON Corporation will go live in the month after mint.</div>
						</div>
						<div className="faq_button_body_lineTwo_fourth">
							<div className="faq_button_body_lineTwo_fourth_left">
								<img src={five} alt="bild" />
							</div>
							<div className="faq_button_body_lineTwo_fourth_right">
								<img src={six} alt="bild" />
								<img src={seven} alt="bild" />
								<img className="faq_button_body_lineTwo_fourth_right_one" src={six} alt="bild" />
								<img className="faq_button_body_lineTwo_fourth_right_two" src={six} alt="bild" />
							</div>
						</div>
					</div>
					<div className="faq_button_body_lineThree">
						<div className="faq_button_body_lineThree_first">
							<div className="faq_button_body_lineThree_first_header">Which blockchain?</div>
							<div className="faq_button_body_lineThree_first_text">Dusktopia will be built on the <span> Ethereum blockchain.</span></div>
						</div>
						<div className="faq_button_body_lineThree_second">
							<div className="faq_button_body_lineThree_second_header">What is <br></br>
							the utility?</div>
							<div className="faq_button_body_lineThree_second_text">Owning a genesis land NFT sets you up for the rest of our ecosystem. The land collection is the foundation of Dusktopia - holders will be rewarded in the short term through the staking mechanism. In the long term, they will be able to build on that genesis land with various properties and avatars we will be releasing.</div>
						</div>
						<div className="faq_button_body_lineThree_third">
							<div className="faq_button_body_lineThree_third_header">Future mints?</div>
							<div className="faq_button_body_lineThree_third_text">Immediately after mint, we are planning for a limited secondary land release for holders, claimable with $DAWN. Subsequently, we will release a Properties collection, as well as PFP avatars which will serve as your in-game role.</div>
						</div>
					</div>
				</span>
				<span className="faq_button_tr1"></span>
				<span className="faq_button_tr2"></span>
				</div>
		</div>
	)
};

export default Faq;