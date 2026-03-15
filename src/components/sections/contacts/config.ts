import type { FC, SVGProps } from 'react';

import {
	ArrowUpRightIcon,
	BriefcaseIcon,
	MailIcon,
	MapPinIcon,
	SendIcon,
	SparklesIcon,
} from '@/assets/icons';

export const contactContent = {
	badge: '// CONTACT',
	titleStart: "Let's Work",
	titleAccent: 'Together',
	description:
		'I’m open to senior frontend roles, product teams, and complex web platforms where architecture and delivery both matter.',
	ctaTitle: 'Have a product that needs strong frontend ownership?',
	ctaDescription:
		"Let's talk if you need someone who can take responsibility for architecture, execution, and the details that make frontend systems reliable at scale.",
	ctaHref: 'mailto:dev.ivanhulak@gmail.com',
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
	icon: FC<SVGProps<SVGSVGElement>>;
	username: string;
	color: TContactSocialColor;
	isExternal?: boolean;
};

export const contactSocialLinks: readonly TContactSocialLink[] = [
	{
		name: 'Email',
		href: 'mailto:dev.ivanhulak@gmail.com',
		icon: MailIcon,
		username: 'dev.ivanhulak@gmail.com',
		color: 'primary',
	},
	{
		name: 'Phone',
		href: 'tel:+380970625705',
		icon: SendIcon,
		username: '+380 97 062 57 05',
		color: 'accent',
	},
	{
		name: 'Location',
		href: 'https://maps.google.com/?q=Zhytomyr,Ukraine',
		icon: MapPinIcon,
		username: 'Zhytomyr, Ukraine',
		color: 'success',
		isExternal: true,
	},
	{
		name: 'Current Focus',
		href: '#experience',
		icon: BriefcaseIcon,
		username: 'Senior frontend ownership',
		color: 'primary',
	},
] as const;
