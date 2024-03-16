import { SlSocialVkontakte } from 'react-icons/sl'
import { IoLogoInstagram } from 'react-icons/io'
import { LiaTelegram } from 'react-icons/lia'
import { AiOutlineYoutube } from 'react-icons/ai'
import { Button } from '../ui/button'
import Link from 'next/link'

const NavLinks = () => {
	const links = [
		{
			href: '#',
			icon: <SlSocialVkontakte className='text-xl text-foreground' />
		},
		{
			href: '#',
			icon: <IoLogoInstagram className='text-xl text-foreground' />
		},
		{
			href: '#',
			icon: <LiaTelegram className='text-xl text-foreground' />
		},
		{
			href: '#',
			icon: <AiOutlineYoutube className='text-xl text-foreground' />
		}
	]

	return links.map((link, index) => (
		<li key={index} className=''>
			<Button className='rounded-full' size='icon' variant='secondary'>
				<Link href={link.href}>{link.icon}</Link>
			</Button>
		</li>
	))
}

export default NavLinks
