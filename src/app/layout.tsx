import LayoutClient from '@/components/layout/LayoutClient'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Social media app',
	description: 'Social media app for practice Next',
	icons: '/wakatime.svg',
}

export const viewport: Viewport = {
	themeColor: '#0E0818',
	colorScheme: 'dark',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<LayoutClient>{children}</LayoutClient>
			</body>
		</html>
	)
}
