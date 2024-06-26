import SwipeableCard from './swipeable-card'

type CardContentType = {
	id: number
	name: string
	designation: string
	content: React.ReactNode
}

const CardStack = ({ items }: { items: CardContentType[] }) => {
	return (
		<div className='flex flex-col justify-center'>
			{items.map((card, index) => (
				<SwipeableCard key={card.id} card={card} onSwipe={() => {}} />
			))}
		</div>
	)
}

export default CardStack
