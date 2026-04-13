// src/hooks/useSubscription.ts
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client"; // adjust path if needed

export type SubscriptionStatus = "loading" | "active" | "inactive";

/**
 * Reads the current user's subscription from Supabase.
 * Falls back to localStorage cache so the UI is instant on reload.
 */
export function useSubscription() {
  const [status, setStatus] = useState<SubscriptionStatus>(() => {
    // Optimistic cache — updated after Supabase confirms
    try {
      return localStorage.getItem("studyai_subscribed") === "true" ? "active" : "loading";
    } catch {
      return "loading";
    }
  });

  const refresh = useCallback(async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setStatus("inactive");
        return;
      }

      const { data, error } = await supabase
        .from("subscriptions")
        .select("status")
        .eq("user_id", user.id)
        .single();

      const isActive = !error && data?.status === "active";
      setStatus(isActive ? "active" : "inactive");

      try {
        localStorage.setItem("studyai_subscribed", isActive ? "true" : "false");
      } catch { /* ignore */ }

    } catch (err) {
      console.error("useSubscription: failed to fetch", err);
      // Don't clear the optimistic state on network error
    }
  }, []);

  // Fetch on mount
  useEffect(() => {
    refresh();
  }, [refresh]);

  // Re-check when the tab regains focus (user might have paid in another tab)
  useEffect(() => {
    const onFocus = () => refresh();
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [refresh]);

  return {
    isSubscribed: status === "active",
    isLoading:    status === "loading",
    refresh,
  };
}