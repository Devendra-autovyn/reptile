import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GlowingEffect } from "../ui/glowing-effect";

const transactions = [
  {
    name: "Spotify",
    type: "Subscription",
    amount: -9.99,
    avatar: "S",
    image: "https://picsum.photos/100/100?grayscale&blur=2",
    dataAiHint: "music logo",
  },
  {
    name: "Alice Johnson",
    type: "Transfer",
    amount: 250,
    avatar: "AJ",
    image: "https://picsum.photos/101",
    dataAiHint: "person portrait",
  },
  {
    name: "Amazon",
    type: "Purchase",
    amount: -45.5,
    avatar: "A",
    image: "https://picsum.photos/100/100?grayscale",
    dataAiHint: "shopping logo",
  },
  {
    name: "Work Salary",
    type: "Deposit",
    amount: 2200,
    avatar: "W",
    image: "https://picsum.photos/100/100?blur=2",
    dataAiHint: "company building",
  },
  {
    name: "Bob Williams",
    type: "Transfer",
    amount: -100,
    avatar: "BW",
    image: "https://picsum.photos/102",
    dataAiHint: "man face",
  },
];

export default function RecentTransactions() {
  return (
    <div className="relative h-full  rounded-lg md:rounded-3xl md:p-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        borderWidth={2}
        inactiveZone={0.01}
      />
      <Card
        style={{
          background: "rgba(255, 255, 255, 0.22)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
        }}
      >
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>
            An overview of your latest activity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((tx, index) => (
              <div key={index} className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={tx.image}
                    alt={tx.name}
                    data-ai-hint={tx.dataAiHint}
                  />
                  <AvatarFallback>{tx.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">{tx.name}</p>
                  <p className="text-sm text-muted-foreground">{tx.type}</p>
                </div>
                <div
                  className={`font-medium ${
                    tx.amount > 0 ? "text-green-600" : "text-foreground"
                  }`}
                >
                  {tx.amount > 0
                    ? `+$${tx.amount.toFixed(2)}`
                    : `-$${Math.abs(tx.amount).toFixed(2)}`}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
