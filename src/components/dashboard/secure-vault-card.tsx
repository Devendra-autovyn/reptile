import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, PiggyBank } from "lucide-react";

export default function SecureVaultCard() {
  return (
    <Card
      className="h-full flex flex-col"
      style={{
        background: "rgba(255, 255, 255, 0.22)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
            <CardTitle>Secure Vault</CardTitle>
            <CardDescription>Your safeguarded money</CardDescription>
        </div>
        <ShieldCheck className="h-6 w-6 text-primary" />
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center">
        <div className="text-3xl font-bold">$5,000.00</div>
        <p className="text-xs text-muted-foreground mt-1">
          5% APY interest
        </p>
      </CardContent>
       <CardContent>
        <div className="flex gap-4">
             <Button className="w-full">
                <PiggyBank className="mr-2 h-4 w-4" /> Deposit
            </Button>
             <Button variant="secondary" className="w-full">Manage</Button>
        </div>
      </CardContent>
    </Card>
  );
}
