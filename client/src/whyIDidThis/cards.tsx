'use client'
import { Button } from '@/components/ui/moving-border'
import { cn } from '@/lib/utils'
import CardStack from '@/whyIDidThis/card-stack'

export function Cards() {
	// В данном случае, мы управляем состоянием видимых карточек внутри CardStack
	// Поэтому, нет необходимости в дополнительном состоянии для управления видимостью карточек

	return (
		<div className='w-full mx-auto'>
			<div className='flex flex-col items-center justify-center'>
				<CardStack items={CARDS} />
				<div className='mt-8 flex items-center rounded-full gap-6'>
					<Button>like</Button>
					<Button>dislike</Button>
					<Button>report</Button>
				</div>
			</div>
		</div>
	)
}

// Если Highlight - это ваш компонент для выделения текста, убедитесь, что он остается неизменным
export const Highlight = ({
	children,
	className
}: {
	children: React.ReactNode
	className?: string
}) => {
	return (
		<span
			className={cn(
				'font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5',
				className
			)}
		>
			{children}
		</span>
	)
}

const CARDS = [
	{
		id: 0,
		name: 'Manu Arora',
		designation: 'Senior Software Engineer',
		content: (
			<p>
				These cards are amazing,{' '}
				<Highlight>I want to use them</Highlight> in my project. Framer
				motion is a godsend ngl tbh fam 🙏
			</p>
		)
	},
	{
		id: 1,
		name: 'Elon Musk',
		designation: 'Senior Shitposter',
		content: (
			<p>
				I dont like this Twitter thing,{' '}
				<Highlight>deleting it right away</Highlight> because yolo.
				Instead, I would like to call it <Highlight>X.com</Highlight> so
				that it can easily be confused with adult sites.
			</p>
		)
	},
	{
		id: 2,
		name: 'Tyler Durden',
		designation: 'Manager Project Mayhem',
		content: (
			<p>
				The first rule of
				<Highlight>Fight Club</Highlight> is that you do not talk about
				fight club. The second rule of
				<Highlight>Fight club</Highlight> is that you DO NOT TALK about
				fight club.
			</p>
		)
	},
	{
		id: 3,
		name: 'Tyler Durden',
		designation: 'Manager Project Mayhem',
		content: (
			<p>
				The first rule of
				<Highlight>Fight Club</Highlight> is that you do not talk about
				fight club. The second rule of
				<Highlight>Fight club</Highlight> is that you DO NOT TALK about
				fight club.
			</p>
		)
	},
	{
		id: 4,
		name: 'Tyler Durden',
		designation: 'Manager Project Mayhem',
		content: (
			<p>
				The first rule of
				<Highlight>Fight Club</Highlight> is that you do not talk about
				fight club. The second rule of
				<Highlight>Fight club</Highlight> is that you DO NOT TALK about
				fight club.
			</p>
		)
	},
	{
		id: 5,
		name: 'Tyler Durden',
		designation: 'Manager Project Mayhem',
		content: (
			<p>
				The first rule of
				<Highlight>Fight Club</Highlight> is that you do not talk about
				fight club. The second rule of
				<Highlight>Fight club</Highlight> is that you DO NOT TALK about
				fight club.
			</p>
		)
	},
	{
		id: 6,
		name: 'Tyler Durden',
		designation: 'Manager Project Mayhem',
		content: (
			<p>
				The first rule of
				<Highlight>Fight Club</Highlight> is that you do not talk about
				fight club. The second rule of
				<Highlight>Fight club</Highlight> is that you DO NOT TALK about
				fight club.
			</p>
		)
	},
	{
		id: 7,
		name: 'Tyler Durden',
		designation: 'Manager Project Mayhem',
		content: (
			<p>
				The first rule of
				<Highlight>Fight Club</Highlight> is that you do not talk about
				fight club. The second rule of
				<Highlight>Fight club</Highlight> is that you DO NOT TALK about
				fight club.
			</p>
		)
	},
	{
		id: 8,
		name: 'Manu Arora',
		designation: 'Senior Software Engineer',
		content: (
			<p>
				These cards are amazing,{' '}
				<Highlight>I want to use them</Highlight> in my project. Framer
				motion is a godsend ngl tbh fam 🙏
			</p>
		)
	},
	{
		id: 82,
		name: 'Manu Arora',
		designation: 'Senior Software Engineer',
		content: (
			<p>
				These cards are amazing,{' '}
				<Highlight>I want to use them</Highlight> in my project. Framer
				motion is a godsend ngl tbh fam 🙏
			</p>
		)
	},
	{
		id: 81,
		name: 'Manu Arora',
		designation: 'Senior Software Engineer',
		content: (
			<p>
				These cards are amazing,{' '}
				<Highlight>I want to use them</Highlight> in my project. Framer
				motion is a godsend ngl tbh fam 🙏
			</p>
		)
	},
	{
		id: 84,
		name: 'Manu Arora',
		designation: 'Senior Software Engineer',
		content: (
			<p>
				These cards are amazing,{' '}
				<Highlight>I want to use them</Highlight> in my project. Framer
				motion is a godsend ngl tbh fam 🙏
			</p>
		)
	},
	{
		id: 85,
		name: 'Manu Arora',
		designation: 'Senior Software Engineer',
		content: (
			<p>
				These cards are amazing,{' '}
				<Highlight>I want to use them</Highlight> in my project. Framer
				motion is a godsend ngl tbh fam 🙏
			</p>
		)
	},
	{
		id: 86,
		name: 'Manu Arora',
		designation: 'Senior Software Engineer',
		content: (
			<p>
				These cards are amazing,{' '}
				<Highlight>I want to use them</Highlight> in my project. Framer
				motion is a godsend ngl tbh fam 🙏
			</p>
		)
	},
	{
		id: 87,
		name: 'Manu Arora',
		designation: 'Senior Software Engineer',
		content: (
			<p>
				These cards are amazing,{' '}
				<Highlight>I want to use them</Highlight> in my project. Framer
				motion is a godsend ngl tbh fam 🙏
			</p>
		)
	},
	{
		id: 88,
		name: 'Manu Arora',
		designation: 'Senior Software Engineer',
		content: (
			<p>
				These cards are amazing,{' '}
				<Highlight>I want to use them</Highlight> in my project. Framer
				motion is a godsend ngl tbh fam 🙏
			</p>
		)
	},
	{
		id: 89,
		name: 'Manu Arora',
		designation: 'Senior Software Engineer',
		content: (
			<p>
				These cards are amazing,{' '}
				<Highlight>I want to use them</Highlight> in my project. Framer
				motion is a godsend ngl tbh fam 🙏
			</p>
		)
	},
	{
		id: 888,
		name: 'Manu Arora',
		designation: 'Senior Software Engineer',
		content: (
			<p>
				These cards are amazing,{' '}
				<Highlight>I want to use them</Highlight> in my project. Framer
				motion is a godsend ngl tbh fam 🙏
			</p>
		)
	},
	{
		id: 866,
		name: 'Manu Arora',
		designation: 'Senior Software Engineer',
		content: (
			<p>
				These cards are amazing,{' '}
				<Highlight>I want to use them</Highlight> in my project. Framer
				motion is a godsend ngl tbh fam 🙏
			</p>
		)
	},
	{
		id: 843,
		name: 'Manu Arora',
		designation: 'Senior Software Engineer',
		content: (
			<p>
				These cards are amazing,{' '}
				<Highlight>I want to use them</Highlight> in my project. Framer
				motion is a godsend ngl tbh fam 🙏
			</p>
		)
	}
]
