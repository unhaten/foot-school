'use client'
import Image from 'next/image'
import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

const components: { title: string; href: string; description: string }[] = [
	{
		title: 'Alert Dialog',
		href: '/docs/primitives/alert-dialog',
		description:
			'A modal dialog that interrupts the user with important content and expects a response.'
	},
	{
		title: 'Hover Card',
		href: '/docs/primitives/hover-card',
		description:
			'For sighted users to preview content available behind a link.'
	},
	{
		title: 'Progress',
		href: '/docs/primitives/progress',
		description:
			'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
	},
	{
		title: 'Scroll-area',
		href: '/docs/primitives/scroll-area',
		description: 'Visually or semantically separates content.'
	},
	{
		title: 'Tabs',
		href: '/docs/primitives/tabs',
		description:
			'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
	},
	{
		title: 'Tooltip',
		href: '/docs/primitives/tooltip',
		description:
			'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
	}
]

const Nav = () => {
	return (
		<nav className='flex items-center justify-between p-4 max-w-screen-2xl m-auto '>
			<div className='flex items-center gap-2'>
				<div className='w-10 h-10 relative'>
					<Image src='/logo.png' alt='logo' fill />
				</div>
				<h2 className='text-2xl font-bold'>FootSchool</h2>
			</div>
			<div>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Меню</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='grid gap-3 p-4 lg:w-[300px]'>
									<ListItem href='/docs' title='Lorem'>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Corrupti officiis qui
										aut rem dolores, nostrum ex porro
										numquam laudantium ratione voluptates.
										Magnam nemo deleniti, sequi error
										debitis ut at iure?
									</ListItem>
									<ListItem
										href='/docs/installation'
										title='Lorem'
									>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Fugiat assumenda
										blanditiis cupiditate repudiandae ipsum,
										voluptatum earum eveniet, autem maiores
										recusandae voluptatibus. Repudiandae
										praesentium provident voluptate tempora
										nisi voluptatum, magni ipsum!
									</ListItem>
									<ListItem
										href='/docs/primitives/typography'
										title='Lorem'
									>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Suscipit dolor at cum
										cupiditate? Tempora voluptas ullam illo
										porro deserunt reprehenderit fugit
										molestiae asperiores est? Blanditiis
										quaerat totam dolores officiis adipisci.
									</ListItem>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href='/docs' legacyBehavior passHref>
								<NavigationMenuLink
									className={navigationMenuTriggerStyle()}
								>
									Документация
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</nav>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>
						{title}
					</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'

export default Nav
