import './registration.scss';
import '../../../../fonts/fonts.css';

const Registration:React.FC = () => {
	return (
		<div className="registration">
			<div className="registration_title">Enter your data</div>
			<div className="registration_form">
				<input className="registration_form_email" required placeholder="Enter your email" type="email" />
				<input className="registration_form_pass" required placeholder="Enter your password" type="password" />
				<button className="registration_form_btn" type="submit">Sign Up</button>
			</div>
		</div>
	);
};

export default Registration;