import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";

interface Subject {
  id: string;
  name: string;
  department: string;
  semester: number;
}

interface UploadResourceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  subjects: Subject[];
  onResourceUploaded: () => void;
}

const DEPARTMENTS = [
  "Computer Science",
  "Information Technology",
  "Electronics",
  "Mechanical",
  "Civil",
  "Electrical",
];

const SEMESTERS = [1, 2, 3, 4, 5, 6, 7, 8];

export default function UploadResourceDialog({
  open,
  onOpenChange,
  subjects,
  onResourceUploaded,
}: UploadResourceDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState<"pdf" | "youtube" | "link">("pdf");
  const [url, setUrl] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [category, setCategory] = useState<"Syllabus" | "Unit 1" | "Unit 2" | "Unit 3" | "Unit 4" | "Unit 5" | "Previous Papers" | "All Units Resources" | "Additional Resources">("Syllabus");
  const [uploadMode, setUploadMode] = useState<"url" | "file">("url");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [filteredSubjects, setFilteredSubjects] = useState<Subject[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedDepartment && selectedSemester) {
      loadSubjects();
    } else {
      setFilteredSubjects([]);
      setSubjectId("");
    }
  }, [selectedDepartment, selectedSemester]);

  const loadSubjects = async () => {
    const { data, error } = await supabase
      .from("subjects")
      .select("*")
      .eq("department", selectedDepartment)
      .eq("semester", parseInt(selectedSemester))
      .order("name");

    if (error) {
      toast.error("Failed to load subjects");
      return;
    }

    setFilteredSubjects(data || []);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    const maxSize = 50 * 1024 * 1024; // 50MB
    const allowedTypes = ['application/pdf', 'video/mp4', 'video/webm'];
    
    if (file.size > maxSize) {
      toast.error("File size must be less than 50MB");
      return;
    }
    
    if (!allowedTypes.includes(file.type) && !file.type.startsWith('video/')) {
      toast.error("Only PDF and video files are supported");
      return;
    }
    
    setSelectedFile(file);
    setUploadMode("file");
    if (!title) {
      setTitle(file.name.replace(/\.[^/.]+$/, ""));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      toast.error("Not authenticated");
      setIsLoading(false);
      return;
    }

    let resourceUrl = url;

    if (uploadMode === "file" && selectedFile) {
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;
      
      const { error: uploadError, data } = await supabase.storage
        .from('resources')
        .upload(fileName, selectedFile);

      if (uploadError) {
        toast.error("Failed to upload file");
        setIsLoading(false);
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('resources')
        .getPublicUrl(fileName);

      resourceUrl = publicUrl;
    }

    const { error } = await supabase.from("resources").insert({
      title,
      type,
      url: resourceUrl,
      subject_id: subjectId,
      created_by: user.id,
      category,
    });

    setIsLoading(false);

    if (error) {
      toast.error("Failed to upload resource");
    } else {
      toast.success("Resource uploaded successfully!");
      setTitle("");
      setUrl("");
      setSubjectId("");
      setCategory("Syllabus");
      setSelectedFile(null);
      setUploadMode("url");
      setSelectedDepartment("");
      setSelectedSemester("");
      setFilteredSubjects([]);
      onOpenChange(false);
      onResourceUploaded();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Upload Resource</DialogTitle>
          <DialogDescription>
            Add a new resource by uploading a file or providing a link.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Upload Method</Label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={uploadMode === "file" ? "default" : "outline"}
                onClick={() => setUploadMode("file")}
                className="flex-1"
              >
                <Upload className="mr-2 h-4 w-4" />
                File Upload
              </Button>
              <Button
                type="button"
                variant={uploadMode === "url" ? "default" : "outline"}
                onClick={() => setUploadMode("url")}
                className="flex-1"
              >
                URL Link
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment} required>
                <SelectTrigger id="department">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {DEPARTMENTS.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="semester">Semester</Label>
              <Select value={selectedSemester} onValueChange={setSelectedSemester} required>
                <SelectTrigger id="semester">
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  {SEMESTERS.map((sem) => (
                    <SelectItem key={sem} value={sem.toString()}>
                      Semester {sem}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Select 
              value={subjectId} 
              onValueChange={setSubjectId} 
              required
              disabled={!selectedDepartment || !selectedSemester}
            >
              <SelectTrigger id="subject">
                <SelectValue placeholder={
                  !selectedDepartment || !selectedSemester 
                    ? "Select department and semester first" 
                    : "Select subject"
                } />
              </SelectTrigger>
              <SelectContent>
                {filteredSubjects.map((subject) => (
                  <SelectItem key={subject.id} value={subject.id}>
                    {subject.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Lecture Notes Chapter 5"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Resource Type</Label>
            <Select value={type} onValueChange={(v) => setType(v as "pdf" | "youtube" | "link")} required>
              <SelectTrigger id="type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="youtube">YouTube Video</SelectItem>
                <SelectItem value="link">External Link</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {uploadMode === "file" ? (
            <div className="space-y-2">
              <Label>File Upload</Label>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragging
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,video/*"
                  onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                  className="hidden"
                />
                {selectedFile ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm">{selectedFile.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFile(null);
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Drag & drop a file here, or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PDF or Video files, max 50MB
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={
                  type === "pdf"
                    ? "https://example.com/file.pdf"
                    : type === "youtube"
                    ? "https://youtube.com/watch?v=..."
                    : "https://example.com"
                }
                required={uploadMode === "url"}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={(v) => setCategory(v as typeof category)} required>
              <SelectTrigger id="category">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Syllabus">Syllabus</SelectItem>
                <SelectItem value="Unit 1">Unit 1</SelectItem>
                <SelectItem value="Unit 2">Unit 2</SelectItem>
                <SelectItem value="Unit 3">Unit 3</SelectItem>
                <SelectItem value="Unit 4">Unit 4</SelectItem>
                <SelectItem value="Unit 5">Unit 5</SelectItem>
                <SelectItem value="Previous Papers">Previous Papers</SelectItem>
                <SelectItem value="All Units Resources">All Units Resources</SelectItem>
                <SelectItem value="Additional Resources">Additional Resources</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={
                isLoading || 
                !title || 
                !subjectId || 
                (uploadMode === "url" && !url) ||
                (uploadMode === "file" && !selectedFile)
              }
            >
              {isLoading ? "Uploading..." : "Upload"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
