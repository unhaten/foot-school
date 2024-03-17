import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export const HoverEffect = ({
	items,
	className
}: {
	items: {
		title: string
		description: string
		link: string
	}[]
	className?: string
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10',
				className
			)}
		>
			{items.map((item, idx) => (
				<div
					key={item?.link}
					className='relative group  block p-2 h-full w-full'
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className='absolute inset-0 h-full w-full bg-green-300 block  rounded-3xl'
								layoutId='hoverBackground'
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 }
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 }
								}}
							/>
						)}
					</AnimatePresence>
					<Card>
						<CardTitle>{item.title}</CardTitle>
						<CardDescription>{item.description}</CardDescription>
					</Card>
				</div>
			))}
		</div>
	)
}

export const Card = ({
	className,
	children
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<div
			className={cn(
				'rounded-2xl h-full w-full p-4 overflow-hidden bg-background dark:bg-background border border-slate-300 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
				className
			)}
		>
			<div className='relative z-50'>
				<div className='p-2'>{children}</div>
			</div>
		</div>
	)
}
export const CardTitle = ({
	className,
	children
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<h4
			className={cn(
				'text-primary font-bold tracking-wide text-xl mt-4',
				className
			)}
		>
			{children}
		</h4>
	)
}
export const CardDescription = ({
	className,
	children
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<p
			className={cn(
				'mt-2 tracking-wide text-foreground dark:text-foreground leading-relaxed text-sm',
				className
			)}
		>
			{children}
		</p>
	)
}
