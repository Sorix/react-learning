import Toggleable from "./Toggleable";

const LoginForm = ({handleLogin}) => {
	const handleSubmit = (e) => {
		e.preventDefault();

		const login = e.target.login.value;
		handleLogin(login);
	};

	return (
		<Toggleable buttonLabel="Login">
			<form onSubmit={handleSubmit}>
				<input
					type="text" 
					name="login" 
					placeholder="login"
				/>
				<input
					type="password"
					name="password"
					placeholder="password"
				/>
				<button type="submit">Login</button>
			</form>
		</Toggleable>
	)
};

export default LoginForm;