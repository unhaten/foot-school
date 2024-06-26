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

	const [color, setColor] = useState('gray') // initial color

	const isMounted = useRef(false)

	useEffect(() => {
		isMounted.current = true
		return () => {
			isMounted.current = false
		}
	}, [])

	const handlePositionBack = () => {
		controls.start({
			x: 0,
			transition: {
				duration: 0.3,
				ease: 'easeOut'
			}
		})
	}

	const handleDrag = (_, info: { offset: { x: number } }) => {
		if (!isMounted.current) return
		controls.set({ x: info.offset.x })
	}

	const handleDragEnd = (_, info: { offset: { x: number } }) => {
		if (!isMounted.current) return
		const swipeDistance = info.offset.x

		if (swipeDistance > 50) {
			// Like swipe
			setColor('green')
		} else if (swipeDistance < -50) {
			// Dislike swipe
			setColor('red')
		} else {
			handlePositionBack()
		}

		handlePositionBack()
	}

	return (
		<motion.div
			className='bg-white rounded-3xl p-4 shadow-xl border border-neutral-200 flex flex-col justify-between'
			drag='x'
			onDrag={handleDrag}
			onDragEnd={handleDragEnd}
			animate={controls}
			style={{
				marginBottom: 20,
				boxShadow: `0 4px 6px ${color}` // update box shadow color
			}}
		>
			<CardContent card={card} />
		</motion.div>
	)
}

export default SwipeableCard
