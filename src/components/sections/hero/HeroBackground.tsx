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
            linear-gradient(var(--color-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
          `,
					backgroundSize: '80px 80px',
				}}
			/>
			<div className="bg-primary/10 animate-float absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full blur-[150px]" />
			<div
				className="bg-accent/10 animate-float absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full blur-[150px]"
				style={{ animationDelay: '-3s' }}
			/>
			<div className="bg-success/5 absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]" />
		</>
	);
}
