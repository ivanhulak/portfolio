'use client';

import { useRef } from 'react';

import { useInView } from '@/hooks/useInView';

import { AboutBackground } from './components/AboutBackground';
import { AboutHeader } from './components/AboutHeader';
import { AboutStory } from './components/AboutStory';
import { AboutTechStats } from './components/AboutTechStats';
import { SkillsGrid } from './components/SkillsGrid';

export function AboutSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef);

	return (
		<section id="about" ref={sectionRef} className="relative overflow-hidden py-32">
			<AboutBackground />

			<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
				<AboutHeader isInView={isInView} />
				<SkillsGrid isInView={isInView} />

				<div className="grid items-start gap-16 lg:grid-cols-2">
					<AboutStory isInView={isInView} />
					<AboutTechStats isInView={isInView} />
				</div>
			</div>
		</section>
	);
}
