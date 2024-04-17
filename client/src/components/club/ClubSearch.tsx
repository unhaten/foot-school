import { Button } from '../ui/button'
import { Input } from '../ui/form-stuff/input'

const ClubSearch = () => {
	return (
		<>
			<div className='mb-12'>
				<div className='flex items-center gap-4'>
					<Button>Назад</Button>
					<Input
						className='w-80'
						placeholder='Поиск клуба'
						type='search'
					/>
				</div>
			</div>
		</>
	)
}

export default ClubSearch
