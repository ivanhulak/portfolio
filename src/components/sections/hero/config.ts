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
		colorClass: 'hover:text-primary hover:shadow-lg hover:shadow-primary/30',
	},
	{
		icon: linkedinIcon,
		href: 'https://linkedin.com',
		label: 'LinkedIn',
		colorClass: 'hover:text-primary hover:shadow-lg hover:shadow-primary/30',
	},
	{
		icon: SendIcon,
		href: 'https://t.me',
		label: 'Telegram',
		colorClass: 'hover:text-accent hover:shadow-lg hover:shadow-accent/30',
	},
	{
		icon: MailIcon,
		href: 'mailto:hello@ivengo.dev',
		label: 'Email',
		colorClass: 'hover:text-success hover:shadow-lg hover:shadow-success/30',
	},
] as const;

type THeroBadge = {
	title: string;
	subtitle: string;
	textClass: string;
	borderClass: string;
	shadowClass: string;
	positionClass: string;
	style?: { animationDelay: string };
};

export const heroBadges: readonly THeroBadge[] = [
	{
		title: '5+ Years',
		subtitle: 'Experience',
		textClass: 'text-primary',
		borderClass: 'border-primary/40',
		shadowClass: 'shadow-lg shadow-primary/20',
		positionClass: 'top-1/4 -left-6',
	},
	{
		title: '15+ Projects',
		subtitle: 'Delivered',
		textClass: 'text-accent',
		borderClass: 'border-accent/40',
		shadowClass: 'shadow-lg shadow-accent/20',
		positionClass: 'top-1/2 -right-6',
		style: { animationDelay: '-2s' },
	},
	{
		title: '100% Remote',
		subtitle: 'Worldwide',
		textClass: 'text-success',
		borderClass: 'border-success/40',
		shadowClass: 'shadow-lg shadow-success/20',
		positionClass: 'bottom-1/4 -left-2',
		style: { animationDelay: '-4s' },
	},
] as const;
