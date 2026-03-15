import Link from 'next/link';

import { footerSocialLinks } from './config';

export function FooterSocialLinks() {
	return (
		<div className="flex items-center justify-center gap-3 md:justify-end">
			{footerSocialLinks.map((social) => (
				<Link
					key={social.label}
					href={social.href}
					target={social.external ? '_blank' : undefined}
					rel={social.external ? 'noopener noreferrer' : undefined}
					className="group border-border/30 text-muted-foreground hover:border-neon-cyan-soft/30 hover:bg-neon-cyan-soft/5 hover:text-neon-cyan-soft rounded-xl border p-3 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]"
					aria-label={social.label}
				>
					<social.icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
				</Link>
			))}
		</div>
	);
}
