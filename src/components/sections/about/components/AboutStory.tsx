'use client';

import { aboutContent } from '../config';

type TAboutStoryProps = {
	isInView: boolean;
};

export function AboutStory({ isInView }: TAboutStoryProps) {
	return (
		<div
			className={`transition-all delay-300 duration-1000 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
		>
			<h3 className="mb-8 text-3xl font-bold md:text-4xl">
				{aboutContent.journeyTitleStart}{' '}
				<span className="text-[var(--neon-magenta)]">{aboutContent.journeyTitleAccent}</span>
			</h3>
			<div className="text-muted-foreground space-y-6 leading-relaxed">
				{aboutContent.storyParagraphs.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>
		</div>
	);
}
