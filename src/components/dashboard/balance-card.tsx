import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, ArrowDownCircle, CreditCard } from "lucide-react";

export default function BalanceCard() {
  return (
    <Card 
      className="w-full border-white/40"
      style={{
        background: "rgba(255, 255, 255, 0.22)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Wallet Balance</CardTitle>
          <CardDescription>Your available funds</CardDescription>
        </div>
        <CreditCard className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-primary">$1,250.75</div>
        <p className="text-xs text-muted-foreground mt-1">+2.5% from last month</p>
      </CardContent>
      <CardContent className="flex gap-4">
        <Button className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Money
        </Button>
        <Button variant="secondary" className="w-full">
          <ArrowDownCircle className="mr-2 h-4 w-4" /> Withdraw
        </Button>
      </CardContent>
    </Card>
  );
}
