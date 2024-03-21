import React, { useState } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { PanInfo } from 'framer-motion'

type CardType = {
	id: number
	name: string
	designation: string
	content: React.ReactNode
}

// _: MouseEvent | TouchEvent | PointerEvent,
// 		info: PanInfo

const Card = ({
	card,
	onSwipe,
	style
}: {
	card: CardType
	onSwipe: () => void
	style?: React.CSSProperties
}) => {
	const controls = useAnimation()
	const [swipeDirection, setSwipeDirection] = useState<
		null | 'left' | 'right'
	>(null)

	const handleDrag = (
		_: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo
	) => {
		const direction = info.offset.x > 0 ? 'right' : 'left'
		setSwipeDirection(direction)
		const rotate = info.offset.x / 30
		controls.set({ rotate })
	}

	const handleDragEnd = async (
		_: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo
	) => {
		if (Math.abs(info.offset.x) > 150) {
			await controls.start({
				x: info.offset.x > 0 ? 500 : -500,
				opacity: 0,
				transition: { duration: 0.2 }
			})
			onSwipe()
		} else {
			await controls.start({
				x: 0,
				rotate: 0,
				transition: { duration: 0.3 }
			})
			setSwipeDirection(null) // Сброс направления свайпа после завершения анимации
		}
	}

	// Динамически определяем цвет тени на основе направления свайпа
	const boxShadowColor =
		swipeDirection === 'right'
			? 'red'
			: swipeDirection === 'left'
			? 'green'
			: 'gray'

	return (
		<motion.div
			className='bg-white rounded-3xl p-4 shadow-xl border border-neutral-200 flex flex-col justify-between'
			drag='x'
			dragConstraints={{ left: 0, right: 0 }}
			onDrag={handleDrag}
			onDragEnd={handleDragEnd}
			dragElastic={0.5}
			animate={controls}
			whileHover={{ scale: 1.05 }}
			style={{
				...style,
				boxShadow: `0 4px 6px ${boxShadowColor}` // Применяем динамический box-shadow
			}}
		>
			<div>{card.content}</div>
			<div>
				<p>{card.name}</p>
				<p>{card.designation}</p>
			</div>
		</motion.div>
	)
}

export const CardStack = ({ items }: { items: CardType[] }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleSwipe = () => {
		setActiveIndex(prev => prev + 1) // Перемещаем стек вверх
	}

	return (
		<div className='relative w-[300px] sm:w-[400px] h-96 flex items-center justify-center'>
			<AnimatePresence initial={false}>
				{items
					.slice(activeIndex, activeIndex + 2)
					.map((card, index) => (
						<Card
							key={card.id}
							card={card}
							onSwipe={handleSwipe}
							style={{
								zIndex: items.length - index, // Управляем z-index
								position: 'absolute',
								cursor: 'pointer',
								width: '100%',
								height: '100%',
								boxShadow: 'transparent 0px 4px 6px',
								transform: `translateY(${
									index * -10
								}px) scale(${1 - index * 0.05})`, // Сдвиг и уменьшение масштаба для следующих карточек
								transition:
									'transform 0.15s, opacity 0.15s, box-shadow 0.35s', // Плавная анимация для сдвига и масштаба
								opacity: index === 0 ? 1 : 0.7 // Пониженная прозрачность для следующих карточек
							}}
						/>
					))}
			</AnimatePresence>
		</div>
	)
}
