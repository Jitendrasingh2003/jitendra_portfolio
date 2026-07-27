import React, { useEffect, useRef } from 'react';
import './BackgroundCanvas.css';

const BackgroundCanvas = ({ theme = 'space' }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Refined Linear & Stripe Theme Color Palette
    const themeColors = {
      space: {
        primary: '#38bdf8',
        secondary: '#00ffaa',
        line: 'rgba(56, 189, 248, ',
        mouseLine: 'rgba(0, 255, 170, '
      },
      nebula: {
        primary: '#c084fc',
        secondary: '#f472b6',
        line: 'rgba(192, 132, 252, ',
        mouseLine: 'rgba(244, 114, 182, '
      },
      emerald: {
        primary: '#34d399',
        secondary: '#38bdf8',
        line: 'rgba(52, 211, 153, ',
        mouseLine: 'rgba(56, 189, 248, '
      }
    };

    const colors = themeColors[theme] || themeColors.space;

    // Particle Configuration
    let particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 11000), 90);

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.6 + 0.8,
          color: Math.random() > 0.45 ? colors.primary : colors.secondary,
          alpha: Math.random() * 0.45 + 0.35
        });
      }
    }

    initParticles();

    // Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const maxDistance = 145;
      const mouseMaxDistance = 190;
      const mouse = mouseRef.current;

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw Dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = colors.line + alpha + ')';
            ctx.lineWidth = 0.8;
            ctx.globalAlpha = alpha;
            ctx.stroke();
          }
        }

        // Mouse Interactivity
        if (mouse.active) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouseMaxDistance) {
            const mAlpha = (1 - mdist / mouseMaxDistance) * 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = colors.mouseLine + mAlpha + ')';
            ctx.lineWidth = 1.1;
            ctx.globalAlpha = mAlpha;
            ctx.stroke();

            if (mdist < 90) {
              const force = (90 - mdist) / 90;
              p1.x += (mdx / mdist) * force * 1.2;
              p1.y += (mdy / mdist) * force * 1.2;
            }
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <div className={`background-canvas-wrapper ${theme}`}>
      <canvas ref={canvasRef} className="bg-interactive-canvas" />
      <div className="cyber-grid-overlay" />
      <div className="cyber-scanline" />
      <div className="ambient-aurora aurora-1" />
      <div className="ambient-aurora aurora-2" />
    </div>
  );
};

export default BackgroundCanvas;
