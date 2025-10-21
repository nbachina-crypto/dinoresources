-- Drop any existing check constraints on category
ALTER TABLE public.resources DROP CONSTRAINT IF EXISTS resources_category_check;

-- Drop the default first
ALTER TABLE public.resources ALTER COLUMN category DROP DEFAULT;

-- Drop existing enum if it exists
DROP TYPE IF EXISTS public.resource_category CASCADE;

-- Create enum for resource categories
CREATE TYPE public.resource_category AS ENUM (
  'Syllabus',
  'Unit 1',
  'Unit 2',
  'Unit 3',
  'Unit 4',
  'Unit 5',
  'Previous Papers'
);

-- Update existing category values to match new enum
UPDATE public.resources SET category = 'Syllabus' WHERE category IN ('general', 'syllabus');
UPDATE public.resources SET category = 'Unit 1' WHERE category = 'unit_1';
UPDATE public.resources SET category = 'Unit 2' WHERE category = 'unit_2';
UPDATE public.resources SET category = 'Unit 3' WHERE category = 'unit_3';
UPDATE public.resources SET category = 'Unit 4' WHERE category = 'unit_4';
UPDATE public.resources SET category = 'Unit 5' WHERE category = 'unit_5';
UPDATE public.resources SET category = 'Previous Papers' WHERE category = 'pyq';

-- Alter column to use enum type
ALTER TABLE public.resources 
ALTER COLUMN category TYPE resource_category USING category::resource_category;

-- Now set the default and NOT NULL constraint
ALTER TABLE public.resources 
ALTER COLUMN category SET DEFAULT 'Syllabus'::resource_category;

ALTER TABLE public.resources 
ALTER COLUMN category SET NOT NULL;