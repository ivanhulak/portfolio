'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

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
			className={`fixed top-0 right-0 left-0 z-50 transition-all duration-700 ease-out ${
				scrolled
					? 'border-b border-[var(--neon-cyan)]/20 bg-[#050508]/90 shadow-[0_0_30px_rgba(0,255,255,0.1)] backdrop-blur-xl'
					: 'bg-transparent'
			}`}
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
								<span className="animate-gradient-shift absolute inset-[-2px] rounded-lg bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-magenta)] to-[var(--neon-cyan)] bg-[length:200%_100%]" />
								<span className="absolute inset-[1px] rounded-lg bg-[#050508]" />
							</span>
							<span className="text-foreground relative z-10 text-sm font-semibold tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-[var(--neon-cyan)]">
								Hire Me
							</span>
							<span className="absolute inset-0 rounded-lg opacity-0 shadow-[0_0_30px_var(--neon-magenta)] transition-all duration-500 group-hover:opacity-100" />
						</Link>
					</div>

					<button onClick={() => setIsOpen(!isOpen)} className="group relative p-3 md:hidden">
						<span className="absolute inset-0 rounded-lg border border-[var(--neon-cyan)]/30 transition-all duration-300 group-hover:border-[var(--neon-cyan)] group-hover:shadow-[0_0_20px_var(--neon-cyan)]" />
						{isOpen ? (
							<XIcon className="relative z-10 h-6 w-6 text-[var(--neon-cyan)]" />
						) : (
							<MenuIcon className="relative z-10 h-6 w-6 text-[var(--neon-cyan)]" />
						)}
					</button>
				</div>
			</div>

			<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
		</nav>
	);
}
