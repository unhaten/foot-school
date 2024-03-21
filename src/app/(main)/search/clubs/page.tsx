import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const ClubSearchPage = async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/users').then(
		res => res.json()
	)

	return (
		<main>
			<div className='mt-12 md:mt-20 2xl:mt-28'>
				<Carousel
					opts={{
						align: 'start',
						loop: true
					}}
					className='w-full max-w-sm mx-auto'
				>
					<CarouselContent>
						{data.map((player: any, index: any) => (
							<CarouselItem key={player.id} className=''>
								<div className='p-1'>
									<Card>
										<CardContent className='flex aspect-square items-center justify-center p-6'>
											<span className='text-3xl font-semibold'>
												{player.name}
											</span>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</main>
	)
}

export default ClubSearchPage
