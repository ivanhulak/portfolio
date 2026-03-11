'use client';

import { cn } from '@/lib/utils';

import { contactContent } from './config';

type TContactHeaderProps = {
	isInView: boolean;
};

export function ContactHeader({ isInView }: TContactHeaderProps) {
	return (
		<div
			className={cn(
				'mb-20 text-center transition-all duration-1000',
				isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
			)}
		>
			<div className="border-primary/30 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
				<span className="text-primary font-mono text-sm tracking-wider">
					{contactContent.badge}
				</span>
			</div>
			<h2 className="mb-6 text-4xl font-black text-balance md:text-6xl">
				{contactContent.titleStart}{' '}
				<span className="from-primary via-accent to-primary animate-text-shimmer bg-gradient-to-r bg-[length:200%_auto] bg-clip-text text-transparent">
					{contactContent.titleAccent}
				</span>
			</h2>
			<p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
				{contactContent.description}
			</p>
		</div>
	);
}
