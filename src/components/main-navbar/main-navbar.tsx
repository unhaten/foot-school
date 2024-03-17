import { Form } from 'react-hook-form'
import NavLinks from '../nav/nav-links'
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import { ModeToggle } from '../toggle-theme'

const MainNavBar = () => {
	return (
		<nav className='p-4'>
			<div className='grid grid-cols-2 sm:grid-cols-3 items-center justify-between m-auto text-background px-4 md:px-8 lg:px-16 xl:px-24'>
				<div className='flex items-center gap-3'>
					<ModeToggle />
					<Separator
						orientation='vertical'
						className='hidden lg:block h-8 bg-primary'
					/>
					<ul className='lg:flex items-center gap-3 hidden'>
						<NavLinks />
					</ul>
				</div>
				<div className='mx-auto'>
					<Link href='/'>
						<Image
							src='/logo.png'
							width={45}
							height={45}
							alt='logo'
						/>
					</Link>
				</div>
				<div className='text-right'>logout</div>
			</div>
		</nav>
	)
}

export default MainNavBar
