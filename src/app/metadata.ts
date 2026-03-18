import { Metadata } from 'next';

export const portfolioMetadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://ivanhulak.com'),
	title: 'Ivan Hulak | Senior Lead Frontend Developer',
	description:
		'Senior Lead Frontend Developer specializing in React, Next.js, and modern web technologies. Crafting exceptional digital experiences.',
	keywords: ['ivan hulak', 'senior frontend developer', 'react', 'next.js', 'typescript'],
	authors: [{ name: 'Ivan Hulak' }],
	creator: 'Ivan Hulak',
	openGraph: {
		siteName: 'Portfolio | Ivan Hulak',
		title: 'Ivan Hulak | Senior Lead Frontend Developer',
		description:
			'Senior Lead Frontend Developer specializing in scalable React, Next.js, and complex product systems.',
		url: '/',
		type: 'website',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Portfolio preview',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ivan Hulak | Senior Lead Frontend Developer',
		description:
			'Senior Lead Frontend Developer specializing in scalable React, Next.js, and complex product systems.',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Portfolio preview',
			},
		],
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
