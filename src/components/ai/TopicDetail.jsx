import { useState, useEffect } from "react";
import { ChevronLeft, BrainCircuit, Zap, ChevronRight, BookOpen, Sparkles } from "lucide-react";
import { PracticeCard } from "./PracticeCard";

export function GeneratePanel({ activeUnit, subjectName, subjectTopics, onClose }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [genPhase, setGenPhase] = useState(0); 
  const [revealedAnswers, setRevealedAnswers] = useState({});

  const allTopics = subjectTopics[activeUnit.toString()] || [];

  // Helper to count questions whether they are a flat array or categorized object
  const getQuestionCount = (questions) => {
    if (!questions) return 0;
    if (Array.isArray(questions)) return questions.length;
    return Object.values(questions).reduce((acc, curr) => acc + (curr?.length || 0), 0);
  };

  // Helper to mix all topics into a single categorized exam
  const mixAllTopics = () => {
    const mixed = {};
    allTopics.forEach(t => {
      if (Array.isArray(t.questions)) {
        mixed["General Practice"] = [...(mixed["General Practice"] || []), ...t.questions];
      } else if (t.questions) {
        Object.keys(t.questions).forEach(mark => {
          mixed[mark] = [...(mixed[mark] || []), ...t.questions[mark]];
        });
      }
    });
    return { title: `Full Unit ${activeUnit} Review`, questions: mixed };
  };

  // Normalize questions into a standard object format
  const getCategorizedQuestions = (questions) => {
    if (!questions) return {};
    if (Array.isArray(questions)) return { "Practice Questions": questions };
    return questions;
  };

  // Format "2mark" into "2 Marks"
  const formatCategoryName = (cat) => {
    if (cat.toLowerCase().endsWith('mark')) {
      return `${cat.replace(/mark/i, '')} Marks`;
    }
    return cat;
  };

  const startGenerate = (topic) => {
    setSelectedTopic(topic);
    setGenPhase(1);
    setRevealedAnswers({});
    setTimeout(() => setGenPhase(2), 2500);
  };

  const handleRevealAll = (categorizedQs) => {
    const allKeys = {};
    Object.entries(categorizedQs).forEach(([category, qs]) => {
      (qs || []).forEach((_, i) => {
        allKeys[`${category}-${i}`] = true;
      });
    });
    setRevealedAnswers(allKeys);
  };

  const phases = ["Analyzing syllabus context...", "Structuring exam questions by marks...", "Finalizing model answers..."];
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  
  useEffect(() => {
    if (genPhase !== 1) return;
    const t = setInterval(() => setLoadingMsgIdx((p) => (p + 1) % phases.length), 800);
    return () => clearInterval(t);
  }, [genPhase]);

  const categorizedQuestions = genPhase === 2 && selectedTopic ? getCategorizedQuestions(selectedTopic.questions) : {};

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="shrink-0 flex items-center gap-3 px-6 pt-6 pb-4 border-b border-white/5">
        <button onClick={onClose} className="flex items-center gap-2 text-zinc-400 hover:text-white font-medium bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 scrollbar-thin scrollbar-thumb-zinc-800">
        
        {/* Phase 0: Selection */}
        {genPhase === 0 && (
          <div className="animate-in fade-in duration-300">
            <h3 className="text-3xl font-extrabold text-white mb-2">Practice Generator</h3>
            <p className="text-zinc-400 text-base mb-8">Target specific weaknesses or simulate a full unit exam with varying marks.</p>

            <button
              onClick={() => startGenerate(mixAllTopics())}
              className="w-full mb-8 rounded-[24px] border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/5 hover:from-indigo-500/20 hover:to-purple-500/10 p-6 sm:p-8 text-left flex items-center justify-between transition-all group shadow-xl"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <Zap className="w-7 h-7 text-indigo-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg sm:text-xl mb-1">Comprehensive Exam</p>
                  <p className="text-sm text-zinc-400">All 2, 4, 5, & 8 mark questions spanning Unit {activeUnit}</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-indigo-400 group-hover:translate-x-2 transition-transform hidden sm:block" />
            </button>

            <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold mb-4">Or target a specific topic</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {allTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => startGenerate(topic)}
                  className="rounded-2xl border border-white/5 bg-[#111113] hover:border-white/20 hover:bg-[#18181b] p-5 text-left flex flex-col justify-between transition-all min-h-[120px]"
                >
                  <BookOpen className="w-5 h-5 text-zinc-500 mb-3" />
                  <div>
                    <p className="font-semibold text-zinc-200 text-sm sm:text-base leading-snug mb-2">{topic.title}</p>
                    <span className="text-xs text-zinc-500 bg-white/5 px-2 py-1 rounded-md">
                      {getQuestionCount(topic.questions)} Questions
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Phase 1: Loading Animation */}
        {genPhase === 1 && (
          <div className="flex flex-col items-center justify-center min-h-[400px] animate-in fade-in duration-300">
            <div className="w-24 h-24 rounded-full border-4 border-indigo-500/20 flex items-center justify-center relative mb-8">
              <div className="absolute inset-0 rounded-full border-t-4 border-indigo-500 animate-spin" />
              <BrainCircuit className="w-10 h-10 text-indigo-400 animate-pulse" />
            </div>
            <p className="text-white font-bold text-xl sm:text-2xl mb-3">AI is preparing your exam</p>
            <p className="text-indigo-300 text-base sm:text-lg animate-pulse">{phases[loadingMsgIdx]}</p>
          </div>
        )}

        {/* Phase 2: Results categorized by marks */}
        {genPhase === 2 && selectedTopic && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 pb-10">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="text-sm text-indigo-400 uppercase tracking-widest font-bold">Generated Set</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{selectedTopic.title}</h3>
            <p className="text-zinc-400 text-base mb-8">Test your knowledge against these {getQuestionCount(selectedTopic.questions)} questions.</p>

            <div className="space-y-10">
              {Object.entries(categorizedQuestions).map(([category, qs]) => {
                if (!qs || qs.length === 0) return null;
                
                return (
                  <div key={category}>
                    {/* Category Divider / Badge */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="h-px flex-1 bg-white/5"></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-indigo-300 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20 shadow-sm">
                        {formatCategoryName(category)}
                      </span>
                      <div className="h-px flex-1 bg-white/5"></div>
                    </div>
                    
                    <div className="space-y-4">
                      {qs.map((q, i) => {
                        const qKey = `${category}-${i}`;
                        return (
                          <PracticeCard
                            key={qKey}
                            q={q}
                            index={i}
                            revealed={!!revealedAnswers[qKey]}
                            onReveal={() => setRevealedAnswers((p) => ({ ...p, [qKey]: !p[qKey] }))}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => { setGenPhase(0); setSelectedTopic(null); }}
                className="flex-1 py-3.5 rounded-full border border-white/10 text-zinc-300 hover:bg-white/5 font-semibold transition-colors"
              >
                Create Another Test
              </button>
              <button
                onClick={() => handleRevealAll(categorizedQuestions)}
                className="flex-1 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 font-bold transition-transform hover:scale-105 shadow-lg"
              >
                Reveal All Answers
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}