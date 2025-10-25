import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
  fullName: string;
  registrationNumber?: string;
  department?: string;
  phoneNumber?: string;
  role: 'student' | 'contributor' | 'admin';
  semester?: string;
  branchId?: string;
  secretCode?: string;
  collegeId?: string;
  customCollege?: string;
}

export function useAuthFlow() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSignIn = async (data: SignInData) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Signed in successfully',
      });
      return true;
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to sign in',
        variant: 'destructive',
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (data: SignUpData) => {
    setIsLoading(true);
    try {
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            full_name: data.fullName,
            registration_number: data.registrationNumber,
            department: data.department,
            phone_number: data.phoneNumber,
            role: data.role,
            semester: data.semester,
            branch_id: data.branchId,
            college_id: data.collegeId,
          },
        },
      });

      if (signUpError) throw signUpError;

      toast({
        title: 'Success',
        description: 'Account created successfully. Please check your email to confirm.',
      });
      return true;
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to create account',
        variant: 'destructive',
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSignIn,
    handleSignUp,
    isLoading,
  };
}
