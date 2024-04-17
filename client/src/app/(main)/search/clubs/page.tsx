import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import ClubSearch from '@/components/club/ClubSearch'
import { Button } from '@/components/ui/button'

const ClubSearchPage = async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/users').then(
		res => res.json()
	)

	console.log(data)

	return (
		<main>
			<div className='mt-12 md:mt-20 2xl:mt-28'>
				<ClubSearch />
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
										<CardContent className='p-5 aspect-square'>
											<div className='flex flex-col justify-between h-full'>
												<div className='my-16'>
													<p className='text-3xl font-semibold text-center'>
														{player.name}
													</p>
													<p className='text-2xl text-center mt-4'>
														{player.username}
													</p>
													<p className='text-2xl text-center mt-4'>
														{player.address.city}
													</p>
												</div>
												<Button>Подробнее</Button>
											</div>
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
