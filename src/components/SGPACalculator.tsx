import { useState, useMemo, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

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
  return "bg-primary text-white";
}

/* ---------- Subject Row ---------- */

function SubjectRow({
  sub,
  idx,
  getFinalGP,
  onUpdate,
  onRemove,
}: any) {
  const [expanded, setExpanded] = useState(false);
  const gp = getFinalGP(sub);

  return (
    <div className="border-b border-border/30 last:border-0">

      {/* Summary */}
      <div
        className="flex items-center gap-3 px-3 py-2"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="text-xs w-4 text-muted-foreground">
          {idx + 1}.
        </span>

        {/* Name + Details */}
        <div className="flex items-center gap-2 flex-1 min-w-0 text-sm">
            <span className="font-medium truncate max-w-[80px]">
              {sub.name}
            </span>
          
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>S1:{sub.s1Grade}</span>
              <span>LE:{sub.leGrade}</span>
              <span>S2:{sub.s2Grade}</span>
            </div>
          
            <span className="text-muted-foreground">
              {sub.credits} credits
            </span>
          </div>

        {/* GP Badge (CENTER IMPORTANCE) */}
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${gpBadgeClass(
            gp
          )}`}
        >
          {gp}
        </span>

        {expanded ? <ChevronUp /> : <ChevronDown />}
      </div>

      {/* Expanded */}
      {expanded && (
        <div className="px-3 pb-3 space-y-2">
          <Input
            value={sub.name}
            onChange={(e) =>
              onUpdate(sub.id, { name: e.target.value })
            }
          />

          <div className="flex gap-2">
            <Select
              value={sub.s1Grade}
              onValueChange={(v) =>
                onUpdate(sub.id, { s1Grade: v })
              }
            >
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {GRADES.map((g) => (
                  <SelectItem key={g} value={g}>{g}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={sub.leGrade}
              onValueChange={(v) =>
                onUpdate(sub.id, { leGrade: v })
              }
            >
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {GRADES.map((g) => (
                  <SelectItem key={g} value={g}>{g}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={sub.s2Grade}
              onValueChange={(v) =>
                onUpdate(sub.id, { s2Grade: v })
              }
            >
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {GRADES.map((g) => (
                  <SelectItem key={g} value={g}>{g}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between items-center">
            <Select
              value={String(sub.credits)}
              onValueChange={(v) =>
                onUpdate(sub.id, { credits: parseInt(v) })
              }
            >
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {[1,2,3,4].map((c) => (
                  <SelectItem key={c} value={String(c)}>
                    {c} cr
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="destructive"
              size="sm"
              onClick={() => onRemove(sub.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Main ---------- */

export default function SGPACalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [name, setName] = useState("");
  const [credits, setCredits] = useState("3");
  const [s1, setS1] = useState<Grade | "">("");
  const [le, setLE] = useState<Grade | "">("");
  const [s2, setS2] = useState<Grade | "">("");
  const [hasCLAD, setHasCLAD] = useState(false);
  const [cladGrade, setCladGrade] = useState<Grade | "">("");

  /* ---------- LOCAL STORAGE ---------- */

  useEffect(() => {
    const saved = localStorage.getItem("sgpa-data");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSubjects(parsed.subjects || []);
      setHasCLAD(parsed.hasCLAD || false);
      setCladGrade(parsed.cladGrade || "");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "sgpa-data",
      JSON.stringify({ subjects, hasCLAD, cladGrade })
    );
  }, [subjects, hasCLAD, cladGrade]);

  /* ---------- LOGIC ---------- */

  const getFinalGP = useCallback((sub: Subject) => {
    const wgp =
      GRADE_POINTS[sub.s1Grade] * 0.3 +
      GRADE_POINTS[sub.leGrade] * 0.25 +
      GRADE_POINTS[sub.s2Grade] * 0.45;
    return wgpToFinalGradePoint(wgp);
  }, []);

  const { sgpa, totalCredits } = useMemo(() => {
    let sum = 0;
    let total = 0;

    subjects.forEach((s) => {
      sum += getFinalGP(s) * s.credits;
      total += s.credits;
    });

    if (hasCLAD && cladGrade) {
      sum += GRADE_POINTS[cladGrade];
      total += 1;
    }

    return {
      sgpa: total ? sum / total : 0,
      totalCredits: total,
    };
  }, [subjects, hasCLAD, cladGrade]);

  /* ---------- ACTIONS ---------- */

  const addSubject = () => {
      if (!s1 || !le || !s2) {
        alert("Please select all grades");
        return;
    }

    setSubjects([
      ...subjects,
      {
        id: Date.now().toString(),
        name: name || `Subject ${subjects.length + 1}`,
        credits: parseInt(credits),
        s1Grade: s1 as Grade,
        leGrade: le as Grade,
        s2Grade: s2 as Grade,
      },
    ]);

    setName("");
    setS1("");
    setLE("");
    setS2("");
  };

  const updateSubject = (id: string, patch: Partial<Subject>) =>
    setSubjects((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...patch } : s))
    );

  const removeSubject = (id: string) =>
    setSubjects((prev) => prev.filter((s) => s.id !== id));

  /* ---------- UI ---------- */

  return (
    <div className="max-w-xl mx-auto space-y-3">

      {/* CLAD */}
      <div className="flex items-center justify-between p-3 border rounded-lg">
        <span>CLAD (1 credit)</span>
        <div className="flex items-center gap-3">
          {hasCLAD && (
            <Select value={cladGrade} onValueChange={setCladGrade}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {GRADES.map((g) => (
                  <SelectItem key={g} value={g}>{g}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <button
            onClick={() => setHasCLAD((v) => !v)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              hasCLAD ? "bg-primary" : "bg-gray-400"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                hasCLAD ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* INPUT CARD */}
      <div className="p-3 border rounded-lg space-y-2">
          <p className="text-sm font-medium text-muted-foreground">
            Add Subject
          </p>
        <Input
          placeholder="Subject name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex gap-2">
          <Select value={credits} onValueChange={setCredits}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {[1,2,3,4].map((c) => (
                <SelectItem key={c} value={String(c)}>{c}cr</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={s1} onValueChange={setS1}>
            <SelectTrigger><SelectValue placeholder="S1" /></SelectTrigger>
            <SelectContent>
              {GRADES.map((g) => (
                <SelectItem key={g} value={g}>{g}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={le} onValueChange={setLE}>
            <SelectTrigger><SelectValue placeholder="LE" /></SelectTrigger>
            <SelectContent>
              {GRADES.map((g) => (
                <SelectItem key={g} value={g}>{g}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={s2} onValueChange={setS2}>
            <SelectTrigger><SelectValue placeholder="S2" /></SelectTrigger>
            <SelectContent>
              {GRADES.map((g) => (
                <SelectItem key={g} value={g}>{g}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button onClick={addSubject}>
            <Plus />
          </Button>
        </div>
      </div>

      {/* SUBJECT LIST */}
      <div className="border rounded-lg">
        {subjects.map((sub, idx) => (
          <SubjectRow
            key={sub.id}
            sub={sub}
            idx={idx}
            getFinalGP={getFinalGP}
            onUpdate={updateSubject}
            onRemove={removeSubject}
          />
        ))}
      </div>

      {/* RESULT */}
      <div className="p-4 border rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">
            Semester Summary
          </p>
        
          <div className="flex justify-between text-center">
            <div>
              <p className="text-xl font-bold">{subjects.length}</p>
              <p className="text-xs text-muted-foreground">Subjects</p>
            </div>
        
            <div>
              <p className="text-xl font-bold">{totalCredits}</p>
              <p className="text-xs text-muted-foreground">Credits</p>
            </div>
        
            <div>
              <p className="text-xl font-bold">{sgpa.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground">SGPA</p>
            </div>
          </div>
        </div>
    </div>
  );
}
