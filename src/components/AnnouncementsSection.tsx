import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AddAnnouncementDialog } from "./AddAnnouncementDialog";
import { ExternalLink } from "lucide-react";
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
  const feedbackUrl = "https://forms.gle/vvqruVcKQdGSpgWh8"; // Customize this URL

  const loadAnnouncements = async () => {
    try {
      const { data, error } = await supabase
        .from("announcements")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setAnnouncements(data || []);
    } catch (error) {
      console.error("Error loading announcements:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAnnouncements();
  }, []);

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-lg sm:text-xl">Announcements & Feedback</CardTitle>
            <CardDescription className="text-sm">Stay updated with the latest news</CardDescription>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-initial">
              <a href={feedbackUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                <span className="truncate">Give Feedback</span>
              </a>
            </Button>
            {isAdmin && <AddAnnouncementDialog onAnnouncementAdded={loadAnnouncements} />}
          </div>
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto md:overflow-x-visible">
        <ScrollArea className="h-[400px] pr-2 sm:pr-4 touch-pan-y">
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground text-sm">Loading announcements...</div>
          ) : announcements.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground text-sm">No announcements yet</div>
          ) : (
            <div className="space-y-4 min-w-[280px]">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="border rounded-lg p-3 sm:p-4 space-y-2 hover:bg-accent/50 transition-colors min-w-[280px]"
                >
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h3 className="font-semibold text-base sm:text-lg">{announcement.title}</h3>
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      {announcement.tag}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground break-words">{announcement.content}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(announcement.created_at), { addSuffix: true })}
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
