'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { blogContent } from './config';

type TBlogSectionCtaProps = {
	isInView: boolean;
};

export function BlogSectionCta({ isInView }: TBlogSectionCtaProps) {
	return (
		<div
			className={cn(
				'text-center transition-all delay-500 duration-1000',
				isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
			)}
		>
			<Link
				href={blogContent.ctaHref}
				className="group inline-flex items-center gap-3 rounded-xl border border-[var(--neon-green)]/30 bg-[var(--neon-green)]/5 px-8 py-4 font-semibold tracking-wider text-[var(--neon-green)] uppercase transition-all duration-500 hover:border-[var(--neon-green)]/50 hover:bg-[var(--neon-green)]/10 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]"
			>
				{blogContent.ctaLabel}
				<span className="transition-transform duration-300 group-hover:translate-x-2">-&gt;</span>
			</Link>
		</div>
	);
}
