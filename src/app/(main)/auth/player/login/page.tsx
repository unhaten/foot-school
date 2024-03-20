import MainLoginForm from '@/components/ui/main-form/main-login-form'
import AlreadyHaveAccount from '@/components/ui/form-stuff/already-have-account'

const PlayerLoginPage = () => {
	return (
		<>
			<h2 className='text-center text-2xl font-medium mb-4'>
				Вход в аккаунт
			</h2>
			<MainLoginForm />
			<AlreadyHaveAccount
				text='Зарегистрироваться'
				href='/auth/player/register'
			/>
		</>
	)
}

export default PlayerLoginPage
