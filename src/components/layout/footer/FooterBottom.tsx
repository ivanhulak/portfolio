import { CodeIcon, SparklesIcon } from '@/assets/icons';

import { footerMeta } from './config';

type TFooterBottomProps = {
	currentYear: number;
};

export function FooterBottom({ currentYear }: TFooterBottomProps) {
	return (
		<div className="border-border/30 mt-12 border-t pt-8">
			<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
				<p className="text-muted-foreground flex items-center gap-2 font-mono text-sm">
					<CodeIcon className="h-4 w-4 text-[var(--neon-cyan)]" />
					{currentYear} {footerMeta.brandName}
					<span className="text-border">|</span>
					Built with
					<SparklesIcon className="h-4 w-4 animate-pulse text-[var(--neon-magenta)]" />
				</p>

				<p className="text-muted-foreground/60 font-mono text-xs">
					<span className="text-[var(--neon-green)]">{'<'}</span>
					{footerMeta.techStack}
					<span className="text-[var(--neon-green)]">{' />'}</span>
				</p>
			</div>
		</div>
	);
}
