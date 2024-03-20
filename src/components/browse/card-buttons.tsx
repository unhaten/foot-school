import { Button } from '@/components/ui/button'
import { ImHeart } from 'react-icons/im'
import { FaCommentAlt } from 'react-icons/fa'
import { PiBookmarkSimpleFill } from 'react-icons/pi'
import { FaShare } from 'react-icons/fa6'

const CardButtons = () => {
	return (
		<div className='grid grid-cols-3 items-center w-full'>
			<div className='flex flex-col items-center gap-1'>
				<Button
					className='rounded-full w-12 h-12'
					size={'icon'}
					variant='outline'
					// className='bg-white w-5 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800'
				>
					<ImHeart className='text-2xl' />
				</Button>
				<span>2345</span>
			</div>
			<div className='flex flex-col items-center gap-1'>
				<Button
					className='rounded-full w-12 h-12'
					size={'icon'}
					variant='outline'
				>
					<PiBookmarkSimpleFill className='text-2xl' />
				</Button>
				<span>23</span>
			</div>
			<div className='flex flex-col items-center gap-1'>
				<Button
					className='rounded-full w-12 h-12'
					size={'icon'}
					variant='outline'
				>
					<FaShare className='text-2xl' />
				</Button>
				<span>3</span>
			</div>
			{/* <div className='flex flex-col items-center gap-1'>
				<Button
					className='rounded-full'
					size={'icon'}
					variant='secondary'
				>
					q
				</Button>
				<span>89</span>
			</div> */}
		</div>
	)
}

export default CardButtons
