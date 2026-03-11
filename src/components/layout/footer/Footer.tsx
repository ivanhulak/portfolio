'use client';

import { FooterBottom } from './FooterBottom';
import { FooterBrand } from './FooterBrand';
import { FooterLinks } from './FooterLinks';
import { FooterSocialLinks } from './FooterSocialLinks';

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-border/50 relative border-t bg-[#050508]">
			<div className="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--neon-cyan)]/50 to-transparent" />

			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
				<div className="grid items-center gap-12 md:grid-cols-3">
					<FooterBrand />
					<FooterLinks />
					<FooterSocialLinks />
				</div>

				<FooterBottom currentYear={currentYear} />
			</div>

			<div className="h-1 bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-magenta)] to-[var(--neon-green)]" />
		</footer>
	);
}
