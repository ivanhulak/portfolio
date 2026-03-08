'use client';

import { useEffect, useRef, useState } from 'react';

import { useInView } from './useInView';

type TAnimatedCounterOptions = {
	end: number;
	duration?: number;
};

export function useAnimatedCounter({ end, duration = 2000 }: TAnimatedCounterOptions) {
	const [count, setCount] = useState(0);
	const counterRef = useRef<HTMLSpanElement>(null);
	const isInView = useInView(counterRef);
	const hasAnimated = useRef(false);

	useEffect(() => {
		if (!isInView || hasAnimated.current) return;
		hasAnimated.current = true;

		let startTime: number;
		const animate = (currentTime: number) => {
			if (!startTime) startTime = currentTime;
			const progress = Math.min((currentTime - startTime) / duration, 1);
			setCount(Math.floor(progress * end));
			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		};

		requestAnimationFrame(animate);
	}, [duration, end, isInView]);

	return { count, counterRef };
}
