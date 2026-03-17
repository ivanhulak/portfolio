'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { contactContent, contactIcons } from './config';

type TContactCtaCardProps = {
	isInView: boolean;
};

export function ContactCtaCard({ isInView }: TContactCtaCardProps) {
	const SparklesIcon = contactIcons.sparkles;
	const MailIcon = contactIcons.mail;
	const ArrowUpRightIcon = contactIcons.arrowUpRight;

	return (
		<div
			className={cn(
				'mx-auto mb-16 max-w-4xl transition-all delay-200 duration-1000',
				isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
			)}
		>
			<div className="group relative">
				<div className="from-primary via-accent to-primary animate-gradient-shift absolute inset-[-2px] rounded-3xl bg-gradient-to-r bg-[length:200%_100%] opacity-50 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
				<div className="from-primary via-accent to-primary animate-gradient-shift absolute inset-[-2px] rounded-3xl bg-gradient-to-r bg-[length:200%_100%]" />

				<div className="bg-background relative rounded-3xl p-12 text-center md:p-16">
					<div className="from-primary/10 to-accent/10 mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r">
						<SparklesIcon className="text-primary h-10 w-10" />
					</div>

					<h3 className="text-foreground mb-6 text-3xl font-bold md:text-4xl">
						{contactContent.ctaTitle}
					</h3>
					<p className="text-muted-foreground mx-auto mb-10 max-w-xl leading-relaxed">
						{contactContent.ctaDescription}
					</p>

					<div className="grid gap-4 md:grid-cols-2">
						{contactContent.ctaOptions.map((option, index) => (
							<Link
								key={option.label}
								href={option.href}
								className={cn(
									'group/btn relative rounded-2xl border p-6 text-left transition-all duration-500',
									index === 0
										? 'from-primary/12 to-accent/12 border-primary/30 hover:border-primary/60 hover:shadow-primary/20 bg-gradient-to-br hover:shadow-2xl'
										: 'border-border/70 bg-card/70 hover:border-accent/50 hover:shadow-accent/15 hover:shadow-2xl'
								)}
							>
								<div className="mb-4 flex items-center justify-between">
									<div
										className={cn(
											'flex h-12 w-12 items-center justify-center rounded-xl',
											index === 0 ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
										)}
									>
										<MailIcon className="h-5 w-5" />
									</div>
									<ArrowUpRightIcon className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
								</div>

								<p className="text-foreground text-lg font-semibold">{option.label}</p>
								<p className="text-muted-foreground mt-2 text-sm leading-relaxed">
									{option.description}
								</p>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
