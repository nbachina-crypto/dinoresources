import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, GraduationCap, Calculator } from "lucide-react";

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

const WGP_TO_FINAL: Record<number, number> = {
  9: 10,
  8: 9,
  7: 8,
  6: 7,
  5: 6,
  4: 5,
};

function wgpToFinalGradePoint(wgp: number): number {
  const floored = Math.floor(wgp);
  if (floored >= 9) return 10;
  if (floored >= 8) return 9;
  if (floored >= 7) return 8;
  if (floored >= 6) return 7;
  if (floored >= 5) return 6;
  if (floored >= 4) return 5;
  return 4;
}

/* ---------- Types ---------- */

interface RegularSubject {
  id: string;
  name: string;
  credits: number;
  type: "regular";
  s1Grade: Grade | "";
  leGrade: Grade | "";
  s2Grade: Grade | "";
}

interface CladSubject {
  id: string;
  name: string;
  credits: 1;
  type: "clad";
  grade: Grade | "";
}

type Subject = RegularSubject | CladSubject;

let nextId = 1;

/* ---------- Component ---------- */

export default function SGPACalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [subjectName, setSubjectName] = useState("");
  const [subjectCredits, setSubjectCredits] = useState("3");
  const [subjectType, setSubjectType] = useState<"regular" | "clad">("regular");

  const addSubject = () => {
    const name = subjectName.trim() || `Subject ${subjects.length + 1}`;
    const id = `s-${nextId++}`;

    if (subjectType === "clad") {
      setSubjects([...subjects, { id, name, credits: 1, type: "clad", grade: "" }]);
    } else {
      const credits = Math.max(1, Math.min(6, parseInt(subjectCredits) || 3));
      setSubjects([
        ...subjects,
        { id, name, credits, type: "regular", s1Grade: "", leGrade: "", s2Grade: "" },
      ]);
    }
    setSubjectName("");
    setSubjectCredits("3");
    setSubjectType("regular");
  };

  const removeSubject = (id: string) => {
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const updateSubject = (id: string, updates: Partial<RegularSubject> | Partial<CladSubject>) => {
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, ...updates } as Subject : s)));
  };

  const getFinalGradePoint = (subject: Subject): number | null => {
    if (subject.type === "clad") {
      return subject.grade ? GRADE_POINTS[subject.grade] : null;
    }
    if (!subject.s1Grade || !subject.leGrade || !subject.s2Grade) return null;

    const wgp =
      GRADE_POINTS[subject.s1Grade] * 0.3 +
      GRADE_POINTS[subject.leGrade] * 0.25 +
      GRADE_POINTS[subject.s2Grade] * 0.45;

    return wgpToFinalGradePoint(wgp);
  };

  const { sgpa, totalCredits, allComplete } = useMemo(() => {
    if (subjects.length === 0) return { sgpa: 0, totalCredits: 0, allComplete: false };

    let sumProduct = 0;
    let totalCr = 0;
    let complete = true;

    for (const sub of subjects) {
      const gp = getFinalGradePoint(sub);
      if (gp === null) {
        complete = false;
        continue;
      }
      sumProduct += gp * sub.credits;
      totalCr += sub.credits;
    }

    return {
      sgpa: totalCr > 0 ? sumProduct / totalCr : 0,
      totalCredits: totalCr,
      allComplete: complete && subjects.length > 0,
    };
  }, [subjects]);

  return (
    <div className="space-y-6">
      {/* Add Subject Card */}
      <Card className="shadow-card border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            Add Subject
          </CardTitle>
          <CardDescription>Add your semester subjects to calculate SGPA</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Subject Name</Label>
              <Input
                placeholder="e.g. Data Structures"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Type</Label>
              <Select value={subjectType} onValueChange={(v) => setSubjectType(v as "regular" | "clad")}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Regular Subject</SelectItem>
                  <SelectItem value="clad">CLAD (1 Credit)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {subjectType === "regular" && (
              <div className="space-y-2">
                <Label>Credits</Label>
                <Select value={subjectCredits} onValueChange={setSubjectCredits}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((c) => (
                      <SelectItem key={c} value={String(c)}>
                        {c} Credit{c > 1 ? "s" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          <Button onClick={addSubject} className="w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add Subject
          </Button>
        </CardContent>
      </Card>

      {/* Subject List */}
      {subjects.length > 0 && (
        <div className="space-y-4">
          {subjects.map((subject) => (
            <Card key={subject.id} className="shadow-card border-border/50">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {subject.credits} Credit{subject.credits > 1 ? "s" : ""} •{" "}
                      {subject.type === "clad" ? "CLAD" : "Regular"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {getFinalGradePoint(subject) !== null && (
                      <span className="text-lg font-bold text-primary">
                        GP: {getFinalGradePoint(subject)}
                      </span>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeSubject(subject.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {subject.type === "clad" ? (
                  <div className="space-y-2">
                    <Label>Grade</Label>
                    <Select
                      value={subject.grade}
                      onValueChange={(v) => updateSubject(subject.id, { grade: v as Grade })}
                    >
                      <SelectTrigger className="w-full sm:w-40">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {GRADES.map((g) => (
                          <SelectItem key={g} value={g}>
                            {g} ({GRADE_POINTS[g]})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Sessional 1 (30%)</Label>
                      <Select
                        value={subject.s1Grade}
                        onValueChange={(v) => updateSubject(subject.id, { s1Grade: v as Grade })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {GRADES.map((g) => (
                            <SelectItem key={g} value={g}>
                              {g} ({GRADE_POINTS[g]})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Learning Engagement (25%)</Label>
                      <Select
                        value={subject.leGrade}
                        onValueChange={(v) => updateSubject(subject.id, { leGrade: v as Grade })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {GRADES.map((g) => (
                            <SelectItem key={g} value={g}>
                              {g} ({GRADE_POINTS[g]})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Sessional 2 (45%)</Label>
                      <Select
                        value={subject.s2Grade}
                        onValueChange={(v) => updateSubject(subject.id, { s2Grade: v as Grade })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {GRADES.map((g) => (
                            <SelectItem key={g} value={g}>
                              {g} ({GRADE_POINTS[g]})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* SGPA Result */}
      {subjects.length > 0 && (
        <Card className="shadow-card border-border/50 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">SGPA Result</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-background border border-border/50">
                <p className="text-sm text-muted-foreground">Subjects</p>
                <p className="text-2xl font-bold">{subjects.length}</p>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border/50">
                <p className="text-sm text-muted-foreground">Total Credits</p>
                <p className="text-2xl font-bold">{totalCredits}</p>
              </div>
              <div className="col-span-2 sm:col-span-1 p-4 rounded-lg bg-background border border-border/50">
                <p className="text-sm text-muted-foreground">SGPA</p>
                <p className="text-3xl font-bold text-primary">
                  {allComplete ? sgpa.toFixed(2) : "—"}
                </p>
              </div>
            </div>
            {!allComplete && subjects.length > 0 && (
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Select grades for all subjects to see your SGPA
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
