import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/sections/Hero';

export default function Home() {
	return (
		<main className="bg-background min-h-screen">
			<Navigation />
			<HeroSection />
		</main>
	);
}
