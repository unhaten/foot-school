import MainNavBar from '@/components/main-navbar/main-navbar'

export default function MainLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<header className='sticky top-0 z-50 w-full border-b border-border/40 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/85'>
				<MainNavBar />
			</header>
			<div className='max-w-screen-2xl m-auto px-8'>{children}</div>
		</>
	)
}
