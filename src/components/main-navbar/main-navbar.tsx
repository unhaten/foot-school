import { Form } from 'react-hook-form'
import NavLinks from '../nav/nav-links'
import Image from 'next/image'

const MainNavBar = () => {
	return (
		<nav className='p-4 bg-zinc-900'>
			<div className='grid grid-cols-3 items-center justify-between m-auto text-background px-4 md:px-8 lg:px-16'>
				<ul className='flex items-center gap-3'>
					<NavLinks />
				</ul>
				<div className='mx-auto'>
					<Image src='/logo.png' width={50} height={50} alt='logo' />
				</div>
				<div className='text-right'>logout</div>
			</div>
		</nav>
	)
}

export default MainNavBar
