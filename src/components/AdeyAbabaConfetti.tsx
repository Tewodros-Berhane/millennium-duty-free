"use client";
import { useEffect, useState } from "react";

type Petal = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
};

export default function AdeyAbebaConfetti({
  spawnInterval = 50, // new petal every X ms
  maxPetals = 50,
}: {
  spawnInterval?: number;
  maxPetals?: number;
}) {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPetals((prev) => {
        if (prev.length > maxPetals) return prev.slice(1); // recycle oldest

        const newPetal: Petal = {
          id: counter,
          left: Math.random() * 100, // vw
          size: Math.random() * 30 + 20,
          duration: Math.random() * 6 + 6, // 6–12s
          delay: 0,
          rotate: Math.random() * 360,
        };

        setCounter((c) => c + 1);
        return [...prev, newPetal];
      });
    }, spawnInterval);

    return () => clearInterval(interval);
  }, [spawnInterval, counter, maxPetals]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden z-10"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute select-none will-change-transform"
          style={{
            left: `${p.left}vw`,
            top: "-10vh",
            animation: `fall ${p.duration}s linear forwards, sway ${
              p.duration * 0.6
            }s ease-in-out infinite alternate`,
            fontSize: p.size,
            transform: `rotate(${p.rotate}deg)`,
            filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.35))",
          }}
        >
          {/* Swap 🌼 for your Adey Abeba SVG */}
          <img src="/adey.png" alt="Adey Abeba" width={p.size} height={p.size} />

        </span>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 1;
          }
        }
        @keyframes sway {
          from {
            margin-left: 0;
          }
          to {
            margin-left: 40px;
          }
        }
      `}</style>
    </div>
  );
}
