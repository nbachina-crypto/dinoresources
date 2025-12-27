import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AddAnnouncementDialog } from "./AddAnnouncementDialog";
import { ExternalLink, Plus } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface Announcement {
  id: string;
  title: string;
  content: string;
  tag: string;
  created_at: string;
}

interface AnnouncementsSectionProps {
  isAdmin: boolean;
}

export function AnnouncementsSection({ isAdmin }: AnnouncementsSectionProps) {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const feedbackUrl = "https://forms.gle/vvqruVcKQdGSpgWh8";

  const loadAnnouncements = async () => {
    try {
      const { data, error } = await supabase
        .from("announcements")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setAnnouncements(data || []);
    } catch (err) {
      console.error("Error loading announcements:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAnnouncements();
  }, []);

  return (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <div>
            <CardTitle className="text-lg sm:text-xl">
              Announcements & Feedback
            </CardTitle>
            <CardDescription className="text-sm">
              Stay updated with the latest news
            </CardDescription>
          </div>

          <div className="flex items-center gap-2">
            {/* Give Feedback – icon + text (always visible) */}
            <Button variant="outline" size="sm" asChild>
              <a
                href={feedbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Feedback</span>
              </a>
            </Button>

            {/* Add Announcement – ONLY + icon, admin only */}
            {isAdmin && (
              <AddAnnouncementDialog
                onAnnouncementAdded={loadAnnouncements}
                trigger={
                  <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                }
              />
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[420px] pr-2">
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground text-sm">
              Loading announcements…
            </div>
          ) : announcements.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground text-sm">
              No announcements yet
            </div>
          ) : (
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="border rounded-lg p-4 space-y-2 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h3 className="font-semibold text-base sm:text-lg">
                      {announcement.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs shrink-0">
                      {announcement.tag}
                    </Badge>
                  </div>

                  {/* Content wraps vertically, no cutoff */}
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap break-words">
                    {announcement.content}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(
                      new Date(announcement.created_at),
                      { addSuffix: true }
                    )}
                  </p>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
