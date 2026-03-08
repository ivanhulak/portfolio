import Link from 'next/link';

export function Logotype() {
	return (
		<Link href="/" className="group relative text-2xl font-black tracking-wider">
			<span className="animate-text-shimmer relative z-10 bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-magenta)] to-[var(--neon-cyan)] bg-[length:200%_auto] bg-clip-text text-transparent">
				IVENGO
			</span>
			<span className="absolute inset-0 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-magenta)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70" />
		</Link>
	);
}
