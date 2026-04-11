import { CheckCircle2, PlayCircle, Lock, ChevronRight, BrainCircuit, Sparkles } from "lucide-react";

export function TopicGrid({ topics, activeUnit, subjectName, onSelectTopic, onGenerate }) {
  const statusIcon = {
    completed: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
    "in-progress": <PlayCircle className="w-6 h-6 text-indigo-400" />,
    locked: <Lock className="w-6 h-6 text-zinc-600" />,
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-400 p-4 sm:p-8">
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
          Unit {activeUnit} Pathway
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base">
          {topics.length} topic{topics.length !== 1 ? "s" : ""} required to master this unit.
        </p>
      </div>

      {topics.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 border border-dashed border-white/10 rounded-3xl bg-[#111113]">
          <Sparkles className="w-10 h-10 text-zinc-600 mb-4" />
          <p className="text-zinc-400 font-medium text-center px-6">No topics assigned to Unit {activeUnit} yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {topics.map((topic, idx) => (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className="group text-left bg-[#111113] border border-white/5 hover:border-indigo-500/40 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-[#18181b] hover:shadow-[0_12px_40px_-12px_rgba(99,102,241,0.15)] relative overflow-hidden flex flex-col"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0 mt-1">{statusIcon[topic.status] || statusIcon.locked}</div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 mb-1 block">Topic {String(idx + 1).padStart(2, "0")}</span>
                  <h4 className="text-lg font-semibold text-white leading-snug pr-6">
                    {topic.title}
                  </h4>
                </div>
              </div>

              <div className="mt-auto space-y-2 w-full">
                <div className="flex justify-between text-xs font-medium">
                  <span className={topic.progress > 0 ? "text-indigo-400" : "text-zinc-600"}>
                    {topic.progress > 0 ? `${topic.progress}% Complete` : "Not Started"}
                  </span>
                  <span className="text-zinc-500">{topic.questions?.length || 0} practice Qs</span>
                </div>
                <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${topic.progress}%` }}
                  />
                </div>
              </div>
            </button>
          ))}

          {/* Generate Questions CTA */}
          <button
            onClick={onGenerate}
            className="xl:col-span-2 group relative rounded-2xl p-px overflow-hidden cursor-pointer mt-4 focus:outline-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-20 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative bg-[#111113] rounded-[calc(1rem-1px)] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-white/5">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-2 text-purple-400">
                  <BrainCircuit className="w-5 h-5" />
                  <span className="font-bold tracking-widest text-xs uppercase">Confidence Booster</span>
                </div>
                <h4 className="text-xl font-extrabold text-white mb-2">Generate Practice Exam</h4>
                <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
                  AI-structured exam-style Q&amp;A for Unit {activeUnit}. Test your knowledge before moving on.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-2 bg-white text-black font-bold px-6 py-3.5 rounded-full shadow-lg group-hover:scale-105 transition-transform w-full sm:w-auto justify-center">
                Generate Now <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}