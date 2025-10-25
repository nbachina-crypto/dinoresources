import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Video, Link2, Trash2, Edit, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { UserRole } from "@/hooks/useUserRole";

interface Resource {
  id: string;
  title: string;
  type: "pdf" | "youtube" | "link";
  url: string;
  created_at: string;
  created_by?: string | null;
  category?: string;
  unit_number?: number | null;
}

interface ResourceCardProps {
  resource: Resource;
  viewMode: "list" | "expanded";
  userRole: UserRole | null;
  userId: string | null;
  onUpdate: () => void;
}

export default function ResourceCard({ resource, viewMode, userRole, userId, onUpdate }: ResourceCardProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showViewDialog, setShowViewDialog] = useState(false);

  // Admin can delete any resource, contributor can only delete their own
  const canDelete = userRole === "admin" || (userRole === "contributor" && resource.created_by === userId);

  const getIcon = () => {
    switch (resource.type) {
      case "pdf":
        return <FileText className="w-4 h-4" />;
      case "youtube":
        return <Video className="w-4 h-4" />;
      case "link":
        return <Link2 className="w-4 h-4" />;
    }
  };

  const getTypeColor = () => {
    switch (resource.type) {
      case "pdf":
        return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
      case "youtube":
        return "bg-red-600/10 text-red-600 hover:bg-red-600/20";
      case "link":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
    }
  };

  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = url.match(
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/,
    )?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    const { error } = await supabase.from("resources").delete().eq("id", resource.id);

    setIsDeleting(false);
    setShowDeleteDialog(false);

    if (error) {
      toast.error("Failed to delete resource");
    } else {
      toast.success("Resource deleted successfully");
      onUpdate();
    }
  };

  // const renderResourceContent = () => {
  //   if (resource.type === "pdf") {
  //     return (
  //       <iframe
  //         src={resource.url}
  //         className="w-full h-[600px] rounded-lg border border-border"
  //         title={resource.title}
  //       />
  //     );
  //   }
  //   if (resource.type === "youtube") {
  //     return (
  //       <iframe
  //         src={getYoutubeEmbedUrl(resource.url) || resource.url}
  //         className="w-full h-[400px] rounded-lg"
  //         title={resource.title}
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //         allowFullScreen
  //       />
  //     );
  //   }
  //   return null;
  // };

  const renderResourceContent = () => {
    if (resource.type === "pdf") {
      return (
        <div className="w-full aspect-[3/2] sm:aspect-[16/9] overflow-hidden rounded-lg border border-border">
          <iframe src={resource.url} className="w-full h-full" title={resource.title} allowFullScreen />
        </div>
      );
    }

    if (resource.type === "youtube") {
      return (
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
          <iframe
            src={getYoutubeEmbedUrl(resource.url) || resource.url}
            className="w-full h-full"
            title={resource.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    return null;
  };

  const renderContent = () => {
    if (viewMode === "list") {
      return (
        // <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
        //   <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        //     <Badge className={getTypeColor()}>
        //       {getIcon()}
        //       <span className="ml-1 uppercase text-xs">{resource.type}</span>
        //     </Badge>
        //     <span className="font-medium truncate text-sm sm:text-base">{resource.title}</span>
        //   </div>
        //   <div className="flex gap-1 sm:gap-2 shrink-0">
        //     {(resource.type === "pdf" || resource.type === "youtube") && (
        //       <Button size="sm" onClick={() => setShowViewDialog(true)}>
        //         <Eye className="w-4 h-4 sm:mr-1" />
        //         <span className="hidden sm:inline">View</span>
        //       </Button>
        //     )}
        //     {resource.type === "link" && (
        //       <Button size="sm" asChild>
        //         <a href={resource.url} target="_blank" rel="noopener noreferrer">
        //           <ExternalLink className="w-4 h-4 sm:mr-1" />
        //           <span className="hidden sm:inline">Open</span>
        //         </a>
        //       </Button>
        //     )}
        //     {canDelete && (
        //       <Button size="sm" variant="destructive" onClick={() => setShowDeleteDialog(true)}>
        //         <Trash2 className="w-4 h-4" />
        //       </Button>
        //     )}
        //   </div>
        // </div>
         <div
      className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap cursor-pointer hover:bg-accent/50 rounded-lg px-2 sm:px-3 py-2 transition-colors"
      onClick={() => {
        if (resource.type === "pdf" || resource.type === "youtube") {
          setShowViewDialog(true);
        } else if (resource.type === "link") {
          window.open(resource.url, "_blank");
        }
      }}
    >
      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <Badge className={getTypeColor()}>
          {getIcon()}
          <span className="ml-1 uppercase text-xs">{resource.type}</span>
        </Badge>
        <span className="font-medium truncate text-sm sm:text-base">{resource.title}</span>
      </div>

      <div
        className="flex gap-1 sm:gap-2 shrink-0"
        onClick={(e) => e.stopPropagation()} // prevent triggering dialog when clicking buttons
      >
        {(resource.type === "pdf" || resource.type === "youtube") && (
          <Button size="sm" variant="outline" onClick={() => setShowViewDialog(true)}>
            <Eye className="w-4 h-4 sm:mr-1" />
            <span className="hidden sm:inline">Preview</span>
          </Button>
        )}
        {resource.type === "link" && (
          <Button size="sm" asChild>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 sm:mr-1" />
              <span className="hidden sm:inline">Open</span>
            </a>
          </Button>
        )}
        {canDelete && (
          <Button
            size="sm"
            variant="destructive"
            onClick={() => setShowDeleteDialog(true)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </div>

           
    </div>
      );
    }

    return (
      <>
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-base sm:text-lg break-words">{resource.title}</CardTitle>
            <div className="flex gap-2 shrink-0">
              <Badge className={getTypeColor()}>
                {getIcon()}
                <span className="ml-1 uppercase text-xs">{resource.type}</span>
              </Badge>
              {canDelete && (
                <Button size="sm" variant="destructive" onClick={() => setShowDeleteDialog(true)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {renderResourceContent()}
          {resource.type === "link" && (
            <Button asChild className="w-full">
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Resource
              </a>
            </Button>
          )}
        </CardContent>
      </>
    );
  };

  return (
    <>
      <Card className="shadow-card hover:shadow-hover transition-all border-border/50">
        {viewMode === "list" ? <CardContent className="py-4">{renderContent()}</CardContent> : renderContent()}
      </Card>

      {/* <Dialog open={showViewDialog} onOpenChange={setShowViewDialog}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] w-full">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-lg break-words pr-8">{resource.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 overflow-auto">{renderResourceContent()}</div>
        </DialogContent>
      </Dialog> */}
      <Dialog open={showViewDialog} onOpenChange={setShowViewDialog}>
        <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[80vw] max-w-4xl max-h-[85vh] overflow-y-auto p-4 rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-center text-base sm:text-lg font-semibold break-words">
              {resource.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">{renderResourceContent()}</div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Resource</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{resource.title}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
