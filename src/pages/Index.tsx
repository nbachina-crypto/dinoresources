import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import AuthPage from "@/components/AuthPage";
import ProfileSetup from "@/components/ProfileSetup";
import Dashboard from "@/components/Dashboard";
import ResetPassword from "@/components/ResetPassword";
import { toast } from "sonner";

const Index = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [needsProfileSetup, setNeedsProfileSetup] = useState(false);
  const [isPasswordRecovery, setIsPasswordRecovery] = useState(false);
  const isEditMode = new URLSearchParams(location.search).get("edit") === "true";
  const isRecoveryRef = useRef(false);

  useEffect(() => {
    // Set up auth listener FIRST to avoid missing PASSWORD_RECOVERY
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        setIsPasswordRecovery(true);
        setIsLoading(false);
      } else {
        setSession(session);
        if (session) {
          if (!isRecoveryRef.current) {
            checkProfile(session.user.id);
          } else {
            setIsLoading(false);
          }
        } else {
          setIsLoading(false);
          setNeedsProfileSetup(false);
        }
      }
    });

    // Detect recovery mode from URL (hash or search)
    const url = new URL(window.location.href);
    const hashParams = new URLSearchParams(url.hash.replace(/^#/, ""));
    const searchParams = new URLSearchParams(url.search);
    const isRecoveryType = (hashParams.get("type") || searchParams.get("type")) === "recovery";
    const hasAccessToken = !!(hashParams.get("access_token") || searchParams.get("access_token"));

    if (isRecoveryType && hasAccessToken) {
      isRecoveryRef.current = true;
      setIsPasswordRecovery(true);
      setIsLoading(false);
    } else {
      // THEN check for existing session
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        if (session) {
          checkProfile(session.user.id);
        } else {
          setIsLoading(false);
        }
      });
    }

    return () => subscription.unsubscribe();
  }, []);

  // Show success message after password reset and clean the URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("password_updated") === "1") {
      toast.success("Password successfully updated. Please log in.");
      const url = new URL(window.location.href);
      params.delete("password_updated");
      url.search = params.toString();
      window.history.replaceState({}, "", url.toString());
    }
  }, [location.search]);

  const checkProfile = async (userId: string) => {
    const { data } = await supabase
      .from("profiles")
      .select("department, semester")
      .eq("id", userId)
      .single();

    const needsSetup = !data?.department || !data?.semester;
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

  if (isPasswordRecovery) {
    return <ResetPassword />;
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
