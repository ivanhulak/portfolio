'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { CalendarIcon } from '@/assets/icons';

import { blogColorStyles, blogContent, type TBlogPost } from './config';

type TBlogPostCardProps = {
	post: TBlogPost;
	index: number;
	isInView: boolean;
};

export function BlogPostCard({ post, index, isInView }: TBlogPostCardProps) {
	const colors = blogColorStyles[post.color];

	return (
		<article
			className={cn(
				'group bg-card/50 border-border overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2',
				colors.border,
				colors.glow
			)}
			style={{
				opacity: isInView ? 1 : 0,
				transform: isInView ? 'translateY(0)' : 'translateY(30px)',
				transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms`,
			}}
		>
			<div className="via-success h-2 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

			<div className="p-8">
				<div className="mb-6">
					<span
						className={cn(
							'inline-flex rounded-full border px-4 py-1.5 font-mono text-xs tracking-wider',
							colors.badge
						)}
					>
						{post.category}
					</span>
				</div>

				<Link href={`/blog/${post.slug}`}>
					<h3
						className={cn(
							'text-foreground mb-4 text-xl leading-snug font-bold transition-colors duration-300',
							colors.hoverText
						)}
					>
						{post.title}
					</h3>
				</Link>

				<p className="text-muted-foreground mb-6 text-sm leading-relaxed">{post.excerpt}</p>

				<div className="text-muted-foreground mb-6 flex items-center gap-6 text-xs">
					<div className="flex items-center gap-2">
						<CalendarIcon className="size-3.5" />
						<span>{post.date}</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="font-mono">~</span>
						<span>{post.readTime}</span>
					</div>
				</div>

				<Link
					href={`/blog/${post.slug}`}
					className={cn(
						'group/link inline-flex items-center gap-2 text-sm font-semibold',
						colors.link
					)}
				>
					{blogContent.cardCtaLabel}
					<span className="transition-transform duration-300 group-hover/link:translate-x-1">
						-&gt;
					</span>
				</Link>
			</div>
		</article>
	);
}
