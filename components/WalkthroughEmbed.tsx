"use client";

import { useState } from "react";

export default function WalkthroughEmbed() {
  const [active, setActive] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden border border-warm-200 shadow-sm">
      {active ? (
        <iframe
          src="/Walkthrough-bundled.html"
          className="w-full"
          style={{ height: "540px", border: "none", display: "block" }}
          title="Client Service Center — end-to-end walkthrough"
          allow="autoplay"
        />
      ) : (
        <button
          onClick={() => setActive(true)}
          className="w-full group relative bg-[#002855] overflow-hidden"
          style={{ height: "540px" }}
          aria-label="Play walkthrough"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />

          {/* Decorative UI chrome */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[340px] h-[220px] rounded-xl bg-[#EEF3FA] border border-white/10 shadow-2xl opacity-30" />
          </div>

          {/* Play button */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#0066B3] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 5.5L18.5 12L8 18.5V5.5Z" fill="white" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-base leading-snug">
                Watch the walkthrough
              </p>
              <p className="text-[#A8BEDC] text-sm mt-1">
                Business owner → request → dual approval
              </p>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
