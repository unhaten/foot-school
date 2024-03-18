import { Button } from '@/components/ui/button'

const CardButtons = () => {
	return (
		<ul className='flex flex-col justify-end gap-3 items-center w-14'>
			<li className='flex flex-col items-center gap-1'>
				<Button
					className='rounded-full'
					size={'icon'}
					variant='secondary'
				>
					s
				</Button>
				<span>2345</span>
			</li>
			<li className='flex flex-col items-center gap-1'>
				<Button
					className='rounded-full'
					size={'icon'}
					variant='secondary'
				>
					c
				</Button>
				<span>23</span>
			</li>
			<li className='flex flex-col items-center gap-1'>
				<Button
					className='rounded-full'
					size={'icon'}
					variant='secondary'
				>
					k
				</Button>
				<span>3</span>
			</li>
			<li className='flex flex-col items-center gap-1'>
				<Button
					className='rounded-full'
					size={'icon'}
					variant='secondary'
				>
					q
				</Button>
				<span>89</span>
			</li>
		</ul>
	)
}

export default CardButtons
