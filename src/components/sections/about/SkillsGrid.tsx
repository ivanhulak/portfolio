'use client';

import { cn } from '@/lib/utils';

import { aboutSkillColorClasses, aboutSkills } from './config';

type TSkillsGridProps = {
	isInView: boolean;
};

export function SkillsGrid({ isInView }: TSkillsGridProps) {
	return (
		<div className="mb-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{aboutSkills.map((skill, index) => {
				const colors = aboutSkillColorClasses[skill.color];
				const SkillIcon = skill.icon;
				return (
					<div
						key={skill.title}
						className={cn(
							'group bg-card/50 relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2',
							colors.border,
							colors.glow
						)}
						style={{
							transitionDelay: `${index * 100}ms`,
							opacity: isInView ? 1 : 0,
							transform: isInView ? 'translateY(0)' : 'translateY(20px)',
						}}
					>
						<div
							className={cn(
								'mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110',
								colors.bg
							)}
						>
							<SkillIcon className={cn('h-7 w-7', colors.text)} />
						</div>

						<h3
							className={cn(
								'text-foreground mb-3 text-xl font-bold transition-colors duration-300',
								colors.hoverText
							)}
						>
							{skill.title}
						</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>

						<div
							className={cn(
								'absolute top-0 right-0 h-20 w-20 rounded-bl-[100px] opacity-0 transition-opacity duration-500 group-hover:opacity-100',
								colors.bg
							)}
						/>
					</div>
				);
			})}
		</div>
	);
}
