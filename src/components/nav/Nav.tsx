import Image from 'next/image'
import * as React from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SlSocialVkontakte } from 'react-icons/sl'
import { IoLogoInstagram } from 'react-icons/io'
import { LiaTelegram } from 'react-icons/lia'
import { AiOutlineYoutube } from 'react-icons/ai'

import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import NavLinks from './nav-links'

const Nav = () => {
	return (
		<nav className='p-4 bg-zinc-900'>
			<div className='flex items-center justify-center m-auto text-background'>
				<div className='flex items-center gap-2 w-7/12'>
					<div className='w-10 h-10 relative'>
						<Image src='/logo.png' alt='logo' fill />
					</div>
					<h2 className='text-2xl font-bold'>FootSchool</h2>
				</div>
				<ul className='flex items-center gap-3'>
					<NavLinks />
				</ul>
			</div>
		</nav>
	)
}

export default Nav
