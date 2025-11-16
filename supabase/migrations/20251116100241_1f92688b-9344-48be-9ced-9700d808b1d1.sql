-- Add Machine Learning subject to 5th semester CSE
INSERT INTO public.subjects (name, semester, department, order_index)
VALUES ('Machine Learning', 5, 'CSE', 
  (SELECT COALESCE(MAX(order_index), 0) + 1 FROM public.subjects WHERE semester = 5 AND department = 'CSE'));