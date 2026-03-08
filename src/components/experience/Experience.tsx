'use client';

import { useRef } from 'react';

import { useInView } from '@/hooks/useInView';

import { ExperienceBackground } from './components/ExperienceBackground';
import { ExperienceHeader } from './components/ExperienceHeader';
import { ExperienceTimelineItem } from './components/ExperienceTimelineItem';
import { experiences } from './config';

export function ExperienceSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef);

	return (
		<section id="experience" ref={sectionRef} className="bg-card/30 relative overflow-hidden py-32">
			<ExperienceBackground />

			<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
				<ExperienceHeader isInView={isInView} />

				<div className="mx-auto max-w-4xl">
					<div className="relative">
						<div className="absolute top-0 bottom-0 left-8 w-[2px] bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-magenta)] to-[var(--neon-green)] md:left-1/2 md:-translate-x-1/2" />

						{experiences.map((experience, index) => (
							<ExperienceTimelineItem
								key={experience.company + experience.period}
								experience={experience}
								index={index}
								isInView={isInView}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
