'use client'
import { Button } from '@/components/ui/moving-border'
import CardStack from '@/whyIDidThis/card-stack'
import { cardsData } from './cards-data'

export function Cards() {
	return (
		<div className='w-full mx-auto'>
			<div className='flex flex-col items-center justify-center'>
				<CardStack items={cardsData} />
				<div className='mt-8 flex items-center rounded-full gap-6'>
					<Button>like</Button>
					<Button>dislike</Button>
					<Button>report</Button>
				</div>
			</div>
		</div>
	)
}
