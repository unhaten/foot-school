import Image from 'next/image'
import * as React from 'react'

import NavLinks from './nav-links'
import { ModeToggle } from '../toggle-theme'
import { Separator } from '../ui/separator'

const NavBar = () => {
	return (
		<nav className='p-4 pt-3'>
			<div className='flex items-center justify-between sm:justify-center m-auto text-background'>
				<div className='flex items-center gap-2 w-9/12'>
					<div className='w-10 h-10 relative'>
						<Image src='/logo.png' alt='logo' fill />
					</div>
					<h2 className='text-2xl font-bold dark:text-foreground'>
						FootSchool
					</h2>
				</div>
				<div className='flex items-center gap-3 mt-1'>
					<ul className='sm:flex items-center gap-3 hidden'>
						<NavLinks />
					</ul>
					<Separator
						orientation='vertical'
						className='hidden sm:block h-8 bg-secondary'
					/>
					<ModeToggle />
				</div>
			</div>
		</nav>
	)
}

export default NavBar
