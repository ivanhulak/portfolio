import Link from 'next/link';

import { Footer, Header } from '@/components/layout';

export default function NotFound() {
	return (
		<main className="bg-background min-h-screen overflow-hidden">
			<Header />

			<section className="relative flex min-h-screen items-center justify-center px-6 py-32 lg:px-8">
				<div className="bg-accent/10 absolute top-24 right-0 h-72 w-72 translate-x-1/4 rounded-full blur-3xl" />
				<div className="bg-primary/10 absolute bottom-12 left-0 h-80 w-80 -translate-x-1/4 rounded-full blur-3xl" />

				<div className="relative z-10 mx-auto w-full max-w-4xl">
					<div className="group relative">
						<div className="from-primary via-accent to-primary absolute inset-[-2px] rounded-[2rem] bg-gradient-to-r opacity-70 blur-sm" />
						<div className="bg-background/90 border-primary/20 relative overflow-hidden rounded-[2rem] border backdrop-blur-xl">
							<div className="from-accent/20 via-primary/20 to-success/20 h-1 w-full bg-gradient-to-r" />

							<div className="grid gap-10 px-8 py-10 md:px-12 md:py-14 lg:grid-cols-[1.15fr_0.85fr]">
								<div>
									<span className="text-accent border-accent/30 bg-accent/10 inline-flex rounded-full border px-4 py-1.5 font-mono text-xs tracking-[0.3em] uppercase">
										Error 404
									</span>

									<h1 className="text-foreground mt-6 text-4xl leading-tight font-bold md:text-6xl">
										I can&apos;t find the page you searched for
									</h1>

									<p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
										The route may have moved, the link may be outdated, or this page never existed
										in the first place. Head back home and launch a new search from there.
									</p>

									<div className="mt-8 flex flex-col gap-4 sm:flex-row">
										<Link
											href="/"
											className="text-background from-primary to-accent shadow-primary/30 inline-flex items-center justify-center rounded-xl bg-gradient-to-r px-6 py-3.5 font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-2xl"
										>
											Go home
										</Link>

										<Link
											href="/#contact"
											className="border-primary/30 text-foreground hover:border-primary hover:text-primary inline-flex items-center justify-center rounded-xl border bg-transparent px-6 py-3.5 font-semibold tracking-[0.2em] uppercase transition-all duration-300"
										>
											Report broken link
										</Link>
									</div>
								</div>

								<div className="bg-card/70 border-border/60 rounded-[1.5rem] border p-6">
									<p className="text-muted-foreground font-mono text-xs tracking-[0.3em] uppercase">
										Navigation help
									</p>

									<div className="mt-4 space-y-4">
										<div className="border-border/60 rounded-2xl border p-4">
											<p className="text-primary font-mono text-xs tracking-[0.25em] uppercase">
												Why this happened
											</p>
											<p className="text-foreground mt-2 text-sm leading-relaxed">
												Your requested page did not match any active route in this portfolio.
											</p>
										</div>

										<div className="border-border/60 rounded-2xl border p-4">
											<p className="text-success font-mono text-xs tracking-[0.25em] uppercase">
												Best next step
											</p>
											<p className="text-foreground mt-2 text-sm leading-relaxed">
												Return to the home page to browse projects, experience, blog posts, or
												contact details from the main navigation.
											</p>
										</div>
									</div>

									<div className="border-border/60 mt-6 rounded-2xl border p-4">
										<p className="text-accent font-mono text-xs tracking-[0.25em] uppercase">
											Requested status
										</p>
										<p className="text-muted-foreground mt-2 font-mono text-sm">
											404 / route not found
										</p>
									</div>
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
