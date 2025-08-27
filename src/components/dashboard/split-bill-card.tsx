"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FilePlus2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateSplitGroupForm from "./create-split-group-form";
import { useState } from "react";

export default function SplitBillCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      className="flex flex-col"
      style={{
        background: "rgba(255, 255, 255, 0.22)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
            <CardTitle>Split Bills</CardTitle>
            <CardDescription>Divide expenses with friends</CardDescription>
        </div>
        <Users className="h-6 w-6 text-primary" />
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">
            Easily split restaurant bills, rent, or trip expenses. No more awkward conversations about who owes what.
        </p>
      </CardContent>
      <CardContent>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="w-full">
                <FilePlus2 className="mr-2 h-4 w-4" /> Create a Split
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-card/80 backdrop-blur-xl">
            <DialogHeader>
              <DialogTitle>Create New Split Group</DialogTitle>
              <DialogDescription>
                Enter the details for your new group to start splitting bills.
              </DialogDescription>
            </DialogHeader>
            <CreateSplitGroupForm setDialogOpen={setIsOpen} />
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
