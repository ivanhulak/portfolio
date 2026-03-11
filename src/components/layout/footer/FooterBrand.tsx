import Link from 'next/link';

import { footerMeta } from './config';

export function FooterBrand() {
	return (
		<div className="text-center md:text-left">
			<Link href="/" className="group inline-block">
				<span className="group-hover:animate-text-shimmer bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-magenta)] to-[var(--neon-cyan)] bg-[length:200%_auto] bg-clip-text text-3xl font-black tracking-wider text-transparent">
					{footerMeta.brandName}
				</span>
			</Link>
			<p className="text-muted-foreground mt-3 font-mono text-sm">{footerMeta.description}</p>
			<p className="text-muted-foreground/60 mt-2 text-xs">{footerMeta.tagline}</p>
		</div>
	);
}
