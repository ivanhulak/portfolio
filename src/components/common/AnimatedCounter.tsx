'use client';

import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

type TAnimatedCounterProps = {
	end: number;
	duration?: number;
	suffix?: string;
};

export function AnimatedCounter({ end, duration = 2000, suffix = '' }: TAnimatedCounterProps) {
	const { count, counterRef } = useAnimatedCounter({ end, duration });

	return (
		<span ref={counterRef}>
			{count}
			{suffix}
		</span>
	);
}
