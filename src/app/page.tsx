import { Navigation } from '@/components/navigation';
import { AboutSection } from '@/components/sections/about/About';
import { BlogSection } from '@/components/sections/blog/Blog';
import { ExperienceSection } from '@/components/sections/experience/Experience';
import { HeroSection } from '@/components/sections/hero/Hero';

export default function Home() {
	return (
		<main className="bg-background min-h-screen">
			<Navigation />
			<HeroSection />
			<AboutSection />
			<ExperienceSection />

			<BlogSection />
			{/* <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer /> */}
		</main>
	);
}
