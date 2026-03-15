import { Fira_Code, Orbitron } from 'next/font/google';

export const orbitron = Orbitron({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap',
	preload: true,
	weight: ['700', '900'],
});

export const firaCode = Fira_Code({
	subsets: ['latin'],
	variable: '--font-mono',
	display: 'swap',
	preload: true,
	weight: ['400', '700'],
});
