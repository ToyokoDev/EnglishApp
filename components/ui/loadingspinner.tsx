export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="w-5 h-5 rounded-full border-2 border-white/10 border-t-blue-500 animate-spin-slow 
        shadow-[0_0_8px_rgba(59,130,246,0.5)]"
      ></div>
    </div>
  );
};
