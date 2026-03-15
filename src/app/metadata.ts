import { Metadata } from 'next';

export const portfolioMetadata: Metadata = {
	title: 'Ivan Hulak | Senior Lead Frontend Developer',
	description:
		'Senior Lead Frontend Developer specializing in React, Next.js, and modern web technologies. Crafting exceptional digital experiences.',
	keywords: ['ivan hulak', 'senior frontend developer', 'react', 'next.js', 'typescript'],
	authors: [{ name: 'Ivan Hulak' }],
	creator: 'Ivan Hulak',
	openGraph: {
		title: 'Ivan Hulak | Senior Lead Frontend Developer',
		description:
			'Senior Lead Frontend Developer specializing in scalable React, Next.js, and complex product systems.',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ivan Hulak | Senior Lead Frontend Developer',
		description:
			'Senior Lead Frontend Developer specializing in scalable React, Next.js, and complex product systems.',
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
