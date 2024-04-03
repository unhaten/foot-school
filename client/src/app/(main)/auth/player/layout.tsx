const PlayerAuthLayout = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<main className='mt-12 md:mt-20 xl:mt-48'>
			<div className='max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input'>
				{children}
			</div>
		</main>
	)
}

export default PlayerAuthLayout
