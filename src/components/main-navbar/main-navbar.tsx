import NavLinks from '../nav/nav-links'
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { ModeToggle } from '../toggle-theme'
import { Button } from '@/components/ui/button'
import { FaRegUserCircle } from 'react-icons/fa'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

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
								<Image
									src='/logo.png'
									width={45}
									height={45}
									alt='logo'
								/>
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
					{isLogged && (
						<DropdownMenu>
							<DropdownMenuTrigger className='focus-visible:'>
								<Button
									asChild
									size='icon'
									variant='secondary'
									className='rounded-full text-foreground p-2'
								>
									<FaRegUserCircle className='text-lg' />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>Профиль</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<Link href='/profile'>
									<DropdownMenuItem>
										Подробнее
									</DropdownMenuItem>
								</Link>
								<DropdownMenuItem className='text-red-600'>
									Выйти
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					)}
				</div>
			</div>
		</nav>
	)
}

export default MainNavBar
