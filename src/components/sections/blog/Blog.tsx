'use client';

import { useRef } from 'react';

import { useInView } from '@/hooks/useInView';

import { BlogBackground } from './BlogBackground';
import { BlogHeader } from './BlogHeader';
import { BlogPostCard } from './BlogPostCard';
import { BlogSectionCta } from './BlogSectionCta';
import { blogPosts } from './config';

export function BlogSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef);

	return (
		<section id="blog" ref={sectionRef} className="bg-card/30 relative overflow-hidden py-32">
			<BlogBackground />

			<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
				<BlogHeader isInView={isInView} />

				<div className="mb-16 grid gap-8 md:grid-cols-3">
					{blogPosts.map((post, index) => (
						<BlogPostCard key={post.slug} post={post} index={index} isInView={isInView} />
					))}
				</div>

				<BlogSectionCta isInView={isInView} />
			</div>
		</section>
	);
}
