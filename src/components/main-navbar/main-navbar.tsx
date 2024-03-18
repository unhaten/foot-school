import { Form } from 'react-hook-form'
import NavLinks from '../nav/nav-links'
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { ModeToggle } from '../toggle-theme'
import { Button } from '@/components/ui/button'

const MainNavBar = ({ isLogged = false }) => {
	return (
		<nav className='pb-1'>
			<div className='grid grid-cols-3 items-center justify-between m-auto text-background px-4 md:px-8 lg:px-16 xl:px-24'>
				<div className='flex items-center gap-3 mt-1'>
					<ModeToggle />
					<Separator
						orientation='vertical'
						className='hidden lg:block h-8 bg-secondary '
					/>
					<ul className='lg:flex items-center gap-3 hidden'>
						<NavLinks />
					</ul>
				</div>
				<div className='mx-auto'>
					<Link
						href='/'
						className='block px-8 pb-2 pt-3 bg-white rounded-b-full hover:bg-primary transition-all'
					>
						<Image
							src='/logo.png'
							width={45}
							height={45}
							alt='logo'
						/>
					</Link>
				</div>
				<div className='text-right'>
					{isLogged && (
						<Button variant={'secondary'}>
							<span>Выйти</span>
						</Button>
					)}
				</div>
			</div>
		</nav>
	)
}

export default MainNavBar
