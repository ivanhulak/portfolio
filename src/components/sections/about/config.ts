import {
	CodeIcon,
	PaletteIcon,
	RocketIcon,
	ShieldIcon,
	TerminalIcon,
	ZapIcon,
} from '@/assets/icons';

export const aboutContent = {
	badge: '// ABOUT ME',
	titleStart: 'Building',
	titleAccent: 'Reliable Frontends',
	description:
		'I build scalable frontend systems for products with real operational complexity, combining maintainable architecture, product thinking, and polished user experience.',
	journeyTitleStart: 'My Journey in',
	journeyTitleAccent: 'Tech',
	storyParagraphs: [
		'I started as a freelancer and grew into a senior engineer trusted to own frontend direction end-to-end, from UI foundations to complex business logic and performance-critical flows.',
		'My experience spans startup products, internal tools, B2B systems, AI-driven platforms, public-sector websites, and high-load iGaming products, which taught me how to adapt quickly without sacrificing quality.',
		'Today, I focus on scalable React and Next.js applications with strong architecture, reusable systems, clean code, and product-minded delivery that supports long-term growth.',
	],
	techStackTitle: 'Tech Stack',
};

export const aboutSkills = [
	{
		icon: CodeIcon,
		title: 'Frontend Architecture',
		description:
			'Designing scalable React and Next.js applications using modular architecture and Feature-Sliced Design (FSD).',
		color: 'primary',
	},
	{
		icon: PaletteIcon,
		title: 'Product Interfaces',
		description: 'Creating flows for real users, operators, managers, and internal teams.',
		color: 'accent',
	},
	{
		icon: TerminalIcon,
		title: 'Maintainable Code',
		description: 'Keeping large codebases readable, reusable, and ready for long-term growth.',
		color: 'success',
	},
	{
		icon: RocketIcon,
		title: 'High-Load Systems',
		description: 'Building performant experiences for transaction-heavy and real-time products.',
		color: 'primary',
	},
	{
		icon: ZapIcon,
		title: 'Modern Stack',
		description: 'Leveraging cutting-edge tools and frameworks.',
		color: 'accent',
	},
	{
		icon: ShieldIcon,
		title: 'Ownership',
		description: 'Leading reviews, technical decisions, delivery planning, and frontend quality.',
		color: 'success',
	},
] as const;

export const aboutTechnologies = [
	'React',
	'Next.js',
	'TypeScript',
	'JavaScript',
	'Tailwind CSS',
	'TanStack Query',
	'Zustand',
	'Redux Toolkit',
	'Redux',
	'RTK Query',
	'SWR',
	'React Hook Form',
	'Zod',
	'Yup',
	'REST APIs',
	'Socket.io',
	'NextAuth',
	'i18n',
	'Material UI',
	'Radix UI',
	'Shadcn UI',
	'Framer Motion',
	'Prisma',
	'MongoDB',
	'AWS S3',
	'Vercel',
];

export const aboutStats = [
	{ value: 6, suffix: '+', label: 'Years Exp', textClass: 'text-primary' },
	{ value: 5, suffix: '', label: 'Core Roles', textClass: 'text-accent' },
	{ value: 20, suffix: '+', label: 'Key Tools', textClass: 'text-success' },
] as const;

export const aboutSkillColorClasses = {
	primary: {
		bg: 'bg-primary/10',
		text: 'text-primary',
		border: 'border-primary/30',
		glow: 'group-hover:shadow-lg group-hover:shadow-primary/30',
		hoverText: 'group-hover:text-primary',
	},
	accent: {
		bg: 'bg-accent/10',
		text: 'text-accent',
		border: 'border-accent/30',
		glow: 'group-hover:shadow-lg group-hover:shadow-accent/30',
		hoverText: 'group-hover:text-accent',
	},
	success: {
		bg: 'bg-success/10',
		text: 'text-success',
		border: 'border-success/30',
		glow: 'group-hover:shadow-lg group-hover:shadow-success/30',
		hoverText: 'group-hover:text-success',
	},
} as const;
