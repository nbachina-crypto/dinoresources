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
    <Card className="mx-auto max-w-4xl w-full">
      <CardHeader className="px-3 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="text-base sm:text-xl truncate">
              Announcements & Feedback
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Stay updated with the latest news
            </CardDescription>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Give Feedback – always visible with text */}
            <Button variant="outline" size="sm" asChild className="shrink-0">
              <a
                href={feedbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Feedback</span>
              </a>
            </Button>

            {/* Add Announcement – icon only, admin only */}
            {isAdmin && (
              <AddAnnouncementDialog
                onAnnouncementAdded={loadAnnouncements}
                trigger={
                  <Button variant="outline" size="icon" className="shrink-0 h-9 w-9">
                    <Plus className="h-4 w-4" />
                  </Button>
                }
              />
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-3 sm:px-6">
        <ScrollArea className="sm:h-[420px] pr-2">
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground text-sm">
              Loading announcements…
            </div>
          ) : announcements.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground text-sm">
              No announcements yet
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="border rounded-lg p-3 sm:p-4 space-y-2 hover:bg-accent/50 transition-colors overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2">
                    <h3 className="font-semibold text-sm sm:text-lg break-words min-w-0">
                      {announcement.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs shrink-0 w-fit">
                      {announcement.tag}
                    </Badge>
                  </div>

                  {/* Content with horizontal scroll on mobile for long lines */}
                  {/* <div className="overflow-x-auto"> */}
                    <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap">
                      {announcement.content}
                    </p>
                  {/* </div> */}

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
