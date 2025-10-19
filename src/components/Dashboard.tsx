import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { GraduationCap, LogOut, Upload, List, LayoutGrid } from "lucide-react";
import ResourceCard from "./ResourceCard";
import UploadResourceDialog from "./UploadResourceDialog";

interface Profile {
  department: string;
  year: number;
  semester: number;
}

interface Subject {
  id: string;
  name: string;
}

interface Resource {
  id: string;
  title: string;
  type: "pdf" | "youtube" | "link";
  url: string;
  created_at: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "expanded">("list");
  const [isContributor, setIsContributor] = useState(false);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (profile) {
      loadSubjects();
    }
  }, [profile]);

  useEffect(() => {
    if (selectedSubject) {
      loadResources();
    }
  }, [selectedSubject]);

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

    if (!profileData?.department || !profileData?.year || !profileData?.semester) {
      navigate("/setup");
      return;
    }

    setProfile({
      department: profileData.department,
      year: profileData.year,
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
      .eq("year", profile.year)
      .eq("semester", profile.semester)
      .order("name");

    if (error) {
      toast.error("Failed to load subjects");
      return;
    }

    setSubjects(data || []);
    if (data && data.length > 0) {
      setSelectedSubject(data[0].id);
    }
  };

  const loadResources = async () => {
    if (!selectedSubject) return;

    const { data, error } = await supabase
      .from("resources")
      .select("*")
      .eq("subject_id", selectedSubject)
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load resources");
      return;
    }

    setResources(data || []);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const handleResourceUploaded = () => {
    loadResources();
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
                    {profile.department} • Year {profile.year} • Sem {profile.semester}
                  </p>
                )}
              </div>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Your Resources</h2>
            <p className="text-muted-foreground">
              Browse and access study materials for your subjects
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "expanded" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("expanded")}
            >
              <LayoutGrid className="w-4 h-4" />
            </Button>
            {isContributor && (
              <Button onClick={() => setIsUploadDialogOpen(true)}>
                <Upload className="w-4 h-4 mr-2" />
                Upload Resource
              </Button>
            )}
          </div>
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
          <Tabs value={selectedSubject || ""} onValueChange={setSelectedSubject}>
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-card/50 p-2">
              {subjects.map((subject) => (
                <TabsTrigger key={subject.id} value={subject.id} className="flex-shrink-0">
                  {subject.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {subjects.map((subject) => (
              <TabsContent key={subject.id} value={subject.id} className="mt-6">
                {resources.length === 0 ? (
                  <Card className="shadow-card border-border/50">
                    <CardContent className="py-12 text-center">
                      <p className="text-muted-foreground">
                        No resources available yet for {subject.name}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className={viewMode === "list" ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
                    {resources.map((resource) => (
                      <ResourceCard
                        key={resource.id}
                        resource={resource}
                        viewMode={viewMode}
                        isContributor={isContributor}
                        onUpdate={loadResources}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        )}
      </main>

      {isContributor && subjects.length > 0 && (
        <UploadResourceDialog
          open={isUploadDialogOpen}
          onOpenChange={setIsUploadDialogOpen}
          subjects={subjects}
          onResourceUploaded={handleResourceUploaded}
        />
      )}
    </div>
  );
}
