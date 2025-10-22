import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export type UserRole = "student" | "contributor" | "admin";

interface UseUserRoleReturn {
  role: UserRole | null;
  isAdmin: boolean;
  isContributor: boolean;
  isStudent: boolean;
  userId: string | null;
  isLoading: boolean;
}

export function useUserRole(): UseUserRoleReturn {
  const [role, setRole] = useState<UserRole | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserRole();
  }, []);

  const fetchUserRole = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setIsLoading(false);
        return;
      }

      setUserId(user.id);

      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id);

      if (roles && roles.length > 0) {
        // Priority: admin > contributor > student
        if (roles.some(r => r.role === "admin")) {
          setRole("admin");
        } else if (roles.some(r => r.role === "contributor")) {
          setRole("contributor");
        } else {
          setRole("student");
        }
      } else {
        setRole("student");
      }
    } catch (error) {
      console.error("Error fetching user role:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    role,
    isAdmin: role === "admin",
    isContributor: role === "contributor" || role === "admin",
    isStudent: role === "student",
    userId,
    isLoading,
  };
}
