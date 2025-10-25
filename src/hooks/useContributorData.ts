import { useState, useCallback } from 'react';

interface Branch {
  id: string;
  name: string;
  code: string;
}

interface Semester {
  id: string;
  name: string;
}

interface College {
  id: string;
  name: string;
}

const MOCK_BRANCHES: Branch[] = [
  { id: '1', name: 'Computer Science', code: 'CS' },
  { id: '2', name: 'Information Technology', code: 'IT' },
  { id: '3', name: 'Electronics', code: 'EC' },
  { id: '4', name: 'Mechanical', code: 'ME' },
  { id: '5', name: 'Civil', code: 'CE' },
];

const MOCK_SEMESTERS: Semester[] = [
  { id: '1', name: 'Semester 1' },
  { id: '2', name: 'Semester 2' },
  { id: '3', name: 'Semester 3' },
  { id: '4', name: 'Semester 4' },
  { id: '5', name: 'Semester 5' },
  { id: '6', name: 'Semester 6' },
  { id: '7', name: 'Semester 7' },
  { id: '8', name: 'Semester 8' },
];

const MOCK_COLLEGES: College[] = [
  { id: '1', name: 'Engineering College A' },
  { id: '2', name: 'Engineering College B' },
  { id: '3', name: 'Engineering College C' },
];

export function useContributorData() {
  const [branches] = useState<Branch[]>(MOCK_BRANCHES);
  const [semesters] = useState<Semester[]>(MOCK_SEMESTERS);
  const [colleges] = useState<College[]>(MOCK_COLLEGES);
  const [loading] = useState({
    branches: false,
    semesters: false,
    colleges: false,
  });

  const fetchBranches = useCallback(async () => {
    // Using hardcoded data for now
  }, []);

  const fetchSemesters = useCallback(async () => {
    // Using hardcoded data for now
  }, []);

  const fetchColleges = useCallback(async () => {
    // Using hardcoded data for now
  }, []);

  return {
    branches,
    semesters,
    colleges,
    loading,
    fetchBranches,
    fetchSemesters,
    fetchColleges,
  };
}
