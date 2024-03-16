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
	}[]
	className?: string
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<div className={cn('grid grid-cols-1 lg:grid-cols-3 py-10', className)}>
			{items.map((item, idx) => (
				<div
					key={idx}
					className='relative group block p-2 h-full w-full'
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className='absolute inset-0 h-full w-full bg-green-200 bg-opacity-75 backdrop-blur-md drop-shadow-md dark:bg-slate-800/[0.8] block rounded-3xl'
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
				'rounded-2xl h-full w-full p-4 overflow-hidden relative z-20 border',
				className
			)}
		>
			<div className='relative z-50'>
				<div className='p-4'>{children}</div>
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
		<h3
			className={cn(
				'text-primary text-2xl md:text-lg font-bold tracking-wide mt-4',
				className
			)}
		>
			{children}
		</h3>
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
				'mt-4 text-foreground tracking-wide leading-relaxed text-lg md:text-sm',
				className
			)}
		>
			{children}
		</p>
	)
}
