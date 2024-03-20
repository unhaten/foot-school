import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const CenteredLogo = () => {
	return (
		<div className='flex items-center justify-center gap-10'>
			<Link href='/search/clubs' className='hidden sm:block'>
				<Button
					variant='link'
					className='text-background dark:text-foreground p-0'
				>
					Клубы
				</Button>
			</Link>
			<Link
				href={'/browse'}
				className='block px-8 pb-2 pt-3 bg-white rounded-b-full hover:bg-primary transition-all'
			>
				<Image src='/logo.png' width={45} height={45} alt='logo' />
			</Link>
			<Link href='/' className='hidden sm:block'>
				<Button
					variant='link'
					className='text-background dark:text-foreground p-0'
				>
					Игроки
				</Button>
			</Link>
		</div>
	)
}

export default CenteredLogo
