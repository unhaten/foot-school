import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LuUserCircle2 } from 'react-icons/lu'
import { GiBorderedShield } from 'react-icons/gi'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import HoverCards from '@/components/ui/card-hover/hover-cards'
import NavBar from '@/components/nav/navbar'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<header className='sticky top-0 z-50 w-full border-b border-border/40 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/85'>
				<NavBar />
			</header>
			<main className='flex flex-col items-center justify-center mt-12 md:mt-20 2xl:mt-28 max-w-screen-2xl m-auto px-8'>
				<div className='flex flex-col-reverse justify-center lg:flex-row items-center gap-12'>
					<div className='lg:w-1/2'>
						<h1 className='font-bold text-5xl text-center'>
							Футбольное агенство
						</h1>
						<p className='my-4 text-lg text-justify'>
							Наша цель - создать условия, в которых каждый игрок
							сможет полностью раскрыть свой потенциал на
							футбольном поле. Присоединяйтесь к нам и начните
							свое путешествие в мир профессионального футбола!
						</p>
						<div className='relative mt-4'>
							<h3 className='mb-4 text-lg font-medium rounded-xl py-2 text-center'>
								Выберите способ входа
							</h3>
							<div className='flex flex-col md:flex-row items-center gap-4 justify-center'>
								<Link
									href='/auth/player/login'
									className='w-full md:w-1/2'
								>
									<Button
										className='w-full h-15 flex gap-1 text-md'
										variant='outline'
									>
										Игрок <LuUserCircle2 />
									</Button>
								</Link>
								<Link
									href='auth/club/login'
									className='w-full md:w-1/2'
								>
									<Button className='w-full h-15 flex gap-1 text-md text-background bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-white/60'>
										Клуб <GiBorderedShield />
									</Button>
								</Link>
							</div>
							{/* <SparklingEffect /> */}
						</div>
					</div>
					<div className='w-3/4 lg:w-4/12 rounded-3xl'>
						<AspectRatio ratio={4 / 3}>
							<Image
								src='/football-pic.jpg'
								alt='logo'
								fill
								// sizes='100vw'
								// priority
								className='rounded-3xl'
							/>
						</AspectRatio>
					</div>
				</div>
				<div className='w-full mx-auto relative'>
					<HoverCards />
					{/* <div className='w-full m-auto rounded-3xl absolute top-0 opacity-50'>
					<AspectRatio ratio={16 / 9}>
						<Image
							src='/football-running.jpeg'
							alt='logo'
							fill
							className='rounded-3xl'
						/>
					</AspectRatio>
				</div> */}
				</div>
			</main>
		</>
	)
}
