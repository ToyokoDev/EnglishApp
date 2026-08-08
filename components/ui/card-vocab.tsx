'use client'
import { BookOpen, Sparkles, BookText } from "lucide-react";
import { useState } from "react";

export default function CardVocab() {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <div className="flex items-center justify-center">
      {/* Container cha: h-[224px] = 280px * 0.8 */}
      <div className="group w-[175px] h-[224px] perspective-1000" onClick={() => setIsFlipped(!isFlipped)}>

        {/* Lớp chuyển động 3D */}
        <div className={`relative w-full h-full transition-all duration-700 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}>

          {/* --- MẶT 1: WORD --- */}
          <div
            className="absolute w-full h-full backface-hidden rounded-[1.5rem] border border-white/10 shadow-2xl flex flex-col items-center px-4 py-5 bg-[#0b0b16]"
            style={{
              background: `radial-gradient(circle at bottom, rgba(79, 70, 229, 0.45) 0%, rgba(168, 85, 247, 0.25) 40%, transparent 70%), #0b0b16`
            }}
          >
            <div className="mb-3 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[9px] font-medium uppercase tracking-widest text-white/70">
              VOCAB DAILY
            </div>
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/5 text-indigo-300">
              <div className="absolute inset-0 bg-indigo-500/30 blur-md rounded-full"></div>
              <BookOpen className="h-4 w-4 relative" strokeWidth={1.5} />
            </div>
            <h1 className="mt-3 text-center text-lg font-bold tracking-tight text-white/95">Serendipity</h1>
            <div className="mt-2 rounded-full bg-white/10 px-3 py-0.5 text-[11px] text-indigo-200 font-medium border border-white/10">
              noun
            </div>
            <div className="mt-auto flex items-center justify-center">
              <Sparkles className="h-3 w-3 text-violet-300/80" strokeWidth={1.5} />
            </div>
          </div>

          {/* --- MẶT 2: MEANING --- */}
          <div
            className="absolute w-full h-full backface-hidden rounded-[1.5rem] border border-white/10 shadow-2xl flex flex-col items-center px-4 py-5 rotate-y-180 bg-[#0b0b16]"
            style={{
              background: `radial-gradient(circle at bottom, rgba(16, 185, 129, 0.35) 0%, rgba(5, 150, 105, 0.15) 40%, transparent 70%), #0b0b16`
            }}
          >
            <div className="mb-3 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[9px] font-medium uppercase tracking-widest text-emerald-300/70">
              Definition
            </div>
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/5 text-emerald-300">
              <div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-full"></div>
              <BookText className="h-4 w-4 relative" strokeWidth={1.5} />
            </div>
            <div className="mt-4 flex-1 flex items-center justify-center">
              <p className="text-center text-[12px] leading-snug text-white/90 font-medium px-1">
                The occurrence of events by chance in a happy or beneficial way.
              </p>
            </div>
            <div className="w-10 h-[1px] bg-white/10 my-3"></div>
            <p className="text-center text-[10px] italic text-white/40 leading-tight">
              "A happy accident."
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
