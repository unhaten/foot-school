import NavLinks from '../nav/nav-links'
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { ModeToggle } from '../../toggle-theme'
import { Button } from '@/components/ui/button'
import ProfileMenu from './profile-menu'
import CenteredLogo from './centered-logo'
import MainDrawer from './main-drawer'

const MainNavBar = ({ isLogged = true }) => {
	return (
		<nav className='pb-1'>
			<div className='flex items-center justify-between m-auto text-background px-4 md:px-8 lg:px-16 xl:px-24'>
				<div className='flex basis-1/4 items-center gap-3 mt-1'>
					<ModeToggle />
					<Separator
						orientation='vertical'
						className='hidden lg:block h-8 bg-secondary '
					/>
					<ul className='lg:flex items-center gap-3 hidden'>
						<NavLinks />
					</ul>
				</div>
				<div className='basis-1/2'>
					{isLogged ? (
						<CenteredLogo />
					) : (
						<div className='flex items-center justify-center gap-10'>
							<Link
								href={'/search/players'}
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
					)}
				</div>
				<div className='text-right basis-1/4'>
					{isLogged && <ProfileMenu />}
					<MainDrawer />
				</div>
			</div>
		</nav>
	)
}

export default MainNavBar
