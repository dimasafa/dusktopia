import './login.scss';
import '../../../../fonts/fonts.css';

const Login:React.FC = () => {
	return (
		<div className="login">
			<div className="login_title">Enter your login and password</div>
			<div className="login_form">
				<input className="login_form_email" required placeholder="Your email" type="email" />
				<input className="login_form_pass" required placeholder="Your password" type="password" />
				<button className="login_form_btn" type="submit">Login</button>
			</div>
		</div>
	);
};

export default Login;