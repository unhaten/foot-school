import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'

const ClubSearchPage = () => {
	return (
		<main>
			<div className='mt-12 md:mt-20 2xl:mt-28'>
				<Carousel>
					<CarouselContent>
						<CarouselItem>...</CarouselItem>
						<CarouselItem>...</CarouselItem>
						<CarouselItem>...</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</main>
	)
}

export default ClubSearchPage
