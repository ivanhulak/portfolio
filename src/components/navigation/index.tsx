'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { MenuIcon, XIcon } from '@/assets/icons';

import { navItems } from './config';
import { Logotype } from './Logotype';
import { MobileMenu } from './MobileMenu';
import { NavItem } from './NavItem';

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			const sections = navItems.map((item) => item.href.slice(1));
			for (const section of sections.reverse()) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 100) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				'fixed top-0 right-0 left-0 z-50 transition-all duration-700 ease-out',
				scrolled
					? 'border-primary/20 bg-background/90 shadow-primary/10 shadow-lg backdrop-blur-xl'
					: 'bg-transparent'
			)}
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					<Logotype />

					<div className="hidden items-center gap-1 md:flex">
						{navItems.map((item) => (
							<NavItem key={item.name} item={item} activeSection={activeSection} />
						))}

						<Link
							href="#contact"
							className="group relative ml-6 overflow-hidden rounded-lg px-6 py-2.5"
						>
							<span className="absolute inset-0 rounded-lg">
								<span className="from-primary via-accent to-primary animate-gradient-shift absolute inset-[-2px] rounded-lg bg-gradient-to-r bg-[length:200%_100%]" />
								<span className="bg-background absolute inset-[1px] rounded-lg" />
							</span>
							<span className="text-foreground group-hover:text-primary relative z-10 text-sm font-semibold tracking-[0.15em] uppercase transition-colors duration-300">
								Hire Me
							</span>
							<span className="shadow-accent/30 absolute inset-0 rounded-lg opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:shadow-lg" />
						</Link>
					</div>

					<button onClick={() => setIsOpen(!isOpen)} className="group relative p-3 md:hidden">
						<span className="border-primary/30 group-hover:border-primary group-hover:shadow-primary/30 absolute inset-0 rounded-lg border transition-all duration-300 group-hover:shadow-lg" />
						{isOpen ? (
							<XIcon className="text-primary relative z-10 h-6 w-6" />
						) : (
							<MenuIcon className="text-primary relative z-10 h-6 w-6" />
						)}
					</button>
				</div>
			</div>

			<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
		</nav>
	);
}
