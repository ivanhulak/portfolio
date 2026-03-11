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
		color: 'primary',
	},
	{
		icon: PaletteIcon,
		title: 'UI/UX Design',
		description: 'Creating intuitive experiences with attention to detail and accessibility.',
		color: 'accent',
	},
	{
		icon: TerminalIcon,
		title: 'Clean Code',
		description: 'Writing maintainable, scalable code following best practices.',
		color: 'success',
	},
	{
		icon: RocketIcon,
		title: 'Performance',
		description: 'Optimizing applications for speed and exceptional UX.',
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
		title: 'Best Practices',
		description: 'Security-first approach with industry standards.',
		color: 'success',
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
	{ value: 5, suffix: '+', label: 'Years Exp', textClass: 'text-primary' },
	{ value: 15, suffix: '+', label: 'Projects', textClass: 'text-accent' },
	{ value: 20, suffix: '+', label: 'Clients', textClass: 'text-success' },
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
