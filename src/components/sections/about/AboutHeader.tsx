'use client';

import { aboutContent } from './config';

type TAboutHeaderProps = {
	isInView: boolean;
};

export function AboutHeader({ isInView }: TAboutHeaderProps) {
	return (
		<div
			className={`mb-20 text-center transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
		>
			<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--neon-cyan)]/30 bg-[var(--neon-cyan)]/5 px-4 py-2">
				<span className="font-mono text-sm tracking-wider text-[var(--neon-cyan)]">
					{aboutContent.badge}
				</span>
			</div>
			<h2 className="mb-6 text-4xl font-black text-balance md:text-6xl">
				{aboutContent.titleStart}{' '}
				<span className="bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-magenta)] bg-clip-text text-transparent">
					{aboutContent.titleAccent}
				</span>
			</h2>
			<p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
				{aboutContent.description}
			</p>
		</div>
	);
}
