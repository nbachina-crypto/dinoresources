// import { useEffect, useState } from "react";
// import { supabase } from "@/integrations/supabase/client";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { AddAnnouncementDialog } from "./AddAnnouncementDialog";
// import { ExternalLink, Plus } from "lucide-react";
// import { formatDistanceToNow } from "date-fns";

// interface Announcement {
//   id: string;
//   title: string;
//   content: string;
//   tag: string;
//   created_at: string;
// }

// interface AnnouncementsSectionProps {
//   isAdmin: boolean;
// }

// export function AnnouncementsSection({ isAdmin }: AnnouncementsSectionProps) {
//   const [announcements, setAnnouncements] = useState<Announcement[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const feedbackUrl = "https://forms.gle/vvqruVcKQdGSpgWh8";

//   const loadAnnouncements = async () => {
//     try {
//       const { data, error } = await supabase
//         .from("announcements")
//         .select("*")
//         .order("created_at", { ascending: false });

//       if (error) throw error;
//       setAnnouncements(data || []);
//     } catch (err) {
//       console.error("Error loading announcements:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadAnnouncements();
//   }, []);

//   return (
//     <Card className="mx-auto max-w-4xl w-full">
//       <CardHeader className="px-3 sm:px-6">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
//           <div className="min-w-0">
//             <CardTitle className="text-base sm:text-xl truncate">
//               Announcements & Feedback
//             </CardTitle>
//             <CardDescription className="text-xs sm:text-sm">
//               Stay updated with the latest news
//             </CardDescription>
//           </div>

//           <div className="flex items-center gap-2 shrink-0">
//             {/* Give Feedback – always visible with text */}
//             <Button variant="outline" size="sm" asChild className="shrink-0">
//               <a
//                 href={feedbackUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-1.5"
//               >
//                 <ExternalLink className="h-4 w-4" />
//                 <span>Feedback</span>
//               </a>
//             </Button>

//             {/* Add Announcement – icon only, admin only */}
//             {isAdmin && (
//               <AddAnnouncementDialog
//                 onAnnouncementAdded={loadAnnouncements}
//                 trigger={
//                   <Button variant="outline" size="icon" className="shrink-0 h-9 w-9">
//                     <Plus className="h-4 w-4" />
//                   </Button>
//                 }
//               />
//             )}
//           </div>
//         </div>
//       </CardHeader>

//       <CardContent className="px-3 sm:px-6">
//         <ScrollArea className="sm:h-[420px] pr-2">
//           {isLoading ? (
//             <div className="text-center py-8 text-muted-foreground text-sm">
//               Loading announcements…
//             </div>
//           ) : announcements.length === 0 ? (
//             <div className="text-center py-8 text-muted-foreground text-sm">
//               No announcements yet
//             </div>
//           ) : (
//             <div className="space-y-3 sm:space-y-4">
//               {announcements.map((announcement) => (
//                 <div
//                   key={announcement.id}
//                   className="border rounded-lg p-3 sm:p-4 space-y-2 hover:bg-accent/50 transition-colors"
//                 >
//                   <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2">
//                     <h3 className="font-semibold text-sm sm:text-lg break-words min-w-0">
//                       {announcement.title}
//                     </h3>
//                     <Badge variant="secondary" className="text-xs shrink-0 w-fit">
//                       {announcement.tag}
//                     </Badge>
//                   </div>

//                   {/* Content with horizontal scroll on mobile for long lines */}
//                   {/* <div className="overflow-x-auto"> */}
//                     <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap">
//                       {announcement.content}
//                     </p>
//                   {/* </div> */}

//                   <p className="text-xs text-muted-foreground">
//                     {formatDistanceToNow(
//                       new Date(announcement.created_at),
//                       { addSuffix: true }
//                     )}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </ScrollArea>
//       </CardContent>
//     </Card>
//   );
// }
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AddAnnouncementDialog } from "./AddAnnouncementDialog";
import { ExternalLink, Plus, Megaphone, Clock, Info } from "lucide-react";
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
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <div className="w-8 h-8 rounded-full border-2 border-orange-500/20 border-t-orange-500 animate-spin" />
          <p className="text-zinc-500 text-sm font-medium">Loading updates...</p>
        </div>
      ) : announcements.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 border border-dashed border-white/5 rounded-3xl bg-[#121214]">
          <Info className="w-10 h-10 text-zinc-600 mb-3" />
          <p className="text-zinc-400 font-medium">No announcements yet</p>
          <p className="text-zinc-600 text-sm mt-1">Check back later for updates</p>
        </div>
      ) : (
        <div className="space-y-4 pr-0 sm:pr-4">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="group bg-[#121214] border border-white/5 rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:bg-[#18181b] hover:border-white/10 relative overflow-hidden"
            >
              {/* Subtle hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/[0.03] to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 relative z-10">
                <h3 className="font-semibold text-zinc-100 text-base sm:text-lg leading-tight break-words pr-2">
                  {announcement.title}
                </h3>
                <span className="shrink-0 w-fit px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[10px] font-bold tracking-widest uppercase shadow-sm">
                  {announcement.tag}
                </span>
              </div>

              <div className="relative z-10">
                <Linkify
                  options={{
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors break-all",
                  }}
                >
                  <p className="text-sm text-zinc-400 leading-relaxed whitespace-pre-wrap break-words mb-5 font-normal">
                    {announcement.content}
                  </p>
                </Linkify>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium relative z-10">
                <Clock className="w-3.5 h-3.5" />
                {formatDistanceToNow(new Date(announcement.created_at), {
                  addSuffix: true,
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );

  return (
    <div className="w-full flex flex-col">
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shadow-lg">
            <Megaphone className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white">Latest Updates</h2>
            <p className="text-sm text-zinc-400 mt-0.5">Campus news and platform changes</p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="bg-[#121214] border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white rounded-full transition-colors"
          >
            <a
              href={feedbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4"
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
                  className="h-9 w-9 bg-white text-black hover:bg-zinc-200 border-transparent rounded-full shadow-md"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              }
            />
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full">
        {/* Mobile: NO ScrollArea (fixes clipping) */}
        <div className="block sm:hidden">
          {announcementContent}
        </div>

        {/* Desktop: ScrollArea */}
        <div className="hidden sm:block">
          <ScrollArea className="h-[500px]">
            {announcementContent}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}