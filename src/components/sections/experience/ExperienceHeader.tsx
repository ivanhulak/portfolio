'use client';

import { cn } from '@/lib/utils';

import { experienceContent } from './config';

type TExperienceHeaderProps = {
	isInView: boolean;
};

export function ExperienceHeader({ isInView }: TExperienceHeaderProps) {
	return (
		<div
			className={cn(
				'mb-20 text-center transition-all duration-1000',
				isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
			)}
		>
			<div className="border-accent/30 bg-accent/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
				<span className="text-accent font-mono text-sm tracking-wider">
					{experienceContent.badge}
				</span>
			</div>
			<h2 className="mb-6 text-4xl font-black text-balance md:text-6xl">
				{experienceContent.titleStart}{' '}
				<span className="from-accent to-primary bg-gradient-to-r bg-clip-text text-transparent">
					{experienceContent.titleAccent}
				</span>
			</h2>
			<p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
				{experienceContent.description}
			</p>
		</div>
	);
}
