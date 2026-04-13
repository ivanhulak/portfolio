'use client';

import Link from 'next/link';

import { Footer, Header } from '@/components/layout';

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<main className="bg-background min-h-screen overflow-hidden">
			<Header />

			<section className="relative flex min-h-screen items-center justify-center px-6 py-32 lg:px-8">
				<div className="bg-primary/12 absolute top-24 left-1/2 h-72 w-72 -translate-x-[140%] rounded-full blur-3xl" />
				<div className="bg-accent/12 absolute right-0 bottom-20 h-80 w-80 translate-x-1/4 rounded-full blur-3xl" />

				<div className="relative z-10 mx-auto w-full max-w-4xl">
					<div className="group relative">
						<div className="from-primary via-accent to-primary absolute inset-[-2px] rounded-[2rem] bg-gradient-to-r opacity-70 blur-sm" />
						<div className="bg-background/90 border-primary/20 relative overflow-hidden rounded-[2rem] border backdrop-blur-xl">
							<div className="from-primary/20 via-accent/20 to-success/20 h-1 w-full bg-gradient-to-r" />

							<div className="grid gap-10 px-8 py-10 md:px-12 md:py-14 lg:grid-cols-[1.15fr_0.85fr]">
								<div>
									<span className="text-primary border-primary/30 bg-primary/10 inline-flex rounded-full border px-4 py-1.5 font-mono text-xs tracking-[0.3em] uppercase">
										System fault
									</span>

									<h1 className="text-foreground mt-6 text-4xl leading-tight font-bold md:text-6xl">
										Unexpected error in the portfolio matrix
									</h1>

									<p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
										Something broke while loading this experience. You can retry the request, or
										jump back to the home page and continue browsing safely.
									</p>

									<div className="mt-8 flex flex-col gap-4 sm:flex-row">
										<button
											type="button"
											onClick={() => reset()}
											className="text-background from-primary to-accent shadow-primary/30 inline-flex items-center justify-center rounded-xl bg-gradient-to-r px-6 py-3.5 font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-2xl"
										>
											Try again
										</button>

										<Link
											href="/"
											className="border-primary/30 text-foreground hover:border-primary hover:text-primary inline-flex items-center justify-center rounded-xl border bg-transparent px-6 py-3.5 font-semibold tracking-[0.2em] uppercase transition-all duration-300"
										>
											Go home
										</Link>
									</div>
								</div>

								<div className="bg-card/70 border-border/60 flex flex-col justify-between rounded-[1.5rem] border p-6">
									<div>
										<p className="text-muted-foreground font-mono text-xs tracking-[0.3em] uppercase">
											Status report
										</p>
										<div className="mt-4 space-y-4">
											<div className="border-border/60 rounded-2xl border p-4">
												<p className="text-primary font-mono text-xs tracking-[0.25em] uppercase">
													Issue
												</p>
												<p className="text-foreground mt-2 text-sm leading-relaxed">
													An uncaught runtime error interrupted this page before it could finish
													rendering.
												</p>
											</div>

											<div className="border-border/60 rounded-2xl border p-4">
												<p className="text-accent font-mono text-xs tracking-[0.25em] uppercase">
													Recovery
												</p>

												<p className="text-foreground mt-2 text-sm leading-relaxed">
													Retry the render first. If the problem persists, return home and open the
													page again from there.
												</p>
											</div>
										</div>
									</div>

									{error.digest ? (
										<div className="border-border/60 mt-6 rounded-2xl border p-4">
											<p className="text-success font-mono text-xs tracking-[0.25em] uppercase">
												Error digest
											</p>
											<p className="text-muted-foreground mt-2 font-mono text-sm break-all">
												{error.digest}
											</p>
										</div>
									) : null}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
