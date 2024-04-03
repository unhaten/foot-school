import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { FaRegUserCircle } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const ProfileMenu = () => {
	return (
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
					<DropdownMenuItem>Подробнее</DropdownMenuItem>
				</Link>
				<DropdownMenuItem className='text-red-600'>
					Выйти
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ProfileMenu
