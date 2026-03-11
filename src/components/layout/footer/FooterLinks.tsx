import Link from 'next/link';

import { footerLinks } from './config';

export function FooterLinks() {
	return (
		<nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
			{footerLinks.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className="text-muted-foreground text-sm transition-all duration-300 hover:text-[var(--neon-cyan)] hover:drop-shadow-[0_0_8px_var(--neon-cyan)]"
				>
					{link.label}
				</Link>
			))}
		</nav>
	);
}
