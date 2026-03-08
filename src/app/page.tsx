import { ExperienceSection } from '@/components/experience/Experience';
import { Navigation } from '@/components/navigation';
import { AboutSection } from '@/components/sections/about/About';
import { HeroSection } from '@/components/sections/hero/Hero';

export default function Home() {
	return (
		<main className="bg-background min-h-screen">
			<Navigation />
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
		</main>
	);
}
