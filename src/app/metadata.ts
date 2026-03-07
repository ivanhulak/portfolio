import { Metadata } from 'next';

export const portfolioMetadata: Metadata = {
	title: 'IVENGO | Senior Frontend Developer',
	description:
		'Senior Frontend Developer specializing in React, Next.js, and modern web technologies. Crafting exceptional digital experiences.',
	keywords: ['frontend developer', 'react', 'next.js', 'web development', 'IVENGO'],
	authors: [{ name: 'IVENGO' }],
	creator: 'IVENGO',
	openGraph: {
		title: 'IVENGO | Senior Frontend Developer',
		description:
			'Senior Frontend Developer specializing in React, Next.js, and modern web technologies.',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'IVENGO | Senior Frontend Developer',
		description:
			'Senior Frontend Developer specializing in React, Next.js, and modern web technologies.',
	},
	icons: {
		icon: [
			{
				url: '/favicon.ico',
				type: 'image/svg+xml',
			},
		],
		apple: '/apple-icon.png',
	},
};
