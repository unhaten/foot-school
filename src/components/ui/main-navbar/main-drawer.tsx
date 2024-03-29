'use client'

import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'
import { useMediaQuery } from '@/hooks/use-media-query'
import { RxHamburgerMenu } from 'react-icons/rx'

const MainDrawer = () => {
	const isDesktop = useMediaQuery('(min-width:768px)')

	return isDesktop ? (
		<></>
	) : (
		<Drawer direction='right'>
			<DrawerTrigger>
				<Button
					size='icon'
					className='rounded-full bg-transparent hover:bg-white/10'
					asChild
				>
					<RxHamburgerMenu className='text-lg p-1 text-background dark:text-foreground' />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Are you absolutely sure?</DrawerTitle>
					<DrawerDescription>
						This action cannot be undone.
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<Button>Submit</Button>
					<DrawerClose>
						<Button variant='outline'>Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

export default MainDrawer
