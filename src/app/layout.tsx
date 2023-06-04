'use client'
import '@/app/assets/css/globals.scss'
import { Metadata } from 'next'
import NavBar from '@/components/NavBar/NavBar'

export const metadata: Metadata = {
	title: 'Marcenaria Nova Estrela',
	description: 'Móveis sob medida',
}

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<NavBar />
				{children}
			</body>
		</html>
	)
}
