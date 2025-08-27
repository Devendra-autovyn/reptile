import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const groups = [
  {
    id: "group1",
    name: "Weekend Trip",
    members: ["Alice", "Bob", "You"],
    transactions: [
      { description: "Groceries", amount: 45.50, paidBy: "You" },
      { description: "Gas", amount: 30.00, paidBy: "Bob" },
      { description: "Dinner", amount: 75.00, paidBy: "Alice" },
    ]
  },
  {
    id: "group2",
    name: "Apartment Rent",
    members: ["Charlie", "You"],
    transactions: [
        { description: "Monthly Rent", amount: 1200.00, paidBy: "You" },
    ]
  },
];

export default function MyGroups() {
  return (
    <div className="space-y-4">
        <Accordion type="single" collapsible className="w-full">
            {groups.map((group) => (
                <AccordionItem value={group.id} key={group.id}>
                    <AccordionTrigger>{group.name}</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-sm mb-2">Members</h4>
                                <div className="flex flex-wrap gap-2">
                                    {group.members.map((member) => (
                                        <Badge key={member} variant="secondary">{member}</Badge>
                                    ))}
                                </div>
                            </div>
                             <div>
                                <h4 className="font-semibold text-sm mb-2">Transactions</h4>
                                <ul className="space-y-2">
                                    {group.transactions.map((tx, index) => (
                                       <li key={index} className="flex justify-between items-center text-sm">
                                            <span>{tx.description}</span>
                                            <span className="font-mono text-muted-foreground">${tx.amount.toFixed(2)}</span>
                                       </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
  );
}
