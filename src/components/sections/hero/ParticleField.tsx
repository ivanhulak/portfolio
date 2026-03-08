'use client';

import { useEffect, useRef } from 'react';

export function ParticleField() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);

		const particles: Array<{
			x: number;
			y: number;
			vx: number;
			vy: number;
			size: number;
			color: string;
			alpha: number;
		}> = [];

		const colors = ['#00ffff', '#ff00ff', '#00ff88'];

		for (let i = 0; i < 100; i++) {
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.3,
				vy: (Math.random() - 0.5) * 0.3,
				size: Math.random() * 2 + 0.5,
				color: colors[Math.floor(Math.random() * colors.length)],
				alpha: Math.random() * 0.6 + 0.2,
			});
		}

		let animationId: number;
		let mouseX = canvas.width / 2;
		let mouseY = canvas.height / 2;

		const handleMouseMove = (event: MouseEvent) => {
			mouseX = event.clientX;
			mouseY = event.clientY;
		};
		window.addEventListener('mousemove', handleMouseMove);

		const animate = () => {
			ctx.fillStyle = 'rgba(5, 5, 8, 0.05)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			particles.forEach((particle, index) => {
				const dx = mouseX - particle.x;
				const dy = mouseY - particle.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < 200) {
					particle.vx += dx * 0.00005;
					particle.vy += dy * 0.00005;
				}

				particle.x += particle.vx;
				particle.y += particle.vy;
				particle.vx *= 0.99;
				particle.vy *= 0.99;

				if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
				if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
				ctx.fillStyle = particle.color;
				ctx.globalAlpha = particle.alpha;
				ctx.shadowBlur = 15;
				ctx.shadowColor = particle.color;
				ctx.fill();
				ctx.shadowBlur = 0;

				particles.slice(index + 1).forEach((other) => {
					const linkX = particle.x - other.x;
					const linkY = particle.y - other.y;
					const linkDist = Math.sqrt(linkX * linkX + linkY * linkY);

					if (linkDist < 120) {
						ctx.beginPath();
						ctx.moveTo(particle.x, particle.y);
						ctx.lineTo(other.x, other.y);
						ctx.strokeStyle = particle.color;
						ctx.globalAlpha = (1 - linkDist / 120) * 0.15;
						ctx.lineWidth = 0.5;
						ctx.stroke();
					}
				});
			});

			ctx.globalAlpha = 1;
			animationId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			window.removeEventListener('mousemove', handleMouseMove);
			cancelAnimationFrame(animationId);
		};
	}, []);

	return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0" />;
}
