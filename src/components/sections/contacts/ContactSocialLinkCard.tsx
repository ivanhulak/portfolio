import Link from 'next/link';

import { cn } from '@/lib/utils';

import { contactSocialColorStyles, type TContactSocialLink } from './config';

type TContactSocialLinkCardProps = {
	socialLink: TContactSocialLink;
	index: number;
};

export function ContactSocialLinkCard({ socialLink, index }: TContactSocialLinkCardProps) {
	const colors = contactSocialColorStyles[socialLink.color];

	return (
		<Link
			href={socialLink.href}
			target={socialLink.isExternal ? '_blank' : undefined}
			rel={socialLink.isExternal ? 'noopener noreferrer' : undefined}
			className={cn(
				'group bg-card/50 border-border flex flex-col items-center gap-4 rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500',
				colors.border,
				colors.glow,
				colors.background
			)}
			style={{ transitionDelay: `${index * 100}ms` }}
		>
			<div className="relative">
				<socialLink.icon
					className={cn(
						'text-muted-foreground h-8 w-8 transition-all duration-300 group-hover:scale-110',
						colors.icon
					)}
				/>
			</div>
			<div className="text-center">
				<p className="text-foreground mb-1 font-semibold">{socialLink.name}</p>
				<p className="text-muted-foreground font-mono text-xs">{socialLink.username}</p>
			</div>
		</Link>
	);
}
