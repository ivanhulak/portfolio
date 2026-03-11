import {
	ArrowUpRightIcon,
	InstagramIcon,
	linkedinIcon,
	MailIcon,
	SendIcon,
	SparklesIcon,
} from '@/assets/icons';

export const contactContent = {
	badge: '// CONTACT',
	titleStart: "Let's Work",
	titleAccent: 'Together',
	description:
		"Have a project in mind or want to collaborate? Let's create something amazing together.",
	ctaTitle: 'Ready to start your next project?',
	ctaDescription:
		"I'm currently available for freelance work and exciting opportunities. Drop me a message and let's discuss how I can help bring your ideas to life.",
	ctaHref: 'mailto:contact@ivengo.dev',
	ctaLabel: 'Send Me an Email',
} as const;

export const contactIcons = {
	sparkles: SparklesIcon,
	mail: MailIcon,
	arrowUpRight: ArrowUpRightIcon,
} as const;

export const contactSocialColorStyles = {
	primary: {
		border: 'hover:border-primary/50',
		glow: 'hover:shadow-lg hover:shadow-primary/20',
		icon: 'group-hover:text-primary',
		background: 'group-hover:bg-primary/5',
	},
	accent: {
		border: 'hover:border-accent/50',
		glow: 'hover:shadow-lg hover:shadow-accent/20',
		icon: 'group-hover:text-accent',
		background: 'group-hover:bg-accent/5',
	},
	success: {
		border: 'hover:border-success/50',
		glow: 'hover:shadow-lg hover:shadow-success/20',
		icon: 'group-hover:text-success',
		background: 'group-hover:bg-success/5',
	},
} as const;

export type TContactSocialColor = keyof typeof contactSocialColorStyles;

export type TContactSocialLink = {
	name: string;
	href: string;
	icon: typeof SendIcon;
	username: string;
	color: TContactSocialColor;
	isExternal?: boolean;
};

export const contactSocialLinks: readonly TContactSocialLink[] = [
	{
		name: 'Telegram',
		href: 'https://t.me/',
		icon: SendIcon,
		username: '@ivengo',
		color: 'primary',
		isExternal: true,
	},
	{
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/',
		icon: linkedinIcon,
		username: 'IVENGO',
		color: 'primary',
		isExternal: true,
	},
	{
		name: 'Instagram',
		href: 'https://instagram.com/',
		icon: InstagramIcon,
		username: '@ivengo.dev',
		color: 'accent',
		isExternal: true,
	},
	{
		name: 'Email',
		href: 'mailto:contact@ivengo.dev',
		icon: MailIcon,
		username: 'contact@ivengo.dev',
		color: 'success',
	},
] as const;
