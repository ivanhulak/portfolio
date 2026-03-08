'use client';

import { AnimatedCounter } from '@/components/common/AnimatedCounter';

import { aboutContent, aboutStats, aboutTechnologies } from '../config';

type TAboutTechStatsProps = {
	isInView: boolean;
};

export function AboutTechStats({ isInView }: TAboutTechStatsProps) {
	return (
		<div
			className={`space-y-8 transition-all delay-500 duration-1000 ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
		>
			<div className="glow-card rounded-2xl p-8">
				<h4 className="mb-6 flex items-center gap-3 text-xl font-bold">
					<span className="text-[var(--neon-cyan)]">{'<'}</span>
					{aboutContent.techStackTitle}
					<span className="text-[var(--neon-cyan)]">{'/>'}</span>
				</h4>
				<div className="flex flex-wrap gap-3">
					{aboutTechnologies.map((tech, index) => (
						<span
							key={tech}
							className="bg-secondary/50 text-foreground border-border/50 cursor-default rounded-lg border px-4 py-2 font-mono text-sm transition-all duration-300 hover:border-[var(--neon-cyan)]/50 hover:text-[var(--neon-cyan)] hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]"
							style={{ animationDelay: `${index * 50}ms` }}
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			<div className="grid grid-cols-3 gap-4">
				{aboutStats.map((stat) => (
					<div key={stat.label} className="glow-card rounded-xl p-6 text-center">
						<p className={`mb-2 text-4xl font-black ${stat.textClass}`}>
							<AnimatedCounter end={stat.value} suffix={stat.suffix} />
						</p>
						<p className="text-muted-foreground font-mono text-sm">{stat.label}</p>
					</div>
				))}
			</div>
		</div>
	);
}
