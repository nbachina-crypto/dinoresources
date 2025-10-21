import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { GraduationCap, LogOut, Upload } from "lucide-react";
import UploadResourceDialog from "./UploadResourceDialog";
import SubjectDrawer from "./SubjectDrawer";

interface Profile {
  department: string;
  semester: number;
}

interface Subject {
  id: string;
  name: string;
}


export default function Dashboard() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [isContributor, setIsContributor] = useState(false);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (profile) {
      loadSubjects();
    }
  }, [profile]);


  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      navigate("/auth");
      return;
    }

    const { data: profileData } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", session.user.id)
      .single();

    if (!profileData?.department || !profileData?.semester) {
      navigate("/setup");
      return;
    }

    setProfile({
      department: profileData.department,
      semester: profileData.semester,
    });

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id);

    const hasContributorRole = roles?.some(
      (r) => r.role === "contributor" || r.role === "admin"
    );
    setIsContributor(hasContributorRole || false);

    setIsLoading(false);
  };

  const loadSubjects = async () => {
    if (!profile) return;

    const { data, error } = await supabase
      .from("subjects")
      .select("*")
      .eq("department", profile.department)
      .eq("semester", profile.semester)
      .order("name");

    if (error) {
      toast.error("Failed to load subjects");
      return;
    }

    setSubjects(data || []);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const handleSubjectClick = (subject: Subject) => {
    setSelectedSubject(subject);
    setIsDrawerOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-card mx-auto animate-pulse">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-subtle">
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-card">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Campus Resources</h1>
                {profile && (
                  <p className="text-sm text-muted-foreground">
                    {profile.department} • Sem {profile.semester}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate("/setup?edit=true")}>
                Edit Profile
              </Button>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Your Subjects</h2>
            <p className="text-muted-foreground">
              Click on a subject to view organized resources
            </p>
          </div>
          {isContributor && (
            <Button onClick={() => setIsUploadDialogOpen(true)}>
              <Upload className="w-4 h-4 mr-2" />
              Upload Resource
            </Button>
          )}
        </div>

        {subjects.length === 0 ? (
          <Card className="shadow-card border-border/50">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                No subjects found for your course. Contact your administrator.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject) => (
              <Card
                key={subject.id}
                className="shadow-card border-border/50 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleSubjectClick(subject)}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{subject.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Click to view resources
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      {selectedSubject && (
        <SubjectDrawer
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
          subjectId={selectedSubject.id}
          subjectName={selectedSubject.name}
          isContributor={isContributor}
        />
      )}

      {isContributor && subjects.length > 0 && (
        <UploadResourceDialog
          open={isUploadDialogOpen}
          onOpenChange={setIsUploadDialogOpen}
          subjects={subjects}
          onResourceUploaded={() => {
            // Drawer will reload its own resources
            setIsUploadDialogOpen(false);
          }}
        />
      )}
    </div>
  );
}
