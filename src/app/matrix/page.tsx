"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function MatrixPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showReveal, setShowReveal] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "MINDBOTZ01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const charArray = chars.split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#22d3ee";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Gradient color for depth
        const brightness = Math.random();
        if (brightness > 0.9) {
          ctx.fillStyle = "#f472b6";
        } else if (brightness > 0.7) {
          ctx.fillStyle = "#8b5cf6";
        } else {
          ctx.fillStyle = "#22d3ee";
        }

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Show reveal text after 2 seconds
    setTimeout(() => {
      setShowReveal(true);
    }, 2000);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`text-center transition-all duration-1000 ${
            showReveal ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <h1 className="text-glow mb-4 text-6xl font-bold text-cyan-400 md:text-8xl">
            MINDBOTZ
          </h1>
          <p className="text-lg text-purple-400 md:text-xl">
            The machine is alive.
          </p>
          <p className="mt-2 text-sm text-pink-400">
            You found the hidden layer.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full border border-cyan-400/40 bg-black/60 px-6 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400/10 hover:border-cyan-400/60"
          >
            Return to Reality
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 text-xs text-cyan-400/40">
        Protocol: MINDBOTZ_AWakens
      </div>
    </main>
  );
}
