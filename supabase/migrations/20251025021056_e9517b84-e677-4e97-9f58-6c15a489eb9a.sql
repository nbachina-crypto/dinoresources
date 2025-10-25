-- Create storage bucket for resource files
INSERT INTO storage.buckets (id, name, public)
VALUES ('resources', 'resources', true);

-- Create RLS policies for resources bucket
CREATE POLICY "Anyone can view resource files"
ON storage.objects FOR SELECT
USING (bucket_id = 'resources');

CREATE POLICY "Contributors and admins can upload resource files"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'resources' AND
  (auth.uid() IN (
    SELECT user_id FROM public.user_roles
    WHERE role IN ('contributor', 'admin')
  ))
);

CREATE POLICY "Contributors can delete their own resource files"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'resources' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Admins can delete all resource files"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'resources' AND
  auth.uid() IN (
    SELECT user_id FROM public.user_roles
    WHERE role = 'admin'
  )
);