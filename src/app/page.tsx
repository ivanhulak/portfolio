import { Footer, Header } from '@/components/layout';
import { AboutSection } from '@/components/sections/about/About';
import { BlogSection } from '@/components/sections/blog/Blog';
import { ContactSection } from '@/components/sections/contacts/ContactSection';
import { ExperienceSection } from '@/components/sections/experience/Experience';
import { HeroSection } from '@/components/sections/hero/Hero';

export default function Home() {
	return (
		<main className="bg-background min-h-screen">
			<Header />
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
			{/* <ProjectsSection /> */}
			<BlogSection />
			<ContactSection />
			<Footer />
		</main>
	);
}
