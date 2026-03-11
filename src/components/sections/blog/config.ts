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
		color: 'primary',
	},
	{
		title: 'The Future of Server Components',
		excerpt:
			'Exploring React Server Components and how they change the way we think about building web applications.',
		date: 'Feb 28, 2026',
		readTime: '6 min',
		category: 'Next.js',
		slug: 'server-components-future',
		color: 'accent',
	},
	{
		title: 'TypeScript Best Practices for Frontend',
		excerpt:
			'Essential TypeScript patterns that will make your code more maintainable and type-safe.',
		date: 'Feb 15, 2026',
		readTime: '10 min',
		category: 'TypeScript',
		slug: 'typescript-best-practices',
		color: 'success',
	},
] as const;
