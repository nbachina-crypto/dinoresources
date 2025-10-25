import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuthFlow, SignInData, SignUpData } from '@/hooks/useAuthFlow';
import { useContributorData } from '@/hooks/useContributorData';

interface SignInFormProps {
  onSwitchToSignUp: () => void;
  onSwitchToForgotPassword: () => void;
}

function SignInForm({ onSwitchToSignUp, onSwitchToForgotPassword }: SignInFormProps) {
  const { handleSignIn, isLoading } = useAuthFlow();
  const [formData, setFormData] = useState<SignInData>({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSignIn(formData);
  };

  const handleInputChange = (field: keyof SignInData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <Button
              type="button"
              variant="link"
              onClick={onSwitchToForgotPassword}
              className="p-0 h-auto"
            >
              Forgot password?
            </Button>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>

          <div className="text-center text-sm">
            Don't have an account?{' '}
            <Button
              type="button"
              variant="link"
              onClick={onSwitchToSignUp}
              className="p-0 h-auto"
            >
              Sign up
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

interface SignUpFormProps {
  onSwitchToSignIn: () => void;
}

function SignUpForm({ onSwitchToSignIn }: SignUpFormProps) {
  const { handleSignUp, isLoading } = useAuthFlow();
  const { branches, semesters, colleges, loading, fetchBranches, fetchSemesters, fetchColleges } = useContributorData();
  
  const [formData, setFormData] = useState<SignUpData>({
    email: '',
    password: '',
    fullName: '',
    registrationNumber: '',
    department: '',
    phoneNumber: '',
    role: 'student',
    semester: '',
    branchId: '',
    secretCode: '',
    collegeId: '',
    customCollege: ''
  });

  const [showCustomCollege, setShowCustomCollege] = useState(false);

  useEffect(() => {
    fetchBranches();
    fetchSemesters();
    fetchColleges();
  }, [fetchBranches, fetchSemesters, fetchColleges]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handleSignUp(formData);
    if (success) {
      setFormData({
        email: '',
        password: '',
        fullName: '',
        registrationNumber: '',
        department: '',
        phoneNumber: '',
        role: 'student',
        semester: '',
        branchId: '',
        secretCode: '',
        collegeId: '',
        customCollege: ''
      });
      onSwitchToSignIn();
    }
  };

  const handleInputChange = (field: keyof SignUpData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddCustomCollege = async () => {
    if (formData.customCollege.trim()) {
      console.log('Adding custom college:', formData.customCollege);
      setShowCustomCollege(false);
      setFormData(prev => ({ ...prev, customCollege: '' }));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Join our platform and start contributing to academic resources
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="role" value="student" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password *</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>

          {formData.role === 'student' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="registrationNumber">Registration Number *</Label>
                  <Input
                    id="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                    placeholder="Enter registration number"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    placeholder="Enter department"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="branch">Branch *</Label>
                  <Select
                    value={formData.branchId}
                    onValueChange={(value) => handleInputChange('branchId', value)}
                    disabled={loading.branches}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                    <SelectContent>
                      {branches.map((branch) => (
                        <SelectItem key={branch.id} value={branch.id}>
                          {branch.name} ({branch.code})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="semester">Semester *</Label>
                  <Select
                    value={formData.semester}
                    onValueChange={(value) => handleInputChange('semester', value)}
                    disabled={loading.semesters}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      {semesters.map((semester) => (
                        <SelectItem key={semester.id} value={semester.id}>
                          {semester.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Create Account'}
          </Button>

          <div className="text-center text-sm">
            Already have an account?{' '}
            <Button
              type="button"
              variant="link"
              onClick={onSwitchToSignIn}
              className="p-0 h-auto"
            >
              Sign in
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default function AuthPage() {
  const [view, setView] = useState<'signin' | 'signup' | 'forgot'>('signin');

  return (
    <div className="min-h-screen flex items-center justify-center gradient-subtle p-4">
      <div className="w-full max-w-md">
        {view === 'signin' && (
          <SignInForm
            onSwitchToSignUp={() => setView('signup')}
            onSwitchToForgotPassword={() => setView('forgot')}
          />
        )}
        {view === 'signup' && (
          <SignUpForm onSwitchToSignIn={() => setView('signin')} />
        )}
        {view === 'forgot' && (
          <Card>
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
              <CardDescription>
                Enter your email to receive a password reset link
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="link"
                onClick={() => setView('signin')}
                className="p-0 h-auto"
              >
                Back to sign in
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
