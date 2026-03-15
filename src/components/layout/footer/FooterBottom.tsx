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
					<CodeIcon className="text-neon-cyan-soft h-4 w-4" />
					{currentYear} {footerMeta.brandName}
					<span className="text-border">|</span>
					Built with
					<SparklesIcon className="text-neon-magenta-soft h-4 w-4 animate-pulse" />
				</p>

				<p className="text-muted-foreground/60 font-mono text-xs">
					<span className="text-neon-green-soft">{'<'}</span>
					{footerMeta.techStack}
					<span className="text-neon-green-soft">{' />'}</span>
				</p>
			</div>
		</div>
	);
}
