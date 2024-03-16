import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LuUserCircle2 } from 'react-icons/lu'
import { GiBorderedShield } from 'react-icons/gi'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import HoverCards from '@/components/ui/card-hover/hover-cards'

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center mt-12 md:mt-20 2xl:mt-28'>
			<div className='flex flex-col-reverse lg:flex-row items-center gap-12'>
				<div className='lg:w-1/2'>
					<h1 className='font-bold text-5xl text-center'>
						Футбольное агенство
					</h1>
					<p className='my-4 text-lg text-justify'>
						Наша цель - создать условия, в которых каждый игрок
						сможет полностью раскрыть свой потенциал на футбольном
						поле. Присоединяйтесь к нам и начните свое путешествие в
						мир профессионального футбола!
					</p>
					<div className='relative mt-6'>
						<div className='flex flex-col md:flex-row items-center gap-4 justify-center'>
							<Button
								className='w-full md:w-1/2 h-15 flex gap-1 text-md'
								variant='outline'
							>
								Игрок <LuUserCircle2 />
							</Button>
							<Button className='w-full md:w-1/2 h-15 flex gap-1 text-md bg-zinc-950 hover:bg-zinc-800'>
								Клуб <GiBorderedShield />
							</Button>
						</div>
						{/* <SparklingEffect /> */}
					</div>
				</div>
				<div className='w-3/4 lg:w-4/12 m-auto rounded-3xl'>
					<AspectRatio ratio={4 / 3}>
						<Image
							src='/football-pic.webp'
							alt='logo'
							fill
							// sizes='100vw'
							// priority
							className='rounded-3xl'
						/>
					</AspectRatio>
				</div>
			</div>
			<div className='w-full mx-auto px-8'>
				<HoverCards />
			</div>
		</main>
	)
}
