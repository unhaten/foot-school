import CardButtons from '@/components/browse/card-buttons'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const BrowsePage = () => {
	return (
		<main>
			{/* <div className='mt-12 md:mt-20 2xl:mt-28'>
				<div className='flex justify-between mx-auto w-[600px] h-[300px]'>
					<div className='w-full border'></div>
					<CardButtons />
				</div>
			</div> */}
			{[1, 2, 3].map(card => (
				<CardContainer key={card} className='inter-var'>
					<CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] lg:w-[40rem] h-auto rounded-xl p-6 border  '>
						<div className='flex justify-between items-center'>
							<CardItem
								translateZ='50'
								className='font-bold text-neutral-600 dark:text-white'
							>
								<div className='flex items-center gap-2'>
									<Avatar>
										<AvatarImage src='https://github.com/unhaten.png' />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									<div>
										<h3 className='text-xs'>
											Дмитрий Никитин
										</h3>
										<p>ЦП</p>
									</div>
								</div>
							</CardItem>
							<CardItem
								as='p'
								translateZ='60'
								className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
							>
								3 часа назад
							</CardItem>
						</div>
						<CardItem translateZ='100' className='w-full mt-4'>
							<Image
								src='/image-b.png'
								height='1000'
								width='1000'
								className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='browsePic'
							/>
						</CardItem>
						<CardItem className='mt-5 w-full'>
							<CardButtons />
						</CardItem>
					</CardBody>
				</CardContainer>
			))}
		</main>
	)
}

export default BrowsePage
