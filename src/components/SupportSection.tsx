import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import gpayQr from "@/assets/gpay-qr.jpeg";

const UPI_ID = "narenbachina22@okhdfcbank";

export function SupportSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      toast.success("UPI ID copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy UPI ID");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="shadow-card border-border/50 w-full max-w-md">
        <CardContent className="p-6 flex flex-col items-center text-center space-y-6">
          {/* QR Code */}
          <div className="rounded-xl overflow-hidden bg-background p-2 shadow-lg">
            <img 
              src={gpayQr} 
              alt="GPay QR Code" 
              className="w-56 h-56 sm:w-64 sm:h-64 object-contain"
            />
          </div>

          {/* UPI ID with Copy Button */}
          <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-4 py-3 w-full justify-center">
            <span className="font-mono text-sm sm:text-base text-foreground break-all">
              {UPI_ID}
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleCopy}
              className="shrink-0 h-8 w-8"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Helper Text */}
          <p className="text-sm text-muted-foreground">
            Copy the UPI ID and paste it in your preferred UPI app to complete your support.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
