export const experienceContent = {
	badge: '// EXPERIENCE',
	titleStart: 'My Professional',
	titleAccent: 'Journey',
	description:
		'A timeline of growth, learning, and building amazing products with incredible teams.',
} as const;

export const experienceColorStyles = {
	primary: {
		dot: 'bg-primary shadow-lg shadow-primary/40',
		border: 'hover:border-primary/50',
		glow: 'hover:shadow-lg hover:shadow-primary/20',
		text: 'text-primary',
		hoverText: 'group-hover:text-primary',
		pingBackgroundClass: 'bg-primary',
	},
	accent: {
		dot: 'bg-accent shadow-lg shadow-accent/40',
		border: 'hover:border-accent/50',
		glow: 'hover:shadow-lg hover:shadow-accent/20',
		text: 'text-accent',
		hoverText: 'group-hover:text-accent',
		pingBackgroundClass: 'bg-accent',
	},
	success: {
		dot: 'bg-success shadow-lg shadow-success/40',
		border: 'hover:border-success/50',
		glow: 'hover:shadow-lg hover:shadow-success/20',
		text: 'text-success',
		hoverText: 'group-hover:text-success',
		pingBackgroundClass: 'bg-success',
	},
} as const;

export type TExperienceColor = keyof typeof experienceColorStyles;

export type TExperience = {
	role: string;
	company: string;
	location: string;
	period: string;
	description: string;
	technologies: readonly string[];
	color: TExperienceColor;
};

export const experiences: readonly TExperience[] = [
	{
		role: 'Senior Frontend Developer',
		company: 'Test Inc.',
		location: 'Remote',
		period: '2023 - Present',
		description:
			'Leading frontend architecture decisions, implementing scalable React patterns, and mentoring a team of 5 developers. Reduced bundle size by 40% and improved Core Web Vitals scores.',
		technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Tailwind'],
		color: 'primary',
	},
	{
		role: 'Senior Frontend Developer',
		company: 'Test Inc.',
		location: 'Remote',
		period: '2023 - Present',
		description:
			'Leading frontend architecture decisions, implementing scalable React patterns, and mentoring a team of 5 developers. Reduced bundle size by 40% and improved Core Web Vitals scores.',
		technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Tailwind'],
		color: 'primary',
	},
	{
		role: 'Senior Frontend Developer',
		company: 'Test Inc.',
		location: 'Remote',
		period: '2023 - Present',
		description:
			'Leading frontend architecture decisions, implementing scalable React patterns, and mentoring a team of 5 developers. Reduced bundle size by 40% and improved Core Web Vitals scores.',
		technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Tailwind'],
		color: 'primary',
	},
] as const;
