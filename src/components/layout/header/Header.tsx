'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { MenuIcon, XIcon } from '@/assets/icons';

import { headerLinks } from './config';
import { HeaderAction } from './HeaderAction';
import { Logotype } from './Logotype';
import { MobileMenu } from './MobileMenu';
import { NavItem } from './NavItem';

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			const sections = headerLinks.map((item) => item.href.slice(1));
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

		handleScroll();
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
						{headerLinks.map((item) => (
							<NavItem key={item.name} item={item} activeSection={activeSection} />
						))}
						<HeaderAction />
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
