'use client'

import { HoverEffect } from './card-hover-effect'

const HoverCards = () => {
	return <HoverEffect items={projects} />
}

export default HoverCards

export const projects = [
	{
		title: 'Более 35',
		description: 'Профессиональных клубов уже пользуются нашим сервисом'
	},
	{
		title: 'Более 500',
		description:
			'Игроков по всему миру демонстрируют свои навыки, доказывая, что они достойны внимания и уважения'
	},
	{
		title: 'Постоянная и активная',
		description: 'Служба поддержки'
	}
]
