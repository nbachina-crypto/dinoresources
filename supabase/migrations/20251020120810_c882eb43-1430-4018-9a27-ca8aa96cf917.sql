-- Add category and unit_number fields to resources table
ALTER TABLE public.resources 
ADD COLUMN category text DEFAULT 'general' CHECK (category IN ('syllabus', 'unit_1', 'unit_2', 'unit_3', 'unit_4', 'unit_5', 'pyq', 'general')),
ADD COLUMN unit_number integer CHECK (unit_number >= 1 AND unit_number <= 5);

-- Create index for faster queries by category
CREATE INDEX idx_resources_category ON public.resources(category);
CREATE INDEX idx_resources_subject_category ON public.resources(subject_id, category);