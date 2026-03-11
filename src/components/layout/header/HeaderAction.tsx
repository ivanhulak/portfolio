import Link from 'next/link';

type THeaderActionProps = {
	onClick?: () => void;
	mobile?: boolean;
};

export function HeaderAction({ onClick, mobile = false }: THeaderActionProps) {
	if (mobile) {
		return (
			<Link
				href="#contact"
				onClick={onClick}
				className="border-accent text-accent hover:bg-accent/10 hover:shadow-accent/30 block rounded-lg border py-4 text-center text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg"
			>
				Hire Me
			</Link>
		);
	}

	return (
		<Link href="#contact" className="group relative ml-6 overflow-hidden rounded-lg px-6 py-2.5">
			<span className="absolute inset-0 rounded-lg">
				<span className="from-primary via-accent to-primary animate-gradient-shift absolute inset-[-2px] rounded-lg bg-gradient-to-r bg-[length:200%_100%]" />
				<span className="bg-background absolute inset-[1px] rounded-lg" />
			</span>
			<span className="text-foreground group-hover:text-primary relative z-10 text-sm font-semibold tracking-[0.15em] uppercase transition-colors duration-300">
				Hire Me
			</span>
			<span className="shadow-accent/30 absolute inset-0 rounded-lg opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:shadow-lg" />
		</Link>
	);
}
