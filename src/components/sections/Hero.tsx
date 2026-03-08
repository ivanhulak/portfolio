'use client';

import { useEffect, useState } from 'react';

import { heroRoles } from './hero/config';
import { HeroBackground } from './hero/HeroBackground';
import { HeroImageCard } from './hero/HeroImageCard';
import { HeroTextContent } from './hero/HeroTextContent';
import { ScrollIndicator } from './hero/ScrollIndicator';
import { useHeroTypewriter } from './hero/useHeroTypewriter';

export function HeroSection() {
	const [mounted, setMounted] = useState(false);
	const displayText = useHeroTypewriter(heroRoles);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-hidden">
			<HeroBackground />

			<div
				className={`relative z-10 mx-auto max-w-7xl px-6 py-20 transition-all duration-1000 lg:px-8 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
			>
				<div className="grid items-center gap-16 lg:grid-cols-2">
					<HeroTextContent displayText={displayText} />
					<HeroImageCard />
				</div>
			</div>

			<ScrollIndicator />
		</section>
	);
}
