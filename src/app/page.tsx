import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LuUserCircle2 } from 'react-icons/lu'
import { GiBorderedShield } from 'react-icons/gi'

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center mt-12 md:mt-20 2xl:mt-40'>
			<div className='flex flex-col lg:flex-row items-center gap-12'>
				<div className='lg:w-1/2'>
					<h1 className='font-bold text-5xl text-center'>
						Футбольное агенство
					</h1>
					<p className='my-4 text-lg'>
						Наша цель - создать условия, в которых каждый игрок
						сможет полностью раскрыть свой потенциал на футбольном
						поле. Присоединяйтесь к нам и начните свое путешествие в
						мир профессионального футбола!
					</p>
					<div className='flex items-center gap-4 justify-center my-6'>
						<Button
							className='w-1/2 flex gap-1 text-md'
							variant='outline'
						>
							Игрок <LuUserCircle2 />
						</Button>
						<Button className='w-1/2 flex gap-1 text-md bg-zinc-950 hover:bg-zinc-800'>
							Клуб <GiBorderedShield />
						</Button>
					</div>
				</div>
				<div className='border-solid border-stone-600 w-3/4 lg:w-1/3 h-[400px] border-8 m-auto rounded-3xl'></div>
			</div>
		</main>
	)
}
