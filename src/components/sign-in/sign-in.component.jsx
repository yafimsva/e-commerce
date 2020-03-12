import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setEmail('');
			setPassword('');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="sign-in">
			<h2 className="title">I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					label="email"
					handleChange={e => setEmail(e.target.value)}
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					label="password"
					handleChange={e => setPassword(e.target.value)}
					required
				/>

				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
