'use client';

import { cn } from '@/lib/utils';

import { blogContent } from './config';

type TBlogHeaderProps = {
	isInView: boolean;
};

export function BlogHeader({ isInView }: TBlogHeaderProps) {
	return (
		<div
			className={cn(
				'mb-20 text-center transition-all duration-1000',
				isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
			)}
		>
			<div className="border-success/30 bg-success/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
				<span className="text-success font-mono text-sm tracking-wider">{blogContent.badge}</span>
			</div>
			<h2 className="mb-6 text-4xl font-black text-balance md:text-6xl">
				{blogContent.titleStart}{' '}
				<span className="from-success to-primary bg-gradient-to-r bg-clip-text text-transparent">
					{blogContent.titleAccent}
				</span>
			</h2>
			<p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
				{blogContent.description}
			</p>
		</div>
	);
}
