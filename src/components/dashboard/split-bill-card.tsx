import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FilePlus2 } from "lucide-react";

export default function SplitBillCard() {
  return (
    <Card
      style={{
        background: "rgba(255, 255, 255, 0.22)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(1.5px)",
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
            <CardTitle>Split Bills</CardTitle>
            <CardDescription>Divide expenses with friends</CardDescription>
        </div>
        <Users className="h-6 w-6 text-primary" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
            Easily split restaurant bills, rent, or trip expenses. No more awkward conversations about who owes what.
        </p>
        <Button className="w-full mt-6">
            <FilePlus2 className="mr-2 h-4 w-4" /> Create a Split
        </Button>
      </CardContent>
    </Card>
  );
}
