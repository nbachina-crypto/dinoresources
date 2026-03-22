import { useState, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

/* ---------- Grade System ---------- */

const GRADES = ["O", "A+", "A", "B+", "B", "C", "P"] as const;
type Grade = (typeof GRADES)[number];

const GRADE_POINTS: Record<Grade, number> = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  P: 4,
};

function wgpToFinalGradePoint(wgp: number): number {
  if (wgp > 9) return 10;
  if (wgp > 8) return 9;
  if (wgp > 7) return 8;
  if (wgp > 6) return 7;
  if (wgp > 5) return 6;
  if (wgp > 4) return 5;
  if (wgp === 4) return 4;
  return 0;
}

/* ---------- Types ---------- */

interface Subject {
  id: string;
  name: string;
  credits: number;
  s1Grade: Grade;
  leGrade: Grade;
  s2Grade: Grade;
}

let nextId = 1;

/* ---------- Helpers ---------- */

function gpBadgeClass(gp: number): string {
  if (gp >= 10) return "bg-emerald-500 text-white";
  if (gp >= 9)  return "bg-emerald-400 text-white";
  if (gp >= 8)  return "bg-sky-500 text-white";
  if (gp >= 7)  return "bg-sky-400 text-white";
  if (gp >= 6)  return "bg-amber-400 text-white";
  if (gp >= 5)  return "bg-amber-500 text-white";
  if (gp >= 4)  return "bg-orange-500 text-white";
  return "bg-red-500 text-white";
}

function GradeSelect({
  value,
  onChange,
  placeholder,
  size = "md",
}: {
  value: Grade | "";
  onChange: (v: Grade) => void;
  placeholder: string;
  size?: "sm" | "md";
}) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as Grade)}>
      <SelectTrigger className={size === "sm" ? "h-7 text-xs px-2 min-w-[60px]" : "h-8 text-xs px-2 min-w-[68px]"}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {GRADES.map((g) => (
          <SelectItem key={g} value={g} className="text-xs">
            {g} <span className="text-muted-foreground">({GRADE_POINTS[g]})</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

/* ---------- Subject Row ---------- */

function SubjectRow({
  sub,
  idx,
  getFinalGP,
  onUpdate,
  onRemove,
}: {
  sub: Subject;
  idx: number;
  getFinalGP: (s: Subject) => number;
  onUpdate: (id: string, patch: Partial<Subject>) => void;
  onRemove: (id: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const gp = getFinalGP(sub);

  return (
    <div className="border-b border-border/30 last:border-0">

      {/* Summary row — always visible */}
      <div
        className="flex items-center gap-2 px-3 py-2 hover:bg-muted/20 transition-colors"
        onClick={() => setExpanded((v) => !v)}
        style={{ cursor: "pointer" }}
      >
        <span className="text-[11px] text-muted-foreground w-4 shrink-0 tabular-nums select-none">
          {idx + 1}.
        </span>

        {/* Name */}
        <span className="flex-1 text-xs font-medium truncate min-w-0 select-none">
          {sub.name}
        </span>

        {/* Grades inline: A+ · A · A */}
        <span className="text-[11px] text-muted-foreground shrink-0 tabular-nums select-none">
          {sub.s1Grade}
          <span className="mx-0.5 opacity-40">·</span>
          {sub.leGrade}
          <span className="mx-0.5 opacity-40">·</span>
          {sub.s2Grade}
        </span>

        {/* Credits */}
        <span className="text-[11px] text-muted-foreground shrink-0 select-none">
          {sub.credits}cr
        </span>

        {/* GP circular badge */}
        <span
          className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 select-none ${gpBadgeClass(gp)}`}
        >
          {gp}
        </span>

        {/* Expand chevron */}
        <span className="text-muted-foreground shrink-0 select-none">
          {expanded
            ? <ChevronUp className="w-3.5 h-3.5" />
            : <ChevronDown className="w-3.5 h-3.5" />}
        </span>
      </div>

      {/* Expanded edit panel */}
      {expanded && (
        <div
          className="px-3 pb-3 pt-1 space-y-2 bg-muted/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Name */}
          <Input
            className="h-8 text-xs"
            placeholder="Subject name"
            value={sub.name}
            onChange={(e) => onUpdate(sub.id, { name: e.target.value })}
          />

          {/* Grades */}
          <div className="flex gap-2">
            <div className="flex-1 space-y-1">
              <p className="text-[10px] text-muted-foreground">S1 (30%)</p>
              <GradeSelect value={sub.s1Grade} onChange={(v) => onUpdate(sub.id, { s1Grade: v })} placeholder="S1" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-[10px] text-muted-foreground">LE (25%)</p>
              <GradeSelect value={sub.leGrade} onChange={(v) => onUpdate(sub.id, { leGrade: v })} placeholder="LE" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-[10px] text-muted-foreground">S2 (45%)</p>
              <GradeSelect value={sub.s2Grade} onChange={(v) => onUpdate(sub.id, { s2Grade: v })} placeholder="S2" />
            </div>
          </div>

          {/* Credits + Remove */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Credits</span>
              <Select
                value={String(sub.credits)}
                onValueChange={(v) => onUpdate(sub.id, { credits: parseInt(v) })}
              >
                <SelectTrigger className="h-8 text-xs px-2 w-[72px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((c) => (
                    <SelectItem key={c} value={String(c)} className="text-xs">
                      {c} cr
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-xs text-destructive hover:text-destructive gap-1"
              onClick={() => onRemove(sub.id)}
            >
              <Trash2 className="w-3 h-3" />
              Remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Main Component ---------- */

export default function SGPACalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [name, setName] = useState("");
  const [credits, setCredits] = useState("3");
  const [s1, setS1] = useState<Grade | "">("");
  const [le, setLE] = useState<Grade | "">("");
  const [s2, setS2] = useState<Grade | "">("");
  const [hasCLAD, setHasCLAD] = useState(false);
  const [cladGrade, setCladGrade] = useState<Grade | "">("");

  const getFinalGP = useCallback((sub: Subject): number => {
    const wgp =
      GRADE_POINTS[sub.s1Grade] * 0.3 +
      GRADE_POINTS[sub.leGrade] * 0.25 +
      GRADE_POINTS[sub.s2Grade] * 0.45;
    return wgpToFinalGradePoint(wgp);
  }, []);

  const { sgpa, totalCredits } = useMemo(() => {
    let sumProduct = 0;
    let totalCr = 0;
    for (const sub of subjects) {
      const gp = getFinalGP(sub);
      sumProduct += gp * sub.credits;
      totalCr += sub.credits;
    }
    if (hasCLAD && cladGrade) {
      sumProduct += GRADE_POINTS[cladGrade];
      totalCr += 1;
    }
    return { sgpa: totalCr > 0 ? sumProduct / totalCr : null, totalCredits: totalCr };
  }, [subjects, hasCLAD, cladGrade, getFinalGP]);

  const canAdd = !!(s1 && le && s2);

  const addSubject = () => {
    if (!canAdd) return;
    setSubjects((prev) => [
      ...prev,
      {
        id: `s-${nextId++}`,
        name: name.trim() || `Subject ${prev.length + 1}`,
        credits: parseInt(credits) || 3,
        s1Grade: s1 as Grade,
        leGrade: le as Grade,
        s2Grade: s2 as Grade,
      },
    ]);
    setName(""); setS1(""); setLE(""); setS2("");
  };

  const removeSubject = (id: string) =>
    setSubjects((prev) => prev.filter((s) => s.id !== id));

  const updateSubject = (id: string, patch: Partial<Subject>) =>
    setSubjects((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3 font-sans text-sm">

      {/* ── CLAD Toggle ── */}
      <div className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-border/60 bg-muted/30">
        <span className="text-sm font-medium">
          CLAD <span className="text-xs text-muted-foreground font-normal">(1 credit)</span>
        </span>
        <div className="flex items-center gap-2">
          {hasCLAD && (
            <GradeSelect value={cladGrade} onChange={setCladGrade} placeholder="Grade" />
          )}
          <button
            onClick={() => { setHasCLAD((v) => !v); setCladGrade(""); }}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${hasCLAD ? "bg-primary" : "bg-muted-foreground/30"}`}
            aria-label="Toggle CLAD"
          >
            <span className={`inline-block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform ${hasCLAD ? "translate-x-4" : "translate-x-0.5"}`} />
          </button>
        </div>
      </div>

      {/* ── Subject Table ── */}
      <div className="rounded-lg border border-border/60 bg-card overflow-hidden">

        {/* Desktop column headers */}
        <div className="hidden sm:grid grid-cols-[1fr_60px_68px_68px_68px_32px] gap-x-2 px-3 pt-2 pb-1">
          {["Subject", "Cr", "S1 30%", "LE 25%", "S2 45%", ""].map((h) => (
            <span key={h} className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">{h}</span>
          ))}
        </div>

        {/* Desktop input row */}
        <div className="hidden sm:grid grid-cols-[1fr_60px_68px_68px_68px_32px] gap-2 p-3 border-b border-border/40 bg-muted/20">
          <Input
            className="h-8 text-xs"
            placeholder="Subject name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addSubject()}
          />
          <Select value={credits} onValueChange={setCredits}>
            <SelectTrigger className="h-8 text-xs px-2"><SelectValue /></SelectTrigger>
            <SelectContent>
              {[1,2,3,4,5,6].map((c) => (
                <SelectItem key={c} value={String(c)} className="text-xs">{c}cr</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <GradeSelect value={s1} onChange={setS1} placeholder="S1" />
          <GradeSelect value={le} onChange={setLE} placeholder="LE" />
          <GradeSelect value={s2} onChange={setS2} placeholder="S2" />
          <Button size="icon" className="h-8 w-8" onClick={addSubject} disabled={!canAdd}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile input form */}
        <div className="sm:hidden p-3 space-y-2 border-b border-border/40 bg-muted/20">
          <Input
            className="h-8 text-xs w-full"
            placeholder="Subject name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex gap-2">
            <div className="flex-1 space-y-1">
              <p className="text-[10px] text-muted-foreground">S1 (30%)</p>
              <GradeSelect value={s1} onChange={setS1} placeholder="S1" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-[10px] text-muted-foreground">LE (25%)</p>
              <GradeSelect value={le} onChange={setLE} placeholder="LE" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-[10px] text-muted-foreground">S2 (45%)</p>
              <GradeSelect value={s2} onChange={setS2} placeholder="S2" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground shrink-0">Credits</span>
            <Select value={credits} onValueChange={setCredits}>
              <SelectTrigger className="h-8 text-xs px-2 w-[72px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                {[1,2,3,4,5,6].map((c) => (
                  <SelectItem key={c} value={String(c)} className="text-xs">{c} cr</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="flex-1 h-8 text-xs" onClick={addSubject} disabled={!canAdd}>
              <Plus className="w-3.5 h-3.5 mr-1.5" />
              Add Subject
            </Button>
          </div>
        </div>

        {/* Subject list */}
        {subjects.length === 0 ? (
          <div className="flex items-center justify-center gap-2 py-6 text-muted-foreground text-xs">
            <BookOpen className="w-4 h-4" />
            No subjects yet
          </div>
        ) : (
          subjects.map((sub, idx) => (
            <SubjectRow
              key={sub.id}
              sub={sub}
              idx={idx}
              getFinalGP={getFinalGP}
              onUpdate={updateSubject}
              onRemove={removeSubject}
            />
          ))
        )}
      </div>

      {/* ── Result bar ── */}
      {(subjects.length > 0 || (hasCLAD && cladGrade)) && (
        <div className="flex items-center justify-between rounded-lg border border-border/60 bg-primary/5 px-4 py-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>
              <span className="font-semibold text-foreground tabular-nums">{subjects.length}</span>
              {" "}sub{subjects.length !== 1 ? "s" : ""}
              {hasCLAD && cladGrade && " + CLAD"}
            </span>
            <span className="text-border">|</span>
            <span>
              <span className="font-semibold text-foreground tabular-nums">{totalCredits}</span> credits
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">SGPA</span>
            <span className="text-2xl font-bold text-primary tabular-nums leading-none">
              {sgpa !== null ? sgpa.toFixed(2) : "—"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
