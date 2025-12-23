import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import gpayQr from "@/assets/gpay_qr.jpeg";

export function SupportSection() {
  const [copied, setCopied] = useState(false);
  const upiId = "narenbachina22@okhdfcbank";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      toast.success("UPI ID copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy UPI ID");
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">Support Our Mission</h2>
        <p className="text-muted-foreground">
          Our domain, hosting, and database costs are increasing. If Team Dino has helped you in your exam preparation, consider supporting us. Your contribution helps us keep everything free for all students.
        </p>
      </div>

      <Card className="shadow-card border-border/50 max-w-md mx-auto">
        <CardContent className="p-6 flex flex-col items-center space-y-4">
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <img
              src={gpayQr}
              alt="GPay QR Code for donations"
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
            />
          </div>

          <div className="w-full space-y-2">
            <div className="flex items-center justify-center gap-2 bg-muted/50 rounded-lg px-4 py-3">
              <span className="text-sm font-mono text-foreground break-all">
                UPI ID: {upiId}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="shrink-0 h-8 w-8 p-0"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Scan the QR or copy the UPI ID and pay using any UPI app.
            </p>
          </div>

          <p className="text-sm text-muted-foreground text-center pt-2 border-t border-border/50 w-full">
            Every contribution helps. Thank you for supporting Team Dino ❤️
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
