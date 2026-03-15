export const blogContent = {
	badge: '// HIGHLIGHTS',
	titleStart: 'Selected',
	titleAccent: 'Highlights',
	description:
		'Key themes from my experience: architecture ownership, operational tooling, and shipping products with real business complexity.',
	ctaLabel: 'View Full Experience',
	ctaHref: '#experience',
	cardCtaLabel: 'Explore',
} as const;

export const blogColorStyles = {
	primary: {
		badge: 'border-primary/30 bg-primary/10 text-primary',
		hoverText: 'group-hover:text-primary',
		border: 'hover:border-primary/50',
		glow: 'group-hover:shadow-lg group-hover:shadow-primary/20',
		link: 'text-primary',
	},
	accent: {
		badge: 'border-accent/30 bg-accent/10 text-accent',
		hoverText: 'group-hover:text-accent',
		border: 'hover:border-accent/50',
		glow: 'group-hover:shadow-lg group-hover:shadow-accent/20',
		link: 'text-accent',
	},
	success: {
		badge: 'border-success/30 bg-success/10 text-success',
		hoverText: 'group-hover:text-success',
		border: 'hover:border-success/50',
		glow: 'group-hover:shadow-lg group-hover:shadow-success/20',
		link: 'text-success',
	},
} as const;

export type TBlogColor = keyof typeof blogColorStyles;

export type TBlogPost = {
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	category: string;
	href: string;
	color: TBlogColor;
};

export const blogPosts: readonly TBlogPost[] = [
	{
		title: 'Owned frontend architecture for a high-load product ecosystem',
		excerpt:
			'Structured projects with modular architecture and Feature-Sliced Design, led technical decisions, and kept delivery aligned with backend, product, and design teams.',
		date: '2024 - 2026',
		readTime: 'Architecture',
		category: 'Leadership',
		href: '#experience',
		color: 'primary',
	},
	{
		title: 'Built user-facing and internal systems that carried real operations',
		excerpt:
			'Created dashboards, moderation tools, CRM workflows, B2B interfaces, marketplaces, and transactional flows for both customers and internal teams.',
		date: '2021 - 2026',
		readTime: 'Product systems',
		category: 'Delivery',
		href: '#experience',
		color: 'accent',
	},
	{
		title: 'Worked across a broad modern stack without losing maintainability',
		excerpt:
			'Shipped with React, Next.js, TypeScript Tailwinds CSS, TanStack Query, Zustand, Socket.io, Radix UI and other staff depending on the product.',
		date: 'Core stack',
		readTime: 'Execution',
		category: 'Technology',
		href: '#about',
		color: 'success',
	},
] as const;
