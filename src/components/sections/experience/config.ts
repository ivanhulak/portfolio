export const experienceContent = {
	badge: '// EXPERIENCE',
	titleStart: 'Professional',
	titleAccent: 'Experience',
	description:
		'A progression from freelance delivery to senior frontend ownership, with the strongest growth happening in my most recent role.',
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
	featured?: boolean;
};

export const experiences: readonly TExperience[] = [
	{
		role: 'Senior Lead Frontend Developer',
		company: 'Under NDA',
		location: 'Ukraine',
		period: 'September 2024 - February 2026',
		description:
			'Took ownership of frontend architecture for high-load iGaming and case-opening platforms, building core user flows, internal dashboards, streamer widgets, provider integrations, and real-time transactional experiences.',
		technologies: [
			'React',
			'Next.js',
			'TypeScript',
			'TanStack Query',
			'Zustand',
			'Socket.io',
			'Tailwind CSS',
			'Framer Motion',
			'Radix UI',
		],
		color: 'primary',
		featured: true,
	},
	{
		role: 'Middle Fullstack Developer',
		company: 'TimeMobile',
		location: 'Ukraine',
		period: 'November 2023 - September 2024',
		description:
			'Worked across multiple client products, from the Picnic ecosystem to an AI chat-analysis platform and startup landing pages, delivering new features, production fixes, and full product slices across web and mobile.',
		technologies: [
			'React',
			'React Native',
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Tanstack Query',
			'OpenAI',
			'MongoDB',
			'Vercel',
		],
		color: 'accent',
	},
	{
		role: 'Middle Lead Frontend Developer',
		company: 'GBMemories Inc',
		location: 'Ukraine',
		period: 'January 2023 - October 2023',
		description:
			'Led frontend development and built a CRM system from scratch for memorial content production, including submissions, media management, collaboration flows, and region-spanning workflow tools for multiple roles.',
		technologies: [
			'React',
			'Next.js',
			'TypeScript',
			'TanStack Query',
			'React Hook Form',
			'Material UI',
			'Zod',
			'Next-Intl',
			'Next Auth',
			'Socket.io',
		],
		color: 'success',
	},
	{
		role: 'Frontend Developer',
		company: 'Freelance',
		location: 'Ukraine',
		period: 'November 2020 - March 2023',
		description:
			'Delivered client-facing web products including a new B2B system for EDG Group, startup landing pages, and e-commerce work while collaborating directly with stakeholders and shipping production-ready solutions.',
		technologies: [
			'React',
			'Next.js',
			'Nuxt',
			'Svelte',
			'TypeScript',
			'TanStack Query',
			'SCSS',
			'Webpack',
			'Gulp',
		],
		color: 'accent',
	},
	{
		role: 'Junior Frontend Developer',
		company: 'Olimp Digital',
		location: 'Ukraine',
		period: 'March 2021 - December 2022',
		description:
			'Implemented frontend tasks, bug fixes, and UI improvements for multiple organizations, including defense-related platforms such as army.gov.ua and reserveplus.mod.gov.ua, with a focus on stability and performance.',
		technologies: [
			'React',
			'Next.js',
			'MUI',
			'AntDesign',
			'TypeScript',
			'Redux Toolkit',
			'REST API',
			'SCSS',
			'i18n',
		],
		color: 'primary',
	},
] as const;
