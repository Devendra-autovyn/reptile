import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, PiggyBank } from "lucide-react";

export default function SecureVaultCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
            <CardTitle>Secure Vault</CardTitle>
            <CardDescription>Your safeguarded money</CardDescription>
        </div>
        <ShieldCheck className="h-6 w-6 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">$5,000.00</div>
        <p className="text-xs text-muted-foreground mt-1">
          5% APY interest
        </p>
        <div className="mt-6 flex gap-4">
             <Button className="w-full">
                <PiggyBank className="mr-2 h-4 w-4" /> Deposit
            </Button>
             <Button variant="secondary" className="w-full">Manage</Button>
        </div>
      </CardContent>
    </Card>
  );
}
