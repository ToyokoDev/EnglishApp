type Props = {};

export default function CardContainer({}: Props) {
  return (
    <div
      className="
    w-[300px] h-[180px]
    rounded-2xl
    border border-zinc-800
    bg-gradient-to-b from-zinc-950 to-zinc-900
    p-4
    shadow-lg shadow-black/30
  "
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <p className="text-sm text-zinc-400">New Vocab</p>

        <div
          className="
        flex items-center gap-1
        rounded-full
        border border-zinc-700
        bg-zinc-900
        px-3 py-1
        text-xs font-medium
        text-white
      "
        >
          1
        </div>
      </div>

      {/* Price */}
      <h1 className="mt-1 text-2xl font-semibold tracking-wider text-white">
        Every game
      </h1>

      {/* Footer */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <span className="font-semibold text-4xl text-white">
            &nbsp;&nbsp;0
          </span>
        </div>

        <p className="mt-2 text-sm text-zinc-500">words in box</p>
      </div>
    </div>
  );
}
