// src/components/ai/SubjectGrid.tsx
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { BookPlus, Upload, BookOpen, Layers, ChevronRight, Search, X } from "lucide-react";
import genai from "@/assets/aiWhite.png";

// ── NEW: Smart Search Utility ──
// Export this and use it in your parent component to pass the filtered list!
export const smartFilterSubjects = (subjects: any[], query: string) => {
  if (!query || query.trim() === "") return subjects;

  const q = query.toLowerCase().trim();
  const stopWords = new Set(["and", "of", "the", "in", "on", "for", "with", "a", "an", "&"]);

  return subjects.filter((subject) => {
    const name = (subject.name || "").toLowerCase();

    // 1. Direct partial match (e.g., "artif" matches "Artificial Intelligence")
    if (name.includes(q)) return true;

    // 2. Extract words to build acronyms
    const words = name.split(/[\s\-_]+/);

    // Strict Acronym: First letter of EVERY word (e.g., "CANS" for "Cryptography And Network Security")
    const strictAcronym = words.map((w) => w[0]).join("");

    // Smart Acronym: Skip filler words (e.g., "CNS" for "Cryptography and Network Security", "AI" for "Artificial Intelligence")
    const smartAcronym = words.filter((w) => !stopWords.has(w)).map((w) => w[0]).join("");

    // Check if query matches the beginning of either acronym
    if (strictAcronym.startsWith(q) || smartAcronym.startsWith(q)) return true;

    // 3. First-word / Prefix matching (e.g., "da ba" matches "Database Management")
    const queryWords = q.split(/\s+/);
    const matchesPrefixes = queryWords.every((qw) => 
      words.some(word => word.startsWith(qw))
    );
    if (matchesPrefixes) return true;

    return false;
  });
};

interface SubjectGridProps {
  activeTab: string;
  isContributor: boolean;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  filteredSubjects: any[];
  setIsAddSubjectDialogOpen: (val: boolean) => void;
  setIsUploadDialogOpen: (val: boolean) => void;
  handleSubjectClick: (subject: any) => void;
}

const getSubjectImage = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("artificial") || n.includes("ai") || n.includes("neural") || n.includes("deep") || n.includes("nlp") || n.includes("language"))
    return "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800";
  if (n.includes("security") || n.includes("cryptography") || n.includes("forensics") || n.includes("cyber"))
    return "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800";
  if (n.includes("web") || n.includes("framework") || n.includes("programming") || n.includes("compiler"))
    return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800";
  if (n.includes("data") || n.includes("analytics") || n.includes("visualization"))
    return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800";
  if (n.includes("agile") || n.includes("software") || n.includes("oose") || n.includes("pattern"))
    return "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800";
  const fallbacks = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
  ];
  return fallbacks[n.length % fallbacks.length];
};

// Spotlight card component with mouse-tracking glow
function SubjectCard({
  subject,
  index,
  activeTab,
  onClick,
}: {
  subject: any;
  index: number;
  activeTab: string;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isAi = activeTab === "ai_subjects";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.setProperty("--mx", "50%");
      card.style.setProperty("--my", "50%");
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="subject-card group relative rounded-[20px] overflow-hidden cursor-pointer h-[260px] sm:h-[280px] border border-white/[0.06] bg-[#101013]"
      style={{
        animationDelay: `${index * 60}ms`,
        "--mx": "50%",
        "--my": "50%",
      } as React.CSSProperties}
    >
      <div className="spotlight absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]" />

      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-[1.08] opacity-20 group-hover:opacity-35 mix-blend-luminosity"
        style={{ backgroundImage: `url(${getSubjectImage(subject.name)})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />

      <div className={`absolute top-0 left-0 right-0 h-px transition-all duration-500 opacity-0 group-hover:opacity-100 ${
        isAi
          ? "bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"
          : "bg-gradient-to-r from-transparent via-zinc-400/40 to-transparent"
      }`} />

      <div className="relative z-10 h-full flex flex-col p-5">
        <div className="flex justify-start">
          {isAi ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-400" />
              </span>
              Study With AI
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
              <Layers className="w-2.5 h-2.5" />
              Standard
            </span>
          )}
        </div>

        <div className="flex-1" />

        <div>
          <h3 className="text-[17px] sm:text-lg font-bold text-white leading-snug mb-3 line-clamp-3 drop-shadow-sm">
            {subject.name}
          </h3>
          <div className={`inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 ${
            isAi
              ? "text-indigo-400 group-hover:text-indigo-300"
              : "text-zinc-500 group-hover:text-zinc-300"
          }`}>
            {isAi ? "Launch Study with AI" : "View Resources"}
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
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
  const isAi = activeTab === "ai_subjects";

  return (
    <div className="animate-in fade-in duration-500">

      <style>{`
        .subject-card {
          animation: cardReveal 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
          transform-style: preserve-3d;
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .spotlight {
          background: radial-gradient(
            280px circle at var(--mx) var(--my),
            rgba(99, 102, 241, 0.12),
            transparent 70%
          );
        }
        .subject-card:hover {
          border-color: rgba(255,255,255,0.12);
          box-shadow: 0 20px 60px -16px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(255,255,255,0.06);
          transform: translateY(-3px);
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.3s ease,
                      box-shadow 0.3s ease;
        }
      `}</style>

      {/* ── Header Area ── */}
      <div className="flex flex-col mb-12 relative z-10">

        {/* Top Row: Title and Contributor Buttons */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white mb-1 flex items-center gap-2">
              {isAi ? (
                <>
                  <span className="w-7 h-7 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <img src={genai} alt="AI" className="w-3.5 h-3.5" />
                  </span>
                  Study with AI
                </>
              ) : (
                <>
                  <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                  </span>
                  Your Subjects
                </>
              )}
            </h2>
            <p className="text-zinc-500 text-sm">
              {isAi
                ? "Select a module to launch your personalised AI study assistant."
                : "Select a module to view your study materials."}
            </p>
          </div>

          {/* Contributor buttons */}
          {isContributor && activeTab === "subjects" && (
            <div className="flex gap-2 w-full lg:w-auto">
              <Button
                onClick={() => setIsAddSubjectDialogOpen(true)}
                variant="ghost"
                className="flex-1 lg:flex-none h-10 px-4 rounded-full bg-white/[0.04] border border-white/8 text-zinc-300 hover:bg-white/8 hover:text-white text-[13px] font-medium"
              >
                <BookPlus className="w-3.5 h-3.5 mr-2" />
                Add
              </Button>
              <Button
                onClick={() => setIsUploadDialogOpen(true)}
                className="flex-1 lg:flex-none h-10 px-4 rounded-full bg-white text-black hover:bg-zinc-100 text-[13px] font-semibold shadow-md"
              >
                <Upload className="w-3.5 h-3.5 mr-2" />
                Upload
              </Button>
            </div>
          )}
        </div>

        {/* Bottom Row: Centered Search Bar */}
        <div className="w-full flex justify-center mt-8">
          <div className="relative group w-full sm:w-[400px] xl:w-[500px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors pointer-events-none" />
            <input
              type="text"
              placeholder="Search subjects…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 bg-white/[0.02] border border-white/10 rounded-full pl-11 pr-12 text-[14px] text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:bg-white/[0.05] focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/30 transition-all shadow-lg"
            />
            {/* Properly positioned X inside the input */}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors"
              >
                <X className="w-3.5 h-3.5 text-zinc-300" />
              </button>
            )}
          </div>
        </div>

      </div>

      {/* ── Empty state ── */}
      {filteredSubjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 px-6 border border-dashed border-white/8 rounded-3xl bg-white/[0.01]">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center mb-5">
            {isAi ? (
              <img src={genai} alt="AI" className="w-6 h-6 opacity-40" />
            ) : (
              <BookOpen className="w-6 h-6 text-zinc-700" />
            )}
          </div>
          <p className="text-zinc-400 text-sm font-medium text-center mb-1">
            {searchQuery ? `No results for "${searchQuery}"` : "No subjects found for this semester."}
          </p>
          {searchQuery && (
            <p className="text-zinc-600 text-xs text-center mb-5">Try a different keyword</p>
          )}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Count label */}
          <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-600 mb-4">
            {filteredSubjects.length} module{filteredSubjects.length !== 1 ? "s" : ""}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSubjects.map((subject, index) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                index={index}
                activeTab={activeTab}
                onClick={() => handleSubjectClick(subject)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}