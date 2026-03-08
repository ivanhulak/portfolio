'use client';

import { cn } from '@/lib/utils';

import { experienceContent } from '../config';

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
			<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--neon-magenta)]/30 bg-[var(--neon-magenta)]/5 px-4 py-2">
				<span className="font-mono text-sm tracking-wider text-[var(--neon-magenta)]">
					{experienceContent.badge}
				</span>
			</div>
			<h2 className="mb-6 text-4xl font-black text-balance md:text-6xl">
				{experienceContent.titleStart}{' '}
				<span className="bg-gradient-to-r from-[var(--neon-magenta)] to-[var(--neon-cyan)] bg-clip-text text-transparent">
					{experienceContent.titleAccent}
				</span>
			</h2>
			<p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
				{experienceContent.description}
			</p>
		</div>
	);
}
