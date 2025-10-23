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
  const feedbackUrl = "https://forms.google.com/your-form-url"; // Customize this URL

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
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Announcements & Feedback</CardTitle>
            <CardDescription>Stay updated with the latest news</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href={feedbackUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Give Feedback
              </a>
            </Button>
            {isAdmin && <AddAnnouncementDialog onAnnouncementAdded={loadAnnouncements} />}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">Loading announcements...</div>
          ) : announcements.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">No announcements yet</div>
          ) : (
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="border rounded-lg p-4 space-y-2 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-lg">{announcement.title}</h3>
                    <Badge variant="secondary" className="shrink-0">
                      {announcement.tag}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{announcement.content}</p>
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
