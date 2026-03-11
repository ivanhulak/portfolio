'use client';

export function AboutBackground() {
	return (
		<div className="absolute inset-0 overflow-hidden">
			<div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[var(--neon-cyan)]/5 blur-[150px]" />
			<div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[var(--neon-magenta)]/5 blur-[150px]" />
		</div>
	);
}
