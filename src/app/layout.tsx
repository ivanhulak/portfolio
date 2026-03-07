import type { Metadata, Viewport } from 'next';

import '@/styles/globals.css';
import { firaCode, orbitron } from './fonts';
import { portfolioMetadata } from './metadata';

export const metadata: Metadata = portfolioMetadata;

export const viewport: Viewport = {
	themeColor: '#0a0a0f',
	colorScheme: 'dark',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark scroll-smooth">
			<body
				className={`${orbitron.variable} ${firaCode.variable} bg-background text-foreground scanline font-sans antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
