import { BookText } from "lucide-react";

type Props = {};

export default function CardSecond({}: Props) {
  return (
    <div className="flex items-center justify-center bg-neutral-950 p-6">
      {/* Container của mặt Meaning */}
      <div
        className="relative w-full max-w-[175px] h-[280px] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl flex flex-col items-center px-4 pb-4 pt-6"
        style={{
          background: `
            radial-gradient(circle at bottom, rgba(16, 185, 129, 0.35) 0%, rgba(5, 150, 105, 0.15) 40%, transparent 70%),
            #0b0b16
          `,
        }}
      >
        {/* Badge */}
        <div className="mb-4 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-emerald-300/70">
          Definition
        </div>

        {/* Icon với hiệu ứng Glow */}
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/5 text-emerald-300">
          <div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-full"></div>
          <BookText className="h-5 w-5 relative" strokeWidth={1.5} />
        </div>

        {/* Nội dung định nghĩa */}
        <div className="mt-6 flex-1 flex items-center justify-center">
          <p className="text-center text-[14px] leading-relaxed text-white/90 font-medium px-1">
            The occurrence of events by chance in a happy or beneficial way.
          </p>
        </div>

        {/* Divider & Ví dụ (Nếu không có ví dụ thì bỏ đoạn này) */}
        <div className="w-12 h-[1px] bg-white/10 my-4"></div>
        <p className="text-center text-[11px] italic text-white/40 leading-tight">
          "A happy accident that changed my life."
        </p>
      </div>
    </div>
  );
}
