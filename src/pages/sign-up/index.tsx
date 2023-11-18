import SignUp from '../../components/common/auth/sign-up/SignUp';
import MainLayout from '../../components/common/main-layout/MainLayout';

const SignUpPage = () => {
	return (
		<MainLayout>
			<SignUp input={['email', 'password', 'username', 'firstName', 'lastName']} />
		</MainLayout>
	);
};

export default SignUpPage;

