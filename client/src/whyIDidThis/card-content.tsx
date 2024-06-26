import React from 'react'

type CardContentType = {
	id: number
	name: string
	designation: string
	content: React.ReactNode
}

const CardContent = ({ card }: { card: CardContentType }) => {
	return (
		<div>
			<div>{card.content}</div>
			<div>
				<p>{card.name}</p>
				<p>{card.designation}</p>
				<p>{card.id}</p>
			</div>
		</div>
	)
}

export default CardContent
