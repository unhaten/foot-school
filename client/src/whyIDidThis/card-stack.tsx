import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

type CardType = {
	id: number
	name: string
	designation: string
	content: React.ReactNode
}

const Card = ({ card, onSwipe }: { card: CardType; onSwipe: () => void }) => {
	const controls = useAnimation()
	const [swipeDirection, setSwipeDirection] = useState<
		null | 'left' | 'right'
	>(null)
	const [color, setColor] = useState('gray') // initial color

	const isMounted = useRef(false)

	useEffect(() => {
		isMounted.current = true
		return () => {
			isMounted.current = false
		}
	}, [])

	const handleDrag = (_, info: { offset: { x: number } }) => {
		if (!isMounted.current) return
		controls.set({ x: info.offset.x })
	}

	const handleDragEnd = (_, info: { offset: { x: number } }) => {
		if (!isMounted.current) return
		controls.set({ x: 0 })
		const direction = info.offset.x > 0 ? 'right' : 'left'
		setSwipeDirection(direction)
		setColor(direction === 'right' ? 'green' : 'red') // update color based on swipe direction
	}

	return (
		<motion.div
			className='bg-white rounded-3xl p-4 shadow-xl border border-neutral-200 flex flex-col justify-between'
			drag='x'
			onDrag={handleDrag}
			onDragEnd={handleDragEnd}
			animate={controls}
			style={{
				marginBottom: 20, // add space between cards
				boxShadow: `0 4px 6px ${color}` // update box shadow color
			}}
		>
			<div>{card.content}</div>
			<div>
				<p>{card.name}</p>
				<p>{card.designation}</p>
				<p>{card.id}</p>
			</div>
		</motion.div>
	)
}

const CardStack = ({ items }: { items: CardType[] }) => {
	return (
		<div className='flex flex-col justify-center'>
			{items.map((card, index) => (
				<Card key={card.id} card={card} onSwipe={() => {}} />
			))}
		</div>
	)
}

export default CardStack
