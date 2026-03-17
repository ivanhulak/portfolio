import type { FC, SVGProps } from 'react';

import { BriefcaseIcon, MailIcon, MapPinIcon, PhoneIcon, SendIcon } from '@/assets/icons';

export type TFooterLink = {
	href: string;
	label: string;
};

export type TFooterSocialLink = TFooterLink & {
	icon: FC<SVGProps<SVGSVGElement>>;
	external?: boolean;
};

export const footerLinks: TFooterLink[] = [
	{ href: '#about', label: 'About' },
	{ href: '#experience', label: 'Experience' },
	{ href: '#blog', label: 'Highlights' },
	{ href: '#contact', label: 'Contact' },
];

export const footerSocialLinks: TFooterSocialLink[] = [
	{ href: 'mailto:dev.ivanhulak@gmail.com', icon: MailIcon, label: 'Email' },
	{
		href: 'https://t.me/ya_ivengo',
		icon: SendIcon,
		label: 'Telegram',
		external: true,
	},
	{ href: 'tel:+380970625705', icon: PhoneIcon, label: 'Phone' },
	{
		href: 'https://maps.google.com/?q=Zhytomyr,Ukraine',
		icon: MapPinIcon,
		label: 'Location',
		external: true,
	},
	{ href: '#experience', icon: BriefcaseIcon, label: 'Experience' },
];

export const footerMeta = {
	description: 'Senior Lead Frontend Developer',
	tagline: 'Building scalable frontend systems',
	techStack: 'Next.js + Tailwind CSS + TypeScript',
	brandName: 'IVAN HULAK',
};
