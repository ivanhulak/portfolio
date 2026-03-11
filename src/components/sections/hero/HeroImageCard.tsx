'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

import { heroBadges, heroContent } from './config';

export function HeroImageCard() {
	return (
		<div className="relative flex justify-center lg:justify-end">
			<div className="group relative">
				<div className="from-primary via-accent to-primary animate-gradient-shift absolute inset-[-20px] rounded-3xl bg-gradient-to-r opacity-30 blur-[60px] transition-opacity duration-1000 group-hover:opacity-50" />

				<div className="absolute inset-[-4px] overflow-hidden rounded-2xl">
					<div className="from-primary via-accent to-primary animate-gradient-shift absolute inset-0 bg-gradient-to-r bg-[length:300%_100%]" />
				</div>

				<div className="bg-background relative overflow-hidden rounded-2xl p-1">
					<Image
						src={heroContent.image.src}
						alt={heroContent.image.alt}
						width={heroContent.image.width}
						height={heroContent.image.height}
						className="relative z-10 w-full max-w-lg rounded-xl object-cover"
						priority
					/>
					<div
						className="pointer-events-none absolute inset-0 z-20 opacity-10"
						style={{
							backgroundImage:
								'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 2px, rgba(0,255,255,0.03) 4px)',
						}}
					/>
				</div>

				{heroBadges.map((badge) => (
					<div
						key={badge.title}
						className={cn(
							'bg-background/95 animate-float absolute z-30 rounded-xl border px-5 py-3 backdrop-blur-xl',
							badge.positionClass,
							badge.borderClass,
							badge.shadowClass
						)}
						style={badge.style}
					>
						<span className={cn('font-mono text-sm font-bold', badge.textClass)}>
							{badge.title}
						</span>
						<span className="text-muted-foreground block text-xs">{badge.subtitle}</span>
					</div>
				))}
			</div>
		</div>
	);
}
