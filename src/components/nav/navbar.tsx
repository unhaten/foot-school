import Image from 'next/image'
import * as React from 'react'

import NavLinks from './nav-links'
import { ModeToggle } from '../toggle-theme'
import { Separator } from '../ui/separator'

const NavBar = () => {
	return (
		<nav className='p-4 bg-zinc-900'>
			<div className='flex items-center justify-center m-auto text-background'>
				<div className='flex items-center gap-2 w-7/12'>
					<div className='w-10 h-10 relative'>
						<Image src='/logo.png' alt='logo' fill />
					</div>
					<h2 className='text-2xl font-bold'>FootSchool</h2>
				</div>
				<div className='flex items-center gap-3'>
					<ul className='flex items-center gap-3'>
						<NavLinks />
					</ul>
					<Separator orientation='vertical' />
					<ModeToggle />
				</div>
			</div>
		</nav>
	)
}

export default NavBar
