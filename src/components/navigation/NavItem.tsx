import Link from 'next/link';

import type { TNavItemConfig } from './config';

type TNavItemProps = {
	item: TNavItemConfig;
	activeSection?: string;
	mobile?: boolean;
	onClick?: () => void;
	index?: number;
	isOpen?: boolean;
};

export function NavItem({
	item,
	activeSection = '',
	mobile = false,
	onClick,
	index = 0,
	isOpen = false,
}: TNavItemProps) {
	if (mobile) {
		return (
			<Link
				href={item.href}
				onClick={onClick}
				className="text-muted-foreground block rounded-lg border-l-2 border-transparent px-4 py-4 text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:border-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/5 hover:text-[var(--neon-cyan)] hover:shadow-[inset_0_0_20px_rgba(0,255,255,0.1)]"
				style={{
					transitionDelay: isOpen ? `${index * 75}ms` : '0ms',
				}}
			>
				<span className="mr-2 font-mono text-[var(--neon-cyan)]">{`0${index + 1}.`}</span>
				{item.name}
			</Link>
		);
	}

	return (
		<Link key={item.name} href={item.href} className="group relative px-4 py-2">
			<span
				className={`relative z-10 text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
					activeSection === item.href.slice(1)
						? 'neon-text-cyan text-[var(--neon-cyan)]'
						: 'text-muted-foreground group-hover:text-foreground'
				}`}
			>
				{item.name}
			</span>

			<span
				className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent transition-all duration-500 ${
					activeSection === item.href.slice(1)
						? 'w-full shadow-[0_0_10px_var(--neon-cyan)]'
						: 'w-0 group-hover:w-full'
				}`}
			/>

			<span
				className={`absolute inset-0 rounded-lg transition-all duration-500 ${
					activeSection === item.href.slice(1)
						? 'bg-[var(--neon-cyan)]/5'
						: 'bg-transparent group-hover:bg-[var(--neon-cyan)]/5'
				}`}
			/>
		</Link>
	);
}
