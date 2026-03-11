'use client';

import { cn } from '@/lib/utils';

import { BriefcaseIcon, CalendarIcon, MapPinIcon } from '@/assets/icons';

import { experienceColorStyles, type TExperience } from './config';

type TExperienceTimelineItemProps = {
	experience: TExperience;
	index: number;
	isInView: boolean;
};

export function ExperienceTimelineItem({
	experience,
	index,
	isInView,
}: TExperienceTimelineItemProps) {
	const isEven = index % 2 === 0;
	const colors = experienceColorStyles[experience.color];

	return (
		<div
			className={cn(
				'relative mb-16 flex gap-8 last:mb-0',
				isEven ? 'md:flex-row' : 'md:flex-row-reverse'
			)}
			style={{
				opacity: isInView ? 1 : 0,
				transform: isInView ? 'translateY(0)' : 'translateY(30px)',
				transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 200}ms`,
			}}
		>
			<div
				className={cn(
					'absolute left-8 z-10 mt-8 h-5 w-5 -translate-x-1/2 rounded-full md:left-1/2',
					colors.dot
				)}
			>
				<div
					className="absolute inset-0 animate-ping rounded-full opacity-30"
					style={{ backgroundColor: colors.pingBackground }}
				/>
			</div>

			<div className={cn('ml-16 flex-1 md:ml-0', isEven ? 'md:pr-16 md:text-right' : 'md:pl-16')}>
				<div
					className={cn(
						'group bg-card/80 border-border rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500',
						colors.border,
						colors.glow
					)}
				>
					<div className={cn('mb-4 flex flex-wrap items-center gap-3', isEven && 'md:justify-end')}>
						<div className={cn('flex items-center gap-2', colors.text)}>
							<CalendarIcon className="size-3.5" />
							<span className="font-mono text-sm">{experience.period}</span>
						</div>
						<div className="text-muted-foreground flex items-center gap-2">
							<MapPinIcon className="size-3.5" />
							<span className="text-sm">{experience.location}</span>
						</div>
					</div>

					<h3
						className={cn(
							'text-foreground mb-2 text-2xl font-bold transition-colors duration-300',
							colors.hoverText
						)}
					>
						{experience.role}
					</h3>
					<div className={cn('mb-4 flex items-center gap-2', isEven && 'md:justify-end')}>
						<BriefcaseIcon className="text-muted-foreground size-4" />
						<span className="text-muted-foreground font-medium">{experience.company}</span>
					</div>

					<p className="text-muted-foreground mb-6 text-sm leading-relaxed">
						{experience.description}
					</p>

					<div className={cn('flex flex-wrap gap-2', isEven && 'md:justify-end')}>
						{experience.technologies.map((technology) => (
							<span
								key={technology}
								className="bg-secondary/50 border-border/50 text-foreground rounded-lg border px-3 py-1.5 font-mono text-xs"
							>
								{technology}
							</span>
						))}
					</div>
				</div>
			</div>

			<div className="hidden flex-1 md:block" />
		</div>
	);
}
