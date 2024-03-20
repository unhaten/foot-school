import React, { useState } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { PanInfo } from 'framer-motion'

type CardType = {
	id: number
	name: string
	designation: string
	content: React.ReactNode
}

const Card = ({
	card,
	onSwipe,
	style
}: {
	card: CardType
	onSwipe: () => void
	style?: React.CSSProperties // Добавляем тип для пропса style
}) => {
	const controls = useAnimation()

	const handleDrag = (
		_: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo
	) => {
		const rotate = info.offset.x / 20
		controls.set({ rotate })
	}

	const handleDragEnd = async (
		_: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo
	) => {
		if (Math.abs(info.offset.x) > 200) {
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
				transition: { duration: 0.2 }
			})
		}
	}

	return (
		<motion.div
			className='bg-white rounded-3xl p-4 shadow-xl border border-neutral-200 flex flex-col justify-between text-foreground dark:text-background'
			drag='x'
			dragConstraints={{ left: 0, right: 0 }}
			onDrag={handleDrag}
			onDragEnd={handleDragEnd}
			dragElastic={0.5}
			animate={controls}
			style={{ ...style }} // Применяем стили, переданные из родительского компонента
		>
			{' '}
			<div>
				{card.content} - {card.id}
			</div>
			<div>
				<p>{card.name}</p>
				<p>{card.designation}</p>
			</div>
		</motion.div>
	)
}

export const CardStack = ({ items }: { items: CardType[] }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleSwipe = (swipedIndex: number) => {
		setActiveIndex(swipedIndex + 1) // Увеличиваем индекс активной карточки
	}

	return (
		<div className='relative w-[300px] sm:w-[400px] h-96 flex items-center justify-center'>
			<AnimatePresence initial={false}>
				{items
					.slice(activeIndex, activeIndex + 3)
					.map((card, index) => (
						<Card
							key={card.id}
							card={card}
							onSwipe={() => handleSwipe(activeIndex)}
							style={{
								zIndex: items.length - index, // Управляем z-index, чтобы верхние карточки были поверх нижних
								position: 'absolute',
								width: '100%', // Адаптируйте ширину и высоту под размер вашего контейнера, если нужно
								height: '100%'
							}}
						/>
					))}
			</AnimatePresence>
		</div>
	)
}
