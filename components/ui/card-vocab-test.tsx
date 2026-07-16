import { BookOpen, Sparkles } from "lucide-react";

type Props = {};

export default function CardVocab({}: Props) {
  return (
    <div className="flex items-center justify-center bg-neutral-950 p-6">
      {/* Card chính với hiệu ứng Gradient ở đáy */}
      <div
        className="relative w-full max-w-[175px] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl"
        style={{
          background: `
            radial-gradient(circle at bottom, rgba(79, 70, 229, 0.45) 0%, rgba(168, 85, 247, 0.25) 40%, transparent 70%),
            #0b0b16
          `,
        }}
      >
        <div className="relative flex flex-col items-center px-4 pb-4 pt-6 z-10">
          {/* Badge */}
          <div className="mb-4 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white/70">
            MEANING
          </div>

          {/* Icon */}
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/5 text-indigo-300">
            <div className="absolute inset-0 bg-indigo-500/30 blur-md rounded-full"></div>
            <BookOpen className="h-5 w-5 relative" strokeWidth={1.5} />
          </div>

          {/* Word */}
          <h1 className="mt-4 text-center text-xl font-bold tracking-tight text-white/95">
            Serendipity
          </h1>

          {/* Pill */}
          <div className="mt-4 rounded-full bg-white/10 px-3 py-0.75 text-[12px] text-indigo-200 font-medium border border-white/10">
            noun
          </div>

          {/* Sparkle */}
          <div className="mt-4 flex items-center justify-center">
            <Sparkles
              className="h-4 w-4 text-violet-300/80"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
