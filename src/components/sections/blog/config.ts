export const blogContent = {
	badge: '// BLOG',
	titleStart: 'Latest',
	titleAccent: 'Articles',
	description:
		'Thoughts on frontend development, technology trends, and lessons learned from building web applications.',
	ctaLabel: 'View All Articles',
	ctaHref: '/blog',
	cardCtaLabel: 'Read Article',
} as const;

export const blogColorStyles = {
	cyan: {
		badge: 'bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)] border-[var(--neon-cyan)]/30',
		hoverText: 'group-hover:text-[var(--neon-cyan)]',
		border: 'hover:border-[var(--neon-cyan)]/50',
		glow: 'group-hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]',
		link: 'text-[var(--neon-cyan)]',
	},
	magenta: {
		badge: 'bg-[var(--neon-magenta)]/10 text-[var(--neon-magenta)] border-[var(--neon-magenta)]/30',
		hoverText: 'group-hover:text-[var(--neon-magenta)]',
		border: 'hover:border-[var(--neon-magenta)]/50',
		glow: 'group-hover:shadow-[0_0_30px_rgba(255,0,255,0.15)]',
		link: 'text-[var(--neon-magenta)]',
	},
	green: {
		badge: 'bg-[var(--neon-green)]/10 text-[var(--neon-green)] border-[var(--neon-green)]/30',
		hoverText: 'group-hover:text-[var(--neon-green)]',
		border: 'hover:border-[var(--neon-green)]/50',
		glow: 'group-hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]',
		link: 'text-[var(--neon-green)]',
	},
} as const;

export type TBlogColor = keyof typeof blogColorStyles;

export type TBlogPost = {
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	category: string;
	slug: string;
	color: TBlogColor;
};

export const blogPosts: readonly TBlogPost[] = [
	{
		title: 'Building Scalable React Applications in 2026',
		excerpt:
			'Learn the patterns and practices for building React applications that scale. From state management to component architecture.',
		date: 'Mar 5, 2026',
		readTime: '8 min',
		category: 'React',
		slug: 'scalable-react-apps',
		color: 'cyan',
	},
	{
		title: 'The Future of Server Components',
		excerpt:
			'Exploring React Server Components and how they change the way we think about building web applications.',
		date: 'Feb 28, 2026',
		readTime: '6 min',
		category: 'Next.js',
		slug: 'server-components-future',
		color: 'magenta',
	},
	{
		title: 'TypeScript Best Practices for Frontend',
		excerpt:
			'Essential TypeScript patterns that will make your code more maintainable and type-safe.',
		date: 'Feb 15, 2026',
		readTime: '10 min',
		category: 'TypeScript',
		slug: 'typescript-best-practices',
		color: 'green',
	},
] as const;
