'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { ChevronIcon } from '@/assets/icons';

import { heroContent } from './config';

export function ScrollIndicator() {
	return (
		<Link
			href="#about"
			className={cn(
				'text-muted-foreground group absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 transition-all duration-500',
				'hover:text-primary'
			)}
		>
			<span className="font-mono text-xs tracking-[0.3em] uppercase">
				{heroContent.scrollLabel}
			</span>
			<div className="relative">
				<ChevronIcon className="h-6 w-6 animate-bounce" />
				<div className="bg-primary absolute inset-0 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50" />
			</div>
		</Link>
	);
}
