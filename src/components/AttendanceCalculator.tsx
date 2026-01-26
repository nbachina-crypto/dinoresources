// import { useState, useEffect } from "react";
// import { supabase } from "@/integrations/supabase/client";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { toast } from "sonner";
// import { Save, Edit2, Calculator, Calendar, CheckCircle2, AlertCircle } from "lucide-react";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// interface Timetable {
//   monday: number;
//   tuesday: number;
//   wednesday: number;
//   thursday: number;
//   friday: number;
// }

// // Academic Calendar - Even Semester (December to April)
// const SEMESTER_START = new Date(2024, 11, 1); // December 1, 2024
// const SEMESTER_END = new Date(2025, 3, 15); // April 15, 2025

// // Holidays/Non-working days
// const HOLIDAYS: { [key: string]: number[] } = {
//   "2024-12": [6, 7, 13, 14, 20, 21, 25, 27, 28],
//   "2025-01": [3, 4, 10, 11, 12, 13, 14, 15, 16, 17, 18, 24, 25, 26, 31],
//   "2025-02": [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 21, 22, 28],
//   "2025-03": [1, 7, 8, 14, 15, 20, 21, 22, 28, 29],
//   "2025-04": [3, 4, 5, 11, 12, 14],
// };

// const isWorkingDay = (date: Date): boolean => {
//   const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
//   const dayOfMonth = date.getDate();
//   const holidays = HOLIDAYS[monthKey] || [];
  
//   // Check if within semester bounds
//   if (date < SEMESTER_START || date > SEMESTER_END) return false;
  
//   return !holidays.includes(dayOfMonth);
// };

// const getDayName = (date: Date): keyof Timetable | null => {
//   const days: (keyof Timetable | null)[] = [null, "monday", "tuesday", "wednesday", "thursday", "friday", null];
//   return days[date.getDay()];
// };

// const getClassesForDay = (date: Date, timetable: Timetable): number => {
//   const dayName = getDayName(date);
//   if (!dayName || !isWorkingDay(date)) return 0;
//   return timetable[dayName];
// };

// const calculateConductedClassesTillDate = (tillDate: Date, timetable: Timetable, excludeToday: boolean = false): number => {
//   let total = 0;
//   const current = new Date(SEMESTER_START);
//   const endDate = excludeToday ? new Date(tillDate.getTime() - 86400000) : tillDate;
  
//   while (current <= endDate && current <= SEMESTER_END) {
//     total += getClassesForDay(current, timetable);
//     current.setDate(current.getDate() + 1);
//   }
  
//   return total;
// };

// const calculateRemainingClasses = (fromDate: Date, timetable: Timetable): number => {
//   let total = 0;
//   const current = new Date(fromDate);
//   current.setDate(current.getDate() + 1); // Start from tomorrow
  
//   while (current <= SEMESTER_END) {
//     total += getClassesForDay(current, timetable);
//     current.setDate(current.getDate() + 1);
//   }
  
//   return total;
// };

// export default function AttendanceCalculator() {
//   const [timetable, setTimetable] = useState<Timetable>({
//     monday: 0,
//     tuesday: 0,
//     wednesday: 0,
//     thursday: 0,
//     friday: 0,
//   });
//   const [savedTimetable, setSavedTimetable] = useState<Timetable | null>(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
//   const [isLoadingTimetable, setIsLoadingTimetable] = useState(true);

//   // Attendance calculation states
//   const [currentAttendance, setCurrentAttendance] = useState("");
//   const [attendedClassesToday, setAttendedClassesToday] = useState<string>("no");
//   const [classesCondictedToday, setClassesConductedToday] = useState("");
//   const [classesAttendedToday, setClassesAttendedToday] = useState("");
//   const [calculationResult, setCalculationResult] = useState<{
//     remainingClasses: number;
//     classesToAttend: number;
//     currentPercentage: number;
//     projectedPercentage: number;
//     canBunk: number;
//   } | null>(null);

//   useEffect(() => {
//     loadTimetable();
//   }, []);

//   const loadTimetable = async () => {
//     setIsLoadingTimetable(true);
//     const { data: { user } } = await supabase.auth.getUser();
//     if (!user) return;

//     const { data, error } = await supabase
//       .from("user_timetables")
//       .select("*")
//       .eq("user_id", user.id)
//       .maybeSingle();

//     if (error) {
//       toast.error("Failed to load timetable");
//       setIsLoadingTimetable(false);
//       return;
//     }

//     if (data) {
//       const loadedTimetable: Timetable = {
//         monday: data.monday,
//         tuesday: data.tuesday,
//         wednesday: data.wednesday,
//         thursday: data.thursday,
//         friday: data.friday,
//       };
//       setTimetable(loadedTimetable);
//       setSavedTimetable(loadedTimetable);
//     }
//     setIsLoadingTimetable(false);
//   };

//   const handleSave = async () => {
//     // Validate all fields
//     for (const day of Object.keys(timetable) as (keyof Timetable)[]) {
//       if (timetable[day] < 0 || timetable[day] > 8) {
//         toast.error(`${day} must have 0-8 classes`);
//         return;
//       }
//     }

//     setIsSaving(true);
//     const { data: { user } } = await supabase.auth.getUser();
//     if (!user) {
//       toast.error("Not authenticated");
//       setIsSaving(false);
//       return;
//     }

//     const { error } = await supabase
//       .from("user_timetables")
//       .upsert({
//         user_id: user.id,
//         ...timetable,
//         updated_at: new Date().toISOString(),
//       }, { onConflict: "user_id" });

//     if (error) {
//       toast.error("Failed to save timetable");
//       setIsSaving(false);
//       return;
//     }

//     setSavedTimetable(timetable);
//     setIsEditing(false);
//     setIsSaving(false);
//     toast.success("Timetable saved successfully!");
//   };

//   const handleInputChange = (day: keyof Timetable, value: string) => {
//     const numValue = parseInt(value) || 0;
//     const clampedValue = Math.min(8, Math.max(0, numValue));
//     setTimetable((prev) => ({ ...prev, [day]: clampedValue }));
//   };

//   const calculateAttendance = () => {
//     if (!savedTimetable) {
//       toast.error("Please save your timetable first");
//       return;
//     }

//     const attendance = parseFloat(currentAttendance);
//     if (isNaN(attendance) || attendance < 0 || attendance > 100) {
//       toast.error("Please enter a valid attendance percentage (0-100)");
//       return;
//     }

//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     let conductedTillYesterday: number;
//     let attendedTillYesterday: number;

//     if (attendedClassesToday === "yes") {
//       const conductedToday = parseInt(classesCondictedToday) || 0;
//       const attendedToday = parseInt(classesAttendedToday) || 0;

//       if (conductedToday < 0 || attendedToday < 0) {
//         toast.error("Classes cannot be negative");
//         return;
//       }

//       if (attendedToday > conductedToday) {
//         toast.error("Attended classes cannot exceed conducted classes");
//         return;
//       }

//       // Normalize: The percentage includes today's classes
//       const assumedTotalClasses = calculateConductedClassesTillDate(today, savedTimetable, false);
//       const assumedAttendedClasses = (attendance / 100) * assumedTotalClasses;
      
//       attendedTillYesterday = assumedAttendedClasses - attendedToday;
//       conductedTillYesterday = assumedTotalClasses - conductedToday;
//     } else {
//       // Use the percentage directly with conducted till yesterday
//       conductedTillYesterday = calculateConductedClassesTillDate(today, savedTimetable, true);
//       attendedTillYesterday = (attendance / 100) * conductedTillYesterday;
//     }

//     // Calculate remaining classes from today onwards
//     const remainingClasses = calculateRemainingClasses(today, savedTimetable);
    
//     // Total classes till semester end
//     const totalConducted = conductedTillYesterday + (attendedClassesToday === "yes" ? parseInt(classesCondictedToday) || 0 : 0);
//     const totalAttended = attendedTillYesterday + (attendedClassesToday === "yes" ? parseInt(classesAttendedToday) || 0 : 0);
    
//     const totalClassesBySemesterEnd = totalConducted + remainingClasses;
//     const requiredAttendedForSeventyFive = Math.ceil(totalClassesBySemesterEnd * 0.75);
    
//     const classesToAttend = Math.max(0, requiredAttendedForSeventyFive - totalAttended);
//     const canBunk = Math.max(0, remainingClasses - classesToAttend);
    
//     // Projected percentage if all remaining classes are attended
//     const projectedPercentage = totalClassesBySemesterEnd > 0 
//       ? ((totalAttended + remainingClasses) / totalClassesBySemesterEnd) * 100 
//       : 0;

//     setCalculationResult({
//       remainingClasses,
//       classesToAttend,
//       currentPercentage: attendance,
//       projectedPercentage,
//       canBunk,
//     });
//   };

//   const resetCalculation = () => {
//     setCurrentAttendance("");
//     setAttendedClassesToday("no");
//     setClassesConductedToday("");
//     setClassesAttendedToday("");
//     setCalculationResult(null);
//   };

//   if (isLoadingTimetable) {
//     return (
//       <div className="flex items-center justify-center py-12">
//         <div className="text-center space-y-2">
//           <Calendar className="w-12 h-12 mx-auto text-muted-foreground animate-pulse" />
//           <p className="text-muted-foreground">Loading your timetable...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {/* Step 1: Timetable Setup */}
//       <Card className="shadow-card border-border/50">
//         <CardHeader>
//           <div className="flex items-center justify-between">
//             <div>
//               <CardTitle className="flex items-center gap-2">
//                 <Calendar className="w-5 h-5" />
//                 Your Weekly Timetable
//               </CardTitle>
//               <CardDescription>
//                 Enter the number of classes per day (0-8)
//               </CardDescription>
//             </div>
//             {savedTimetable && !isEditing && (
//               <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
//                 <Edit2 className="w-4 h-4 mr-2" />
//                 Edit
//               </Button>
//             )}
//           </div>
//         </CardHeader>
//         <CardContent>
//           {!savedTimetable || isEditing ? (
//             <div className="space-y-4">
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//                 {(Object.keys(timetable) as (keyof Timetable)[]).map((day) => (
//                   <div key={day} className="space-y-2">
//                     <Label htmlFor={day} className="capitalize text-sm">
//                       {day}
//                     </Label>
//                     <Input
//                       id={day}
//                       type="number"
//                       min="0"
//                       max="8"
//                       value={timetable[day]}
//                       onChange={(e) => handleInputChange(day, e.target.value)}
//                       className="text-center"
//                     />
//                   </div>
//                 ))}
//               </div>
//               <div className="flex gap-2">
//                 <Button onClick={handleSave} disabled={isSaving}>
//                   <Save className="w-4 h-4 mr-2" />
//                   {isSaving ? "Saving..." : "Save Timetable"}
//                 </Button>
//                 {savedTimetable && (
//                   <Button
//                     variant="outline"
//                     onClick={() => {
//                       setTimetable(savedTimetable);
//                       setIsEditing(false);
//                     }}
//                   >
//                     Cancel
//                   </Button>
//                 )}
//               </div>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//               {(Object.keys(savedTimetable) as (keyof Timetable)[]).map((day) => (
//                 <div key={day} className="text-center p-3 bg-muted/50 rounded-lg">
//                   <p className="text-sm text-muted-foreground capitalize">{day}</p>
//                   <p className="text-2xl font-bold">{savedTimetable[day]}</p>
//                   <p className="text-xs text-muted-foreground">classes</p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </CardContent>
//       </Card>

//       {/* Step 2 & 3: Attendance Input */}
//       {savedTimetable && (
//         <Card className="shadow-card border-border/50">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Calculator className="w-5 h-5" />
//               Calculate Attendance
//             </CardTitle>
//             <CardDescription>
//               Enter your current attendance to see how many classes you can bunk
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             {/* Current Attendance Input */}
//             <div className="space-y-2">
//               <Label htmlFor="attendance">Current Overall Attendance (%)</Label>
//               <Input
//                 id="attendance"
//                 type="number"
//                 step="0.01"
//                 min="0"
//                 max="100"
//                 placeholder="e.g., 74.84"
//                 value={currentAttendance}
//                 onChange={(e) => setCurrentAttendance(e.target.value)}
//                 className="max-w-xs"
//               />
//             </div>

//             {/* Today's Classes Question */}
//             <div className="space-y-3">
//               <Label>Have you attended any classes today?</Label>
//               <RadioGroup
//                 value={attendedClassesToday}
//                 onValueChange={setAttendedClassesToday}
//                 className="flex gap-4"
//               >
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="no" id="no" />
//                   <Label htmlFor="no" className="cursor-pointer">No</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="yes" id="yes" />
//                   <Label htmlFor="yes" className="cursor-pointer">Yes</Label>
//                 </div>
//               </RadioGroup>
//             </div>

//             {/* Today's Classes Details (if Yes) */}
//             {attendedClassesToday === "yes" && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
//                 <div className="space-y-2">
//                   <Label htmlFor="conductedToday">Classes conducted today</Label>
//                   <Input
//                     id="conductedToday"
//                     type="number"
//                     min="0"
//                     placeholder="e.g., 5"
//                     value={classesCondictedToday}
//                     onChange={(e) => setClassesConductedToday(e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="attendedToday">Classes you attended today</Label>
//                   <Input
//                     id="attendedToday"
//                     type="number"
//                     min="0"
//                     placeholder="e.g., 4"
//                     value={classesAttendedToday}
//                     onChange={(e) => setClassesAttendedToday(e.target.value)}
//                   />
//                 </div>
//               </div>
//             )}

//             <div className="flex gap-2">
//               <Button onClick={calculateAttendance}>
//                 <Calculator className="w-4 h-4 mr-2" />
//                 Calculate
//               </Button>
//               {calculationResult && (
//                 <Button variant="outline" onClick={resetCalculation}>
//                   Reset
//                 </Button>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       )}

//       {/* Results */}
//       {calculationResult && (
//         <Card className="shadow-card border-border/50 bg-gradient-to-br from-primary/5 to-primary/10">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               {calculationResult.classesToAttend === 0 ? (
//                 <CheckCircle2 className="w-5 h-5 text-success" />
//               ) : (
//                 <AlertCircle className="w-5 h-5 text-warning" />
//               )}
//               Attendance Analysis
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//               <div className="text-center p-4 bg-background rounded-lg">
//                 <p className="text-3xl font-bold text-primary">
//                   {calculationResult.remainingClasses}
//                 </p>
//                 <p className="text-sm text-muted-foreground">Classes Remaining</p>
//               </div>
//               <div className="text-center p-4 bg-background rounded-lg">
//                 <p className="text-3xl font-bold text-warning">
//                   {calculationResult.classesToAttend}
//                 </p>
//                 <p className="text-sm text-muted-foreground">Must Attend</p>
//               </div>
//               <div className="text-center p-4 bg-background rounded-lg">
//                 <p className="text-3xl font-bold text-success">
//                   {calculationResult.canBunk}
//                 </p>
//                 <p className="text-sm text-muted-foreground">Can Bunk</p>
//               </div>
//               <div className="text-center p-4 bg-background rounded-lg">
//                 <p className="text-3xl font-bold">
//                   {calculationResult.projectedPercentage.toFixed(1)}%
//                 </p>
//                 <p className="text-sm text-muted-foreground">If 100% Attendance</p>
//               </div>
//             </div>

//             <div className="p-4 bg-background rounded-lg space-y-2">
//               <p className="font-medium">Summary:</p>
//               <p className="text-muted-foreground">
//                 Estimated classes remaining: <span className="font-semibold text-foreground">{calculationResult.remainingClasses}</span>
//               </p>
//               <p className="text-muted-foreground">
//                 You must attend at least <span className="font-semibold text-foreground">{calculationResult.classesToAttend}</span> more classes to reach 75% attendance.
//               </p>
//               {calculationResult.canBunk > 0 && (
//                 <p className="text-success">
//                   ✅ You can safely skip up to <span className="font-semibold">{calculationResult.canBunk}</span> classes and still maintain 75%.
//                 </p>
//               )}
//             </div>

//             <p className="text-xs text-muted-foreground italic">
//               💡 Today's classes are handled explicitly to avoid double counting. Results are based on a consistent attendance snapshot using the Even Semester calendar (Dec 2024 - Apr 15, 2025).
//             </p>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Save, Edit2, Calculator, Calendar, CheckCircle2, AlertCircle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Timetable {
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
}

/* =========================
   ACADEMIC CALENDAR
========================= */

const SEMESTER_START = new Date(2024, 11, 1); // Dec 1, 2024
const SEMESTER_END   = new Date(2025, 3, 15); // Apr 15, 2025

const HOLIDAYS: Record<string, number[]> = {
  "2024-12": [6, 7, 13, 14, 20, 21, 25, 27, 28],
  "2025-01": [3, 4, 10, 11, 12, 13, 14, 15, 16, 17, 18, 24, 25, 26, 31],
  "2025-02": [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 21, 22, 28],
  "2025-03": [1, 7, 8, 14, 15, 20, 21, 22, 28, 29],
  "2025-04": [3, 4, 5, 11, 12, 14],
};

const isWorkingDay = (date: Date): boolean => {
  const day = date.getDay(); // 0 = Sun, 6 = Sat
  if (day === 0 || day === 6) return false;

  if (date < SEMESTER_START || date > SEMESTER_END) return false;

  const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
  return !(HOLIDAYS[key] || []).includes(date.getDate());
};

const getDayName = (date: Date): keyof Timetable | null => {
  const map: (keyof Timetable | null)[] = [
    null, "monday", "tuesday", "wednesday", "thursday", "friday", null
  ];
  return map[date.getDay()];
};

const getClassesForDay = (date: Date, timetable: Timetable): number => {
  const day = getDayName(date);
  return day && isWorkingDay(date) ? timetable[day] : 0;
};

const conductedTillYesterday = (today: Date, timetable: Timetable): number => {
  let total = 0;
  const d = new Date(SEMESTER_START);

  const end = new Date(today);
  end.setDate(end.getDate() - 1);

  while (d <= end && d <= SEMESTER_END) {
    total += getClassesForDay(d, timetable);
    d.setDate(d.getDate() + 1);
  }
  return total;
};

const remainingClassesFromTomorrow = (today: Date, timetable: Timetable): number => {
  let total = 0;
  const d = new Date(today);
  d.setDate(d.getDate() + 1);

  while (d <= SEMESTER_END) {
    total += getClassesForDay(d, timetable);
    d.setDate(d.getDate() + 1);
  }
  return total;
};

/* =========================
   COMPONENT
========================= */

export default function AttendanceCalculator() {
  const [timetable, setTimetable] = useState<Timetable>({
    monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0,
  });
  const [savedTimetable, setSavedTimetable] = useState<Timetable | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAttendance, setCurrentAttendance] = useState("");
  const [attendedToday, setAttendedToday] = useState("no");
  const [conductedToday, setConductedToday] = useState("");
  const [attendedCountToday, setAttendedCountToday] = useState("");

  const [result, setResult] = useState<{
    remaining: number;
    mustAttend: number;
    canBunk: number;
    projected: number;
  } | null>(null);

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("user_timetables")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (data) {
        const t = {
          monday: data.monday,
          tuesday: data.tuesday,
          wednesday: data.wednesday,
          thursday: data.thursday,
          friday: data.friday,
        };
        setTimetable(t);
        setSavedTimetable(t);
      }
    })();
  }, []);

  const calculate = () => {
    if (!savedTimetable) return;

    const pct = parseFloat(currentAttendance);
    if (isNaN(pct) || pct < 0 || pct > 100) {
      toast.error("Invalid attendance percentage");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const baseConducted = conductedTillYesterday(today, savedTimetable);
    let baseAttended = Math.floor((pct / 100) * baseConducted);

    let todayConducted = 0;
    let todayAttended = 0;

    if (attendedToday === "yes") {
      todayConducted = Math.max(0, parseInt(conductedToday) || 0);
      todayAttended  = Math.max(0, parseInt(attendedCountToday) || 0);

      if (todayAttended > todayConducted) {
        toast.error("Attended today cannot exceed conducted today");
        return;
      }
    }

    const totalAttended = baseAttended + todayAttended;
    const totalConducted = baseConducted + todayConducted;

    const remaining = remainingClassesFromTomorrow(today, savedTimetable);
    const semesterTotal = totalConducted + remaining;

    const required = Math.ceil(semesterTotal * 0.75);
    const mustAttend = Math.max(0, required - totalAttended);
    const canBunk = Math.max(0, remaining - mustAttend);

    const projected = ((totalAttended + remaining) / semesterTotal) * 100;

    setResult({ remaining, mustAttend, canBunk, projected });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Calculate Attendance</CardTitle>
          <CardDescription>Accurate, today-aware attendance calculation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Label>Current Overall Attendance (%)</Label>
          <Input value={currentAttendance} onChange={e => setCurrentAttendance(e.target.value)} />

          <Label>Have you attended any classes today?</Label>
          <RadioGroup value={attendedToday} onValueChange={setAttendedToday}>
            <RadioGroupItem value="no" /> No
            <RadioGroupItem value="yes" /> Yes
          </RadioGroup>

          {attendedToday === "yes" && (
            <>
              <Label>Classes conducted today</Label>
              <Input value={conductedToday} onChange={e => setConductedToday(e.target.value)} />
              <Label>Classes you attended today</Label>
              <Input value={attendedCountToday} onChange={e => setAttendedCountToday(e.target.value)} />
            </>
          )}

          <Button onClick={calculate}>Calculate</Button>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardContent className="grid grid-cols-2 gap-4 text-center">
            <div><b>{result.remaining}</b><br/>Remaining</div>
            <div><b>{result.mustAttend}</b><br/>Must Attend</div>
            <div><b>{result.canBunk}</b><br/>Can Bunk</div>
            <div><b>{result.projected.toFixed(1)}%</b><br/>If 100%</div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
