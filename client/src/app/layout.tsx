import type { Metadata } from 'next'
import { Montserrat as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/footer/footer'
import NavBar from '@/components/ui/nav/navbar'

// const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
	subsets: ['latin'],
	display: 'swap',
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
				// suppressHydrationWarning={true}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}