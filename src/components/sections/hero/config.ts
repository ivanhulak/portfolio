import { BriefcaseIcon, MailIcon, MapPinIcon, SendIcon } from '@/assets/icons';

export const heroRoles = [
	'Senior Lead Frontend Developer',
	'React & Next.js Engineer',
	'High-Load Product Builder',
	'Frontend Architecture Owner',
	'Complex UX Systems Specialist',
];

export const heroContent = {
	status: 'OPEN TO NEW OPPORTUNITIES',
	greeting: 'Hello, I am',
	name: 'IVAN HULAK',
	description:
		'Senior Lead Frontend Developer with 6 years of experience building scalable React and Next.js products, from UI foundations to performance-critical business flows.',
	primaryCta: {
		href: '#experience',
		label: 'See Experience',
	},
	secondaryCta: {
		href: '#contact',
		label: "Let's Work Together",
	},
	scrollLabel: 'Explore',
	image: {
		src: '/images/brand-hero.webp',
		alt: 'Ivan Hulak - Senior Lead Frontend Developer',
		width: 550,
		height: 440,
	},
};

export const heroSocialLinks = [
	{
		icon: MailIcon,
		href: 'mailto:dev.ivanhulak@gmail.com',
		label: 'Email',
		colorClass: 'hover:text-success hover:shadow-lg hover:shadow-success/30',
	},
	{
		icon: SendIcon,
		href: 'tel:+380970625705',
		label: 'Phone',
		colorClass: 'hover:text-accent hover:shadow-lg hover:shadow-accent/30',
	},
	{
		icon: MapPinIcon,
		href: 'https://maps.google.com/?q=Zhytomyr,Ukraine',
		label: 'Zhytomyr, Ukraine',
		colorClass: 'hover:text-primary hover:shadow-lg hover:shadow-primary/30',
	},
	{
		icon: BriefcaseIcon,
		href: '#experience',
		label: 'Experience',
		colorClass: 'hover:text-primary hover:shadow-lg hover:shadow-primary/30',
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
		title: '6+ Years',
		subtitle: 'Experience',
		textClass: 'text-primary',
		borderClass: 'border-primary/40',
		shadowClass: 'shadow-lg shadow-primary/20',
		positionClass: 'top-1/4 -left-6',
	},
	{
		title: '5 Roles',
		subtitle: 'Across Teams',
		textClass: 'text-accent',
		borderClass: 'border-accent/40',
		shadowClass: 'shadow-lg shadow-accent/20',
		positionClass: 'top-1/2 -right-6',
		style: { animationDelay: '-2s' },
	},
	{
		title: 'React / Next.js',
		subtitle: 'Core Stack',
		textClass: 'text-success',
		borderClass: 'border-success/40',
		shadowClass: 'shadow-lg shadow-success/20',
		positionClass: 'bottom-1/4 -left-2',
		style: { animationDelay: '-4s' },
	},
] as const;
