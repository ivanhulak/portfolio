'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

type TGlitchTextProps = {
	text: string;
};

export function GlitchText({ text }: TGlitchTextProps) {
	const [isGlitching, setIsGlitching] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsGlitching(true);
			setTimeout(() => setIsGlitching(false), 200);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<span className={cn('relative inline-block', isGlitching && 'animate-pulse')}>
			<span className="neon-text-cyan relative z-10">{text}</span>
			<span
				className={cn(
					'text-accent absolute top-0 left-0 z-0 opacity-70 transition-transform duration-100',
					{
						'-translate-x-[3px] translate-y-[3px]': isGlitching,
					}
				)}
				aria-hidden
			>
				{text}
			</span>
			<span
				className={cn(
					'text-primary absolute top-0 left-0 z-0 opacity-70 transition-transform duration-100',
					{
						'translate-x-[3px] -translate-y-[3px]': isGlitching,
					}
				)}
				aria-hidden
			>
				{text}
			</span>
		</span>
	);
}
