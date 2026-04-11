import { ChevronDown, ChevronUp } from "lucide-react";

export function PracticeCard({ q, index, revealed, onReveal }) {
  return (
    <div className="rounded-xl border border-white/5 bg-[#0e0e11] overflow-hidden transition-all duration-300">
      <button
        onClick={onReveal}
        className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        aria-expanded={revealed}
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <span className="shrink-0 w-7 h-7 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-sm flex items-center justify-center font-bold">
            {index + 1}
          </span>
          <p className="text-zinc-100 text-sm sm:text-base font-medium leading-relaxed pt-0.5">{q.question}</p>
        </div>
        {revealed ? (
          <ChevronUp className="w-5 h-5 text-zinc-500 shrink-0 mt-1" />
        ) : (
          <ChevronDown className="w-5 h-5 text-zinc-500 shrink-0 mt-1" />
        )}
      </button>
      {revealed && (
        <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-white/5 animate-in slide-in-from-top-2 duration-300">
          <div className="ml-10 sm:ml-11 pl-4 border-l-2 border-indigo-500/40">
            <p className="text-indigo-200/90 text-sm sm:text-base leading-relaxed">{q.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}