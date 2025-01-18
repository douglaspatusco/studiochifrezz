export const metadata = {
	title: 'Studio Chifrezz',
	description: 'Animation Studio',
}

	export default function RootLayout({
	children,
	}: {
	children: React.ReactNode
	}) {
	return (
		<html lang="pr-BR">
			<body>{children}</body>
		</html>
	)
}
