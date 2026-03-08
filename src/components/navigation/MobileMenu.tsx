import { Dispatch, SetStateAction } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { navItems } from './config';
import { NavItem } from './NavItem';

type TProps = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileMenu = ({ isOpen, setIsOpen }: TProps) => {
	return (
		<div
			className={cn(
				'absolute top-full right-0 left-0 overflow-hidden border-b border-[var(--neon-cyan)]/20 bg-[#050508]/98 backdrop-blur-xl transition-all duration-500 ease-out md:hidden',
				isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
			)}
		>
			<div className="space-y-2 px-6 py-6">
				{navItems.map((item, index) => (
					<NavItem
						key={item.name}
						item={item}
						mobile
						index={index}
						isOpen={isOpen}
						onClick={() => setIsOpen(false)}
					/>
				))}
				<div className="pt-4">
					<Link
						href="#contact"
						onClick={() => setIsOpen(false)}
						className="block rounded-lg border border-[var(--neon-magenta)] py-4 text-center text-sm font-semibold tracking-[0.2em] text-[var(--neon-magenta)] uppercase transition-all duration-300 hover:bg-[var(--neon-magenta)]/10 hover:shadow-[0_0_30px_var(--neon-magenta)]"
					>
						Hire Me
					</Link>
				</div>
			</div>
		</div>
	);
};
