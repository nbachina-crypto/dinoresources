-- Insert subjects for Computer Science 3rd Year 5th Semester
INSERT INTO public.subjects (name, department, year, semester) VALUES
('Database Management System (DBMS)', 'Computer Science', 3, 5),
('Software Engineering (SE)', 'Computer Science', 3, 5),
('Formal Language and Automata Theory (FLAT)', 'Computer Science', 3, 5),
('Data Analysis and Algorithms (DAR)', 'Computer Science', 3, 5),
('Data Warehouse Mining (Open Elective)', 'Computer Science', 3, 5);

-- Insert sample resources for DBMS
INSERT INTO public.resources (subject_id, title, type, url)
SELECT id, 'DBMS Lecture Notes - Chapter 1', 'pdf', 'https://example.com/dbms_ch1.pdf'
FROM public.subjects WHERE name = 'Database Management System (DBMS)' AND department = 'Computer Science' AND year = 3 AND semester = 5;

INSERT INTO public.resources (subject_id, title, type, url)
SELECT id, 'DBMS YouTube Crash Course', 'youtube', 'https://youtube.com/watch?v=abcd1234'
FROM public.subjects WHERE name = 'Database Management System (DBMS)' AND department = 'Computer Science' AND year = 3 AND semester = 5;

-- Insert sample resources for SE
INSERT INTO public.resources (subject_id, title, type, url)
SELECT id, 'SE Lecture Slides', 'pdf', 'https://example.com/se_slides.pdf'
FROM public.subjects WHERE name = 'Software Engineering (SE)' AND department = 'Computer Science' AND year = 3 AND semester = 5;

-- Insert sample resources for FLAT
INSERT INTO public.resources (subject_id, title, type, url)
SELECT id, 'FLAT Concepts Video', 'youtube', 'https://youtube.com/watch?v=efgh5678'
FROM public.subjects WHERE name = 'Formal Language and Automata Theory (FLAT)' AND department = 'Computer Science' AND year = 3 AND semester = 5;

-- Insert sample resources for DAR
INSERT INTO public.resources (subject_id, title, type, url)
SELECT id, 'DAR Notes Chapter 2', 'pdf', 'https://example.com/dar_ch2.pdf'
FROM public.subjects WHERE name = 'Data Analysis and Algorithms (DAR)' AND department = 'Computer Science' AND year = 3 AND semester = 5;

-- Insert sample resources for Data Warehouse Mining
INSERT INTO public.resources (subject_id, title, type, url)
SELECT id, 'DWM Introduction Video', 'youtube', 'https://youtube.com/watch?v=ijkl91011'
FROM public.subjects WHERE name = 'Data Warehouse Mining (Open Elective)' AND department = 'Computer Science' AND year = 3 AND semester = 5;