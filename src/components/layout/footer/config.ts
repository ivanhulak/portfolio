import type { FC, SVGProps } from 'react';

import { GithubIcon, InstagramIcon, linkedinIcon, MailIcon, SendIcon } from '@/assets/icons';

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
	{ href: '#projects', label: 'Projects' },
	{ href: '#blog', label: 'Blog' },
	{ href: '#contact', label: 'Contact' },
];

export const footerSocialLinks: TFooterSocialLink[] = [
	{ href: 'https://t.me/', icon: SendIcon, label: 'Telegram', external: true },
	{ href: 'https://linkedin.com/', icon: linkedinIcon, label: 'LinkedIn', external: true },
	{ href: 'https://instagram.com/', icon: InstagramIcon, label: 'Instagram', external: true },
	{ href: 'https://github.com/', icon: GithubIcon, label: 'GitHub', external: true },
	{ href: 'mailto:contact@ivengo.dev', icon: MailIcon, label: 'Email' },
];

export const footerMeta = {
	description: 'Senior Frontend Developer',
	tagline: 'Crafting digital experiences',
	techStack: 'Next.js + Tailwind CSS + TypeScript',
	brandName: 'IVENGO',
};
