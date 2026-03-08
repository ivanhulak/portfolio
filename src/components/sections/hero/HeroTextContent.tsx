'use client';

import Link from 'next/link';

import { SendIcon } from '@/assets/icons';

import { heroContent, heroSocialLinks } from './config';
import { GlitchText } from './GlitchText';

type THeroTextContentProps = {
	displayText: string;
};

export function HeroTextContent({ displayText }: THeroTextContentProps) {
	return (
		<div className="space-y-8 text-center lg:text-left">
			<div
				className="inline-flex items-center gap-3 rounded-full border border-[var(--neon-green)]/30 bg-[var(--neon-green)]/5 px-5 py-2.5 backdrop-blur-sm"
				style={{ animationDelay: '200ms' }}
			>
				<span className="relative flex h-3 w-3">
					<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon-green)] opacity-75" />
					<span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--neon-green)] shadow-[0_0_10px_var(--neon-green)]" />
				</span>
				<span className="font-mono text-sm tracking-wider text-[var(--neon-green)]">
					{heroContent.status}
				</span>
			</div>

			<div className="space-y-6">
				<p className="text-muted-foreground font-mono text-lg tracking-wider md:text-xl">
					<span className="text-[var(--neon-green)]">{'>'}</span> {heroContent.greeting}
				</p>
				<h1 className="text-6xl font-black tracking-tight md:text-7xl lg:text-8xl">
					<GlitchText text={heroContent.name} />
				</h1>
				<div className="flex h-16 items-center justify-center md:h-20 lg:justify-start">
					<span className="font-mono text-xl md:text-2xl lg:text-3xl">
						<span className="text-[var(--neon-magenta)]">{'>'}</span>{' '}
						<span className="animate-text-shimmer bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-magenta)] to-[var(--neon-cyan)] bg-[length:200%_auto] bg-clip-text text-transparent">
							{displayText}
						</span>
						<span className="ml-1 animate-pulse text-[var(--neon-cyan)]">_</span>
					</span>
				</div>
			</div>

			<p className="text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed lg:mx-0">
				{heroContent.description}
			</p>

			<div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
				<Link
					href={heroContent.primaryCta.href}
					className="group relative overflow-hidden rounded-lg px-8 py-4"
				>
					<span className="absolute inset-0 rounded-lg">
						<span className="animate-gradient-shift absolute inset-[-2px] rounded-lg bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-magenta)] to-[var(--neon-cyan)] bg-[length:200%_100%]" />
						<span className="absolute inset-[2px] rounded-lg bg-[#050508]" />
					</span>
					<span className="text-foreground relative z-10 flex items-center justify-center gap-2 font-semibold tracking-wider uppercase">
						{heroContent.primaryCta.label}
						<span className="text-[var(--neon-cyan)] transition-transform duration-300 group-hover:translate-x-2">
							{'>'}
						</span>
					</span>
				</Link>

				<Link
					href={heroContent.secondaryCta.href}
					className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-magenta)] px-8 py-4 shadow-[0_0_30px_rgba(0,255,255,0.3)]"
				>
					<span className="absolute inset-0 bg-gradient-to-r from-[var(--neon-magenta)] to-[var(--neon-cyan)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
					<span className="text-background relative z-10 flex items-center justify-center gap-2 font-semibold tracking-wider uppercase">
						{heroContent.secondaryCta.label}
						<SendIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
					</span>
				</Link>
			</div>

			<div className="flex items-center justify-center gap-4 pt-6 lg:justify-start">
				{heroSocialLinks.map((social, index) => (
					<a
						key={social.label}
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						className={`group border-border/50 bg-card/30 relative rounded-xl border p-4 backdrop-blur-sm transition-all duration-500 ${social.colorClass}`}
						style={{ animationDelay: `${index * 100}ms` }}
					>
						<social.icon className="text-muted-foreground relative z-10 h-5 w-5 transition-all duration-300 group-hover:scale-110" />
						<span className="sr-only">{social.label}</span>
					</a>
				))}
			</div>
		</div>
	);
}
