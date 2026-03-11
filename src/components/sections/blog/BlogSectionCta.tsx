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
				className={cn(
					'group inline-flex items-center gap-3 rounded-xl border px-8 py-4 font-semibold tracking-wider uppercase transition-all duration-500',
					'border-success/30 bg-success/5 text-success',
					'hover:border-success/50 hover:bg-success/10 hover:shadow-success/20 hover:shadow-lg'
				)}
			>
				{blogContent.ctaLabel}
				<span className="transition-transform duration-300 group-hover:translate-x-2">-&gt;</span>
			</Link>
		</div>
	);
}
