import MainRegisterForm from '@/components/ui/main-form/main-register-form'
import AlreadyHaveAccount from '@/components/ui/form-stuff/already-have-account'

const PlayerRegisterPage = () => {
	return (
		<>
			<h2 className='text-center text-2xl font-medium mb-4'>
				Регистрация
			</h2>
			<MainRegisterForm />
			<AlreadyHaveAccount
				askText='Уже есть аккаунт?'
				text='Войти'
				href='/auth/player/login'
			/>
		</>
	)
}

export default PlayerRegisterPage
