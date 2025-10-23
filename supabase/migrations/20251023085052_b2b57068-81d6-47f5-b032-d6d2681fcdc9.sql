-- Create announcements table
CREATE TABLE public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  tag TEXT NOT NULL,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

-- Everyone can view announcements
CREATE POLICY "Anyone can view announcements"
ON public.announcements
FOR SELECT
USING (true);

-- Only admins can insert announcements
CREATE POLICY "Admins can insert announcements"
ON public.announcements
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update announcements
CREATE POLICY "Admins can update announcements"
ON public.announcements
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete announcements
CREATE POLICY "Admins can delete announcements"
ON public.announcements
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for faster ordering
CREATE INDEX idx_announcements_created_at ON public.announcements(created_at DESC);