'use client';

import { ParticleField } from './ParticleField';

export function HeroBackground() {
	return (
		<>
			<ParticleField />
			<div
				className="absolute inset-0 z-0 opacity-[0.03]"
				style={{
					backgroundImage: `
            linear-gradient(var(--neon-cyan) 1px, transparent 1px),
            linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)
          `,
					backgroundSize: '80px 80px',
				}}
			/>
			<div className="animate-float absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-[var(--neon-cyan)]/10 blur-[150px]" />
			<div
				className="animate-float absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[var(--neon-magenta)]/10 blur-[150px]"
				style={{ animationDelay: '-3s' }}
			/>
			<div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--neon-green)]/5 blur-[200px]" />
		</>
	);
}
