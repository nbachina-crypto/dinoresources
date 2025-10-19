import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import AuthPage from "@/components/AuthPage";
import ProfileSetup from "@/components/ProfileSetup";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [needsProfileSetup, setNeedsProfileSetup] = useState(false);
  const isEditMode = new URLSearchParams(location.search).get("edit") === "true";

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        checkProfile(session.user.id);
      } else {
        setIsLoading(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        checkProfile(session.user.id);
      } else {
        setIsLoading(false);
        setNeedsProfileSetup(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkProfile = async (userId: string) => {
    const { data } = await supabase
      .from("profiles")
      .select("department, year, semester")
      .eq("id", userId)
      .single();

    const needsSetup = !data?.department || !data?.year || !data?.semester;
    setNeedsProfileSetup(needsSetup);
    setIsLoading(false);
  };

  const refreshProfile = () => {
    if (session?.user?.id) {
      checkProfile(session.user.id);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-subtle">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return <AuthPage />;
  }

  if (needsProfileSetup || isEditMode) {
    return <ProfileSetup onProfileUpdated={refreshProfile} />;
  }

  return <Dashboard key={session.user.id} />;
};

export default Index;
