import CardButtons from '@/components/browse/card-buttons'

const BrowsePage = () => {
	return (
		<main>
			<div className='mt-12 md:mt-20 2xl:mt-28'>
				<div className='flex justify-between mx-auto w-[600px] h-[300px]'>
					<div className='w-full border'></div>
					<CardButtons />
				</div>
			</div>
		</main>
	)
}

export default BrowsePage
