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
	titleStart: 'Passionate About',
	titleAccent: 'Digital Excellence',
	description:
		'With years of experience in frontend development, I specialize in building exceptional web applications that combine stunning design with robust functionality.',
	journeyTitleStart: 'My Journey in',
	journeyTitleAccent: 'Tech',
	storyParagraphs: [
		'My journey into web development began with a fascination for how technology can transform ideas into interactive experiences. What started as curiosity quickly evolved into a deep passion for crafting digital solutions.',
		"I've had the privilege of working with startups, agencies, and enterprise clients, helping them bring their visions to life. Each project has been an opportunity to push boundaries and explore new possibilities.",
		'Today, I focus on creating high-performance web applications using modern technologies like React and Next.js, always striving for the perfect balance between form and function.',
	],
	techStackTitle: 'Tech Stack',
};

export const aboutSkills = [
	{
		icon: CodeIcon,
		title: 'Frontend Development',
		description: 'Building modern, responsive interfaces with React, Next.js, TypeScript.',
		color: 'cyan',
	},
	{
		icon: PaletteIcon,
		title: 'UI/UX Design',
		description: 'Creating intuitive experiences with attention to detail and accessibility.',
		color: 'magenta',
	},
	{
		icon: TerminalIcon,
		title: 'Clean Code',
		description: 'Writing maintainable, scalable code following best practices.',
		color: 'green',
	},
	{
		icon: RocketIcon,
		title: 'Performance',
		description: 'Optimizing applications for speed and exceptional UX.',
		color: 'cyan',
	},
	{
		icon: ZapIcon,
		title: 'Modern Stack',
		description: 'Leveraging cutting-edge tools and frameworks.',
		color: 'magenta',
	},
	{
		icon: ShieldIcon,
		title: 'Best Practices',
		description: 'Security-first approach with industry standards.',
		color: 'green',
	},
] as const;

export const aboutTechnologies = [
	'React',
	'Next.js',
	'TypeScript',
	'JavaScript',
	'Tailwind CSS',
	'Node.js',
	'GraphQL',
	'REST APIs',
	'Git',
	'Figma',
	'Framer Motion',
	'Testing Library',
	'Redux',
	'Zustand',
	'Prisma',
	'PostgreSQL',
];

export const aboutStats = [
	{ value: 5, suffix: '+', label: 'Years Exp', textClass: 'text-[var(--neon-cyan)]' },
	{ value: 15, suffix: '+', label: 'Projects', textClass: 'text-[var(--neon-magenta)]' },
	{ value: 20, suffix: '+', label: 'Clients', textClass: 'text-[var(--neon-green)]' },
] as const;

export const aboutSkillColorClasses = {
	cyan: {
		bg: 'bg-[var(--neon-cyan)]/10',
		text: 'text-[var(--neon-cyan)]',
		border: 'border-[var(--neon-cyan)]/30',
		glow: 'group-hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]',
	},
	magenta: {
		bg: 'bg-[var(--neon-magenta)]/10',
		text: 'text-[var(--neon-magenta)]',
		border: 'border-[var(--neon-magenta)]/30',
		glow: 'group-hover:shadow-[0_0_40px_rgba(255,0,255,0.3)]',
	},
	green: {
		bg: 'bg-[var(--neon-green)]/10',
		text: 'text-[var(--neon-green)]',
		border: 'border-[var(--neon-green)]/30',
		glow: 'group-hover:shadow-[0_0_40px_rgba(0,255,136,0.3)]',
	},
} as const;
