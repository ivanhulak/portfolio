'use client';

import { useRef } from 'react';

import { useInView } from '@/hooks/useInView';

import { contactSocialLinks } from './config';
import { ContactBackground } from './ContactBackground';
import { ContactCtaCard } from './ContactCtaCard';
import { ContactHeader } from './ContactHeader';
import { ContactSocialLinkCard } from './ContactSocialLinkCard';

export function ContactSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef);

	return (
		<section id="contact" ref={sectionRef} className="relative overflow-hidden py-32">
			<ContactBackground />

			<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
				<ContactHeader isInView={isInView} />
				<ContactCtaCard isInView={isInView} />

				<div
					className="mx-auto grid max-w-6xl gap-6 transition-all delay-400 duration-1000 sm:grid-cols-2 lg:grid-cols-3"
					style={{
						opacity: isInView ? 1 : 0,
						transform: isInView ? 'translateY(0)' : 'translateY(40px)',
					}}
				>
					{contactSocialLinks.map((socialLink, index) => (
						<ContactSocialLinkCard key={socialLink.name} socialLink={socialLink} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
