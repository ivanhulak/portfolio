'use client';

import { useEffect, useState } from 'react';

export function useHeroTypewriter(roles: readonly string[]) {
	const [roleIndex, setRoleIndex] = useState(0);
	const [displayText, setDisplayText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentRole = roles[roleIndex] ?? '';

		let delay = isDeleting ? 40 : 80;
		if (!isDeleting && displayText === currentRole) {
			delay = 2500;
		}

		const timeout = window.setTimeout(() => {
			if (!isDeleting) {
				if (displayText.length < currentRole.length) {
					setDisplayText(currentRole.slice(0, displayText.length + 1));
				} else {
					setIsDeleting(true);
				}
				return;
			}

			if (displayText.length > 0) {
				setDisplayText(displayText.slice(0, -1));
				return;
			}

			setIsDeleting(false);
			setRoleIndex((prev) => (prev + 1) % roles.length);
		}, delay);

		return () => window.clearTimeout(timeout);
	}, [displayText, isDeleting, roleIndex, roles]);

	return displayText;
}
