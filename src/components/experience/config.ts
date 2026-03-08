export const experienceContent = {
	badge: '// EXPERIENCE',
	titleStart: 'My Professional',
	titleAccent: 'Journey',
	description:
		'A timeline of growth, learning, and building amazing products with incredible teams.',
} as const;

export const experienceColorStyles = {
	cyan: {
		dot: 'bg-[var(--neon-cyan)] shadow-[0_0_20px_var(--neon-cyan)]',
		border: 'hover:border-[var(--neon-cyan)]/50',
		glow: 'hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]',
		text: 'text-[var(--neon-cyan)]',
		hoverText: 'group-hover:text-[var(--neon-cyan)]',
		pingBackground: 'var(--neon-cyan)',
	},
	magenta: {
		dot: 'bg-[var(--neon-magenta)] shadow-[0_0_20px_var(--neon-magenta)]',
		border: 'hover:border-[var(--neon-magenta)]/50',
		glow: 'hover:shadow-[0_0_30px_rgba(255,0,255,0.15)]',
		text: 'text-[var(--neon-magenta)]',
		hoverText: 'group-hover:text-[var(--neon-magenta)]',
		pingBackground: 'var(--neon-magenta)',
	},
	green: {
		dot: 'bg-[var(--neon-green)] shadow-[0_0_20px_var(--neon-green)]',
		border: 'hover:border-[var(--neon-green)]/50',
		glow: 'hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]',
		text: 'text-[var(--neon-green)]',
		hoverText: 'group-hover:text-[var(--neon-green)]',
		pingBackground: 'var(--neon-green)',
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
		color: 'cyan',
	},
	{
		role: 'Senior Frontend Developer',
		company: 'Test Inc.',
		location: 'Remote',
		period: '2023 - Present',
		description:
			'Leading frontend architecture decisions, implementing scalable React patterns, and mentoring a team of 5 developers. Reduced bundle size by 40% and improved Core Web Vitals scores.',
		technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Tailwind'],
		color: 'cyan',
	},
	{
		role: 'Senior Frontend Developer',
		company: 'Test Inc.',
		location: 'Remote',
		period: '2023 - Present',
		description:
			'Leading frontend architecture decisions, implementing scalable React patterns, and mentoring a team of 5 developers. Reduced bundle size by 40% and improved Core Web Vitals scores.',
		technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Tailwind'],
		color: 'cyan',
	},
] as const;
