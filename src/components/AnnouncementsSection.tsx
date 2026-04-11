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
import Linkify from "linkify-react";


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

  /* ----------------------------
     Shared announcement content
     ---------------------------- */
  const announcementContent = (
    <>
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
              className="border rounded-lg p-3 sm:p-4 space-y-2 hover:bg-accent/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                <h3 className="font-semibold text-sm sm:text-lg break-words">
                  {announcement.title}
                </h3>
                <Badge variant="secondary" className="text-xs w-fit shrink-0">
                  {announcement.tag}
                </Badge>
              </div>

              {/* IMPORTANT: vertical flow, no clipping */}
              {/* <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap break-words">
                {announcement.content}
              </p> */}
              <Linkify
                options={{
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-primary underline break-all",
                }}
              >
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap break-words">
                  {announcement.content}
                </p>
              </Linkify>


              <p className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(announcement.created_at), {
                  addSuffix: true,
                })}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );

  return (
    <Card className="mx-auto max-w-4xl w-full">
      {/* Header */}
      <CardHeader className="px-3 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="text-base sm:text-xl">
              Announcements & Feedback
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Stay updated with the latest news
            </CardDescription>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" size="sm" asChild>
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

            {isAdmin && (
              <AddAnnouncementDialog
                onAnnouncementAdded={loadAnnouncements}
                trigger={
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                }
              />
            )}
          </div>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="px-3 sm:px-6">
        {/* Mobile: NO ScrollArea (fixes clipping) */}
        <div className="block sm:hidden">
          {announcementContent}
        </div>

        {/* Desktop: ScrollArea */}
        <div className="hidden sm:block">
          <ScrollArea className="h-[420px] pr-2">
            {announcementContent}
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
}
