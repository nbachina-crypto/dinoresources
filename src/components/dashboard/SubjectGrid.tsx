// src/components/ai/SubjectGrid.tsx
import { useRef, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { BookPlus, Upload, BookOpen, Layers, ChevronRight, Search, X, Sparkles, Zap } from "lucide-react";
import genai from "@/assets/aiWhite.png";

// ── Smart Search Utility ──
export const smartFilterSubjects = (subjects: any[], query: string) => {
  if (!query || query.trim() === "") return subjects;
  const q = query.toLowerCase().trim();
  const stopWords = new Set(["and", "of", "the", "in", "on", "for", "with", "a", "an", "&"]);
  return subjects.filter((subject) => {
    const name = (subject.name || "").toLowerCase();
    if (name.includes(q)) return true;
    const words = name.split(/[\s\-_]+/);
    const strictAcronym = words.map((w) => w[0]).join("");
    const smartAcronym = words.filter((w) => !stopWords.has(w)).map((w) => w[0]).join("");
    if (strictAcronym.startsWith(q) || smartAcronym.startsWith(q)) return true;
    const queryWords = q.split(/\s+/);
    return queryWords.every((qw) => words.some((word) => word.startsWith(qw)));
  });
};

const CARD_PALETTES = [
  { bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", accent: "#a78bfa", tag: "rgba(255,255,255,0.22)", glow: "rgba(102,126,234,0.45)" },
  { bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", accent: "#fb7185", tag: "rgba(255,255,255,0.22)", glow: "rgba(245,87,108,0.45)" },
  { bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", accent: "#38bdf8", tag: "rgba(255,255,255,0.22)", glow: "rgba(79,172,254,0.45)" },
  { bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", accent: "#34d399", tag: "rgba(255,255,255,0.22)", glow: "rgba(67,233,123,0.45)" },
  { bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", accent: "#fbbf24", tag: "rgba(255,255,255,0.22)", glow: "rgba(250,112,154,0.45)" },
  { bg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)", accent: "#e879f9", tag: "rgba(255,255,255,0.22)", glow: "rgba(161,140,209,0.45)" },
  { bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)", accent: "#fb923c", tag: "rgba(0,0,0,0.12)", glow: "rgba(252,182,159,0.45)" },
  { bg: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)", accent: "#60a5fa", tag: "rgba(0,0,0,0.12)", glow: "rgba(161,196,253,0.45)" },
];

const getPalette = (name: string, index: number) => CARD_PALETTES[index % CARD_PALETTES.length];

function SubjectCard({ subject, index, activeTab, onClick }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isAi = subject.is_ai || activeTab === "ai_subjects";
  const palette = getPalette(subject.name, index);
  const useDarkText = ["rgba(0,0,0,0.12)"].includes(palette.tag);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    card.style.setProperty("--rx", `${y}deg`);
    card.style.setProperty("--ry", `${x}deg`);
    card.style.setProperty("--shine-x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty("--shine-y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.setProperty("--rx", "0deg");
      cardRef.current.style.setProperty("--ry", "0deg");
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="subject-card group relative cursor-pointer"
      style={{ animationDelay: `${index * 55}ms`, "--glow": palette.glow } as React.CSSProperties}
    >
      <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-xl -z-10 scale-95" style={{ background: palette.bg }} />
      <div className="relative rounded-[24px] overflow-hidden h-[240px] sm:h-[260px] card-inner shadow-lg transition-shadow duration-300 group-hover:shadow-2xl" style={{ background: palette.bg }}>
        <div className="shine-overlay absolute inset-0 pointer-events-none rounded-[24px]" />
        <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.4)" }} />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 h-full flex flex-col p-5 justify-between">
          <div className="flex justify-between items-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm"
              style={{ background: palette.tag, color: useDarkText ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.95)", border: useDarkText ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.25)" }}>
              {isAi ? <><Sparkles className="w-2.5 h-2.5" /> AI Powered</> : <><Layers className="w-2.5 h-2.5" /> Standard</>}
            </span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
              style={{ background: useDarkText ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.22)", border: useDarkText ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.3)" }}>
              <ChevronRight className={`w-4 h-4 ${useDarkText ? "text-black/60" : "text-white"}`} />
            </div>
          </div>
          <div>
            <h3 className={`text-[18px] sm:text-[19px] font-extrabold leading-tight mb-3 line-clamp-3 drop-shadow-sm ${useDarkText ? "text-gray-800" : "text-white"}`}>{subject.name}</h3>
            <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase transition-all duration-300 ${useDarkText ? "text-black/50 group-hover:text-black/80" : "text-white/60 group-hover:text-white"}`}>
              {isAi ? <><Zap className="w-3 h-3" /> Launch AI Study</> : "Open Resources"}
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SubjectGrid({
  activeTab,
  isContributor,
  searchQuery,
  setSearchQuery,
  filteredSubjects,
  setIsAddSubjectDialogOpen,
  setIsUploadDialogOpen,
  handleSubjectClick,
}: SubjectGridProps) {
  const isAiTab = activeTab === "ai_subjects";
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Updated logic to show both AI and Standard options for searched subjects
  const dropdownResults = useMemo(() => {
    if (!searchQuery) return [];
    const matched = smartFilterSubjects(filteredSubjects, searchQuery);
    
    // We create a flat list where each match gets an AI entry and a Standard entry for clarity
    const results: any[] = [];
    matched.slice(0, 4).forEach((sub) => {
      // Option 1: AI Entry
      results.push({ ...sub, displayMode: 'AI' });
      // Option 2: Standard Entry
      results.push({ ...sub, displayMode: 'STD' });
    });
    return results;
  }, [searchQuery, filteredSubjects]);

  return (
    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto px-4">
      <style>{`
        .subject-card { perspective: 800px; }
        .card-inner { transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease; transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translateZ(0); will-change: transform; }
        .subject-card:hover .card-inner { box-shadow: 0 24px 48px -8px var(--glow), 0 0 0 1px rgba(255,255,255,0.25); }
        .shine-overlay { background: radial-gradient(circle at var(--shine-x, 50%) var(--shine-y, 50%), rgba(255,255,255,0.18) 0%, transparent 60%); opacity: 0; transition: opacity 0.3s; }
        .subject-card:hover .shine-overlay { opacity: 1; }
      `}</style>

      {/* ── Header ── */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 border border-zinc-100">
            {isAiTab ? <img src={genai} alt="AI" className="w-6 h-6 invert" /> : <BookOpen className="w-6 h-6 text-black" />}
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              {isAiTab ? "Study with AI" : "Your Subjects"}
            </h2>
            <p className="text-zinc-400 text-sm font-medium">Explore your modules</p>
          </div>
        </div>

        {isContributor && activeTab === "subjects" && (
          <div className="flex gap-2">
            <Button onClick={() => setIsAddSubjectDialogOpen(true)} variant="outline" className="rounded-full bg-transparent text-white border-white/20 hover:bg-white/10 px-6">
              <BookPlus className="w-4 h-4 mr-2" /> Add
            </Button>
            <Button onClick={() => setIsUploadDialogOpen(true)} className="rounded-full bg-white text-black hover:bg-zinc-100 px-6 font-bold shadow-lg transition-transform active:scale-95">
              <Upload className="w-4 h-4 mr-2" /> Upload
            </Button>
          </div>
        )}
      </div>

      {/* ── Google-Style Search ── */}
      <div className="flex justify-center mb-16 relative z-50">
        <div className="w-full max-w-[50%] relative group">
          <div className={`relative flex items-center bg-white border-zinc-200 transition-all duration-300 rounded-full px-5 shadow-sm hover:shadow-md ${isSearchFocused ? 'shadow-lg border-transparent ring-1 ring-zinc-200' : 'border'}`}>
            <Search className={`w-5 h-5 transition-colors ${isSearchFocused ? 'text-zinc-800' : 'text-zinc-400'}`} />
            <input
              type="text"
              placeholder="Search subjects..."
              value={searchQuery}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 bg-transparent border-none focus:ring-0 text-zinc-900 placeholder:text-zinc-400 text-[16px] px-4"
            />
            {searchQuery && (
              <X onClick={() => setSearchQuery("")} className="w-5 h-5 text-zinc-400 hover:text-zinc-800 cursor-pointer" />
            )}
          </div>

          {/* ── Dropdown Suggestions (Split AI/STD) ── */}
          {isSearchFocused && dropdownResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="p-1.5 grid grid-cols-1 divide-y divide-zinc-50">
                {dropdownResults.map((sub: any, idx) => (
                  <button
                    key={`${sub.id}-${sub.displayMode}`}
                    onClick={() => {
                      // Custom logic to handle the click based on the chosen mode
                      handleSubjectClick(sub);
                    }}
                    className="w-full flex items-center justify-between p-3.5 hover:bg-zinc-50 transition-colors group first:rounded-t-xl last:rounded-b-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center group-hover:bg-white transition-colors border border-transparent group-hover:border-zinc-200">
                        {sub.displayMode === 'AI' ? 
                          <img src={genai} className="w-5 h-5 invert opacity-60" alt="AI" /> : 
                          <Layers className="w-5 h-5 text-zinc-400" />
                        }
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-zinc-700 font-bold group-hover:text-black leading-none">{sub.name}</span>
                        <span className="text-[10px] text-zinc-400 mt-1 font-medium">
                          {sub.displayMode === 'AI' ? 'Launch AI Study Assistant' : 'View Module Materials'}
                        </span>
                      </div>
                    </div>

                    {/* Badge Badging */}
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-colors ${
                      sub.displayMode === 'AI' 
                      ? 'bg-purple-50 border-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white' 
                      : 'bg-zinc-50 border-zinc-100 text-zinc-500 group-hover:bg-zinc-800 group-hover:text-white'
                    }`}>
                      {sub.displayMode === 'AI' && <Sparkles className={`w-3 h-3 ${isSearchFocused ? 'group-hover:animate-pulse' : ''}`} />}
                      <span className="text-[10px] font-black uppercase tracking-wider">{sub.displayMode}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Main Grid Content ── */}
      {filteredSubjects.length === 0 ? (
        <div className="h-64 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-[40px] bg-white/5">
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">No modules found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSubjects.map((subject, index) => (
            <SubjectCard key={subject.id} subject={subject} index={index} activeTab={activeTab} onClick={() => handleSubjectClick(subject)} />
          ))}
        </div>
      )}
    </div>
  );
}