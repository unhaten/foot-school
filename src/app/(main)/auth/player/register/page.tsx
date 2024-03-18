import MainLoginForm from '@/components/main-form/main-login-form'
import AlreadyHaveAccount from '@/components/ui/form-stuff/already-have-account'

const PlayerRegisterPage = () => {
	return (
		<>
			<h2 className='text-center text-2xl font-medium mb-4'>
				Регистрация
			</h2>
			<MainLoginForm />
			<AlreadyHaveAccount text='Войти' href='/auth/player/login' />
		</>
	)
}

export default PlayerRegisterPage
