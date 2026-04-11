import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import dinoLogo from "@/assets/dino-logo.png";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
      },
    });

    setIsLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created! Please check your email to verify.");
    }
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      toast.error(error.message);
    } else if (data.user) {
      // --- SINGLE DEVICE LOGIN LOGIC ---
      // 1. Generate a random token for THIS specific browser
      const deviceToken = Date.now().toString(36) + Math.random().toString(36).substring(2);
      
      // 2. Save it to the browser's local storage
      localStorage.setItem("device_token", deviceToken);

      // 3. Save it to the user's profile in the database
      await supabase
        .from("profiles")
        .update({ session_token: deviceToken })
        .eq("id", data.user.id);
      // ---------------------------------

      toast.success("Welcome back!");
      navigate("/");
    }
  };

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsResettingPassword(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("reset-email") as string;

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setIsResettingPassword(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Password reset email sent! Check your inbox.");
      setIsForgotPasswordOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090b] p-4 relative overflow-hidden selection:bg-white/20">
      
      {/* Premium Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[420px] space-y-8 relative z-10 animate-in fade-in zoom-in-95 duration-500">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center border border-white/10 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] relative group cursor-default">
              <div className="absolute inset-0 bg-white/5 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={dinoLogo} alt="Team Dino Logo" className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Team Dino</h1>
          <p className="text-zinc-400 font-medium">Access your ultimate study workspace.</p>
        </div>

        {/* Main Auth Card */}
        <div className="bg-[#121214] border border-white/5 rounded-[40px] p-6 sm:p-8 shadow-2xl">
          <Tabs defaultValue="signin" className="w-full">
            
            <TabsList className="grid w-full grid-cols-2 bg-[#0a0a0c] border border-white/5 rounded-full p-1 h-12 mb-8 shadow-inner">
              <TabsTrigger 
                value="signin"
                className="rounded-full h-full data-[state=active]:bg-white data-[state=active]:text-black text-zinc-500 font-semibold transition-all"
              >
                Log In
              </TabsTrigger>
              <TabsTrigger 
                value="signup"
                className="rounded-full h-full data-[state=active]:bg-white data-[state=active]:text-black text-zinc-500 font-semibold transition-all"
              >
                Create Account
              </TabsTrigger>
            </TabsList>

            {/* Sign In Form */}
            <TabsContent value="signin" className="space-y-6 animate-in slide-in-from-left-4 duration-300">
              <form onSubmit={handleSignIn} className="space-y-5">
                <div className="space-y-2 relative">
                  <Label htmlFor="signin-email" className="text-zinc-400 font-medium pl-1">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <Input 
                      id="signin-email" 
                      name="email" 
                      type="email" 
                      placeholder="name@university.edu" 
                      className="bg-[#0a0a0c] border-white/10 text-white h-14 pl-12 rounded-2xl focus-visible:ring-indigo-500/50 placeholder:text-zinc-600 transition-all"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between pl-1 pr-2">
                    <Label htmlFor="signin-password" className="text-zinc-400 font-medium">Password</Label>
                    
                    <Dialog open={isForgotPasswordOpen} onOpenChange={setIsForgotPasswordOpen}>
                      <DialogTrigger asChild>
                        <Button variant="link" className="p-0 h-auto text-sm text-indigo-400 hover:text-indigo-300 font-medium">
                          Forgot?
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-[#121214] border border-white/10 text-white sm:max-w-md rounded-[32px] p-8">
                        <DialogHeader>
                          <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                            <ShieldCheck className="w-6 h-6 text-indigo-400" />
                          </div>
                          <DialogTitle className="text-2xl font-bold">Reset Password</DialogTitle>
                          <DialogDescription className="text-zinc-400 mt-2">
                            Enter your registered email address and we'll send you a secure link to reset your password.
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleForgotPassword} className="space-y-6 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="reset-email" className="text-zinc-400">Email Address</Label>
                            <Input
                              id="reset-email"
                              name="reset-email"
                              type="email"
                              placeholder="name@university.edu"
                              className="bg-[#0a0a0c] border-white/10 text-white h-12 rounded-xl focus-visible:ring-indigo-500/50"
                              required
                            />
                          </div>
                          <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200 h-12 rounded-full font-bold" disabled={isResettingPassword}>
                            {isResettingPassword ? "Sending Link..." : "Send Reset Link"}
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <Input 
                      id="signin-password" 
                      name="password" 
                      type="password" 
                      placeholder="••••••••"
                      className="bg-[#0a0a0c] border-white/10 text-white h-14 pl-12 rounded-2xl focus-visible:ring-indigo-500/50 placeholder:text-zinc-600 transition-all"
                      required 
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200 h-14 rounded-full font-bold text-base mt-4 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02]" disabled={isLoading}>
                  {isLoading ? "Authenticating..." : "Log In"} 
                  {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </form>
            </TabsContent>

            {/* Sign Up Form */}
            <TabsContent value="signup" className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              <form onSubmit={handleSignUp} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-zinc-400 font-medium pl-1">University Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <Input 
                      id="signup-email" 
                      name="email" 
                      type="email" 
                      placeholder="name@university.edu" 
                      className="bg-[#0a0a0c] border-white/10 text-white h-14 pl-12 rounded-2xl focus-visible:ring-indigo-500/50 placeholder:text-zinc-600 transition-all"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-zinc-400 font-medium pl-1">Create Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <Input 
                      id="signup-password" 
                      name="password" 
                      type="password" 
                      placeholder="Minimum 6 characters"
                      minLength={6} 
                      className="bg-[#0a0a0c] border-white/10 text-white h-14 pl-12 rounded-2xl focus-visible:ring-indigo-500/50 placeholder:text-zinc-600 transition-all"
                      required 
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200 h-14 rounded-full font-bold text-base mt-4 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02]" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create Account"}
                  {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </form>
            </TabsContent>

          </Tabs>
        </div>

        <p className="text-center text-xs text-zinc-600 font-medium">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>

      </div>
    </div>
  );
}