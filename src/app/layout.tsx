import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav/Nav'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/footer/footer'

// const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
})

export const metadata: Metadata = {
	title: 'Foot School',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={cn(
					'min-h-screen font-sans antialiased',
					fontSans.variable
				)}
				// className={inter.className}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					enableSystem
					disableTransitionOnChange
				>
					<header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
						<Nav />
					</header>
					<div className='max-w-screen-2xl m-auto px-8'>
						{children}
					</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
