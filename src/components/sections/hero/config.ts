import { GithubIcon, linkedinIcon, MailIcon, SendIcon } from '@/assets/icons';

export const heroRoles = [
	'Senior Frontend Developer',
	'React Specialist',
	'UI/UX Enthusiast',
	'Performance Expert',
	'Code Craftsman',
];

export const heroContent = {
	status: 'AVAILABLE FOR HIRE',
	greeting: 'Hello, I am',
	name: 'IVENGO',
	description:
		'Crafting exceptional digital experiences with cutting-edge technologies. Turning complex problems into elegant, performant solutions.',
	primaryCta: {
		href: '#projects',
		label: 'View Projects',
	},
	secondaryCta: {
		href: '#contact',
		label: "Let's Talk",
	},
	scrollLabel: 'Explore',
	image: {
		src: '/images/brand-hero.png',
		alt: 'IVENGO - Senior Frontend Developer',
		width: 550,
		height: 440,
	},
};

export const heroSocialLinks = [
	{
		icon: GithubIcon,
		href: 'https://github.com',
		label: 'GitHub',
		colorClass: 'hover:text-[var(--neon-cyan)] hover:shadow-[0_0_20px_var(--neon-cyan)]',
	},
	{
		icon: linkedinIcon,
		href: 'https://linkedin.com',
		label: 'LinkedIn',
		colorClass: 'hover:text-[var(--neon-cyan)] hover:shadow-[0_0_20px_var(--neon-cyan)]',
	},
	{
		icon: SendIcon,
		href: 'https://t.me',
		label: 'Telegram',
		colorClass: 'hover:text-[var(--neon-magenta)] hover:shadow-[0_0_20px_var(--neon-magenta)]',
	},
	{
		icon: MailIcon,
		href: 'mailto:hello@ivengo.dev',
		label: 'Email',
		colorClass: 'hover:text-[var(--neon-green)] hover:shadow-[0_0_20px_var(--neon-green)]',
	},
] as const;

export const heroBadges = [
	{
		title: '5+ Years',
		subtitle: 'Experience',
		textClass: 'text-[var(--neon-cyan)]',
		borderClass: 'border-[var(--neon-cyan)]/40',
		shadowClass: 'shadow-[0_0_30px_rgba(0,255,255,0.2)]',
		positionClass: 'top-1/4 -left-6',
	},
	{
		title: '15+ Projects',
		subtitle: 'Delivered',
		textClass: 'text-[var(--neon-magenta)]',
		borderClass: 'border-[var(--neon-magenta)]/40',
		shadowClass: 'shadow-[0_0_30px_rgba(255,0,255,0.2)]',
		positionClass: 'top-1/2 -right-6',
		style: { animationDelay: '-2s' },
	},
	{
		title: '100% Remote',
		subtitle: 'Worldwide',
		textClass: 'text-[var(--neon-green)]',
		borderClass: 'border-[var(--neon-green)]/40',
		shadowClass: 'shadow-[0_0_30px_rgba(0,255,136,0.2)]',
		positionClass: 'bottom-1/4 -left-2',
		style: { animationDelay: '-4s' },
	},
] as const;
