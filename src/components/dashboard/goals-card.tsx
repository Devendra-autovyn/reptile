import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, Plus } from "lucide-react";
import { GlowingEffect } from "../ui/glowing-effect";

const goals = [
  { name: "Dream Vacation", current: 3500, target: 5000 },
  { name: "New Laptop", current: 800, target: 1500 },
];

export default function GoalsCard() {
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
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Savings Goals</CardTitle>
              <CardDescription>
                Track progress towards your dreams.
              </CardDescription>
            </div>
            <Target className="h-6 w-6 text-primary" />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {goals.map((goal, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{goal.name}</span>
                <span className="text-sm text-muted-foreground">
                  ${goal.current.toLocaleString()} / $
                  {goal.target.toLocaleString()}
                </span>
              </div>
              <Progress value={(goal.current / goal.target) * 100} />
            </div>
          ))}
          <Button variant="outline" className="w-full mt-4">
            <Plus className="mr-2 h-4 w-4" /> Add New Goal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
