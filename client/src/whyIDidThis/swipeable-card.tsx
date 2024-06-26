import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import CardContent from './card-content'
type CardContentType = {
	id: number
	name: string
	designation: string
	content: React.ReactNode
}

type SwipeableCardType = {
	card: CardContentType
	onSwipe: () => void
}

const SwipeableCard = ({ card, onSwipe }: SwipeableCardType) => {
	const controls = useAnimation()
	const [swipeDirection, setSwipeDirection] = useState<
		null | 'left' | 'right'
	>(null)
	const [color, setColor] = useState('gray') // initial color
	const [swipeLog, setSwipeLog] = useState([]) // new state to store swipe logs

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
		const direction = info.offset.x > 0 ? 'right' : 'left'
		setSwipeDirection(direction)
		setColor(direction === 'right' ? 'green' : 'red') // update color based on swipe direction

		// create a new swipe log entry
		const swipeLogEntry = {
			id: card.id,
			direction
		}
		setSwipeLog(prevLogs => [...prevLogs, swipeLogEntry])

		// animate the card back to its original position
		controls.start({
			x: 0,
			transition: {
				duration: 0.3, // adjust the duration to your liking
				ease: 'easeOut'
			}
		})
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
			<CardContent card={card} />
			{swipeLog.map((log, index) => (
				<p key={index}>
					Card {log.id} swiped {log.direction}
				</p>
			))}
		</motion.div>
	)
}

export default SwipeableCard
