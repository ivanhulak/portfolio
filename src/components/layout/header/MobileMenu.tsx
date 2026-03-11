import { Dispatch, SetStateAction } from 'react';

import { cn } from '@/lib/utils';

import { headerLinks } from './config';
import { HeaderAction } from './HeaderAction';
import { NavItem } from './NavItem';

type TMobileMenuProps = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileMenu = ({ isOpen, setIsOpen }: TMobileMenuProps) => {
	return (
		<div
			className={cn(
				'border-primary/20 bg-background/98 absolute top-full right-0 left-0 overflow-hidden border-b backdrop-blur-xl transition-all duration-500 ease-out md:hidden',
				isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
			)}
		>
			<div className="space-y-2 px-6 py-6">
				{headerLinks.map((item, index) => (
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
					<HeaderAction mobile onClick={() => setIsOpen(false)} />
				</div>
			</div>
		</div>
	);
};
