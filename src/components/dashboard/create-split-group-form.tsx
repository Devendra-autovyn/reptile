"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { X, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  groupName: z.string().min(1, "Group name is required."),
  description: z.string().optional(),
  members: z.array(z.object({ value: z.string().min(1, "Member name cannot be empty.") })).min(1, "At least one member is required."),
});

interface CreateSplitGroupFormProps {
  setDialogOpen: (open: boolean) => void;
}

export default function CreateSplitGroupForm({ setDialogOpen }: CreateSplitGroupFormProps) {
  const { toast } = useToast();
  const [newMember, setNewMember] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      groupName: "",
      description: "",
      members: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "members"
  });

  const handleAddMember = () => {
    if (newMember.trim() !== "") {
      append({ value: newMember.trim() });
      setNewMember("");
    }
  };
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
        title: "Group Created!",
        description: `The group "${values.groupName}" has been successfully created.`,
    });
    setDialogOpen(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="groupName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Group Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Weekend Trip" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="A brief description of the group" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="space-y-2">
            <FormLabel>Group Members</FormLabel>
            <div className="flex gap-2">
                <Input 
                    value={newMember}
                    onChange={(e) => setNewMember(e.target.value)}
                    placeholder="Add member name"
                />
                <Button type="button" onClick={handleAddMember}>
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
             {fields.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {fields.map((field, index) => (
                  <Badge key={field.id} variant="secondary" className="flex items-center gap-1">
                    {field.value}
                    <button type="button" onClick={() => remove(index)} className="rounded-full hover:bg-muted-foreground/20">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
             <FormMessage>{form.formState.errors.members?.message}</FormMessage>
        </div>


        <Button type="submit" className="w-full">Create Group</Button>
      </form>
    </Form>
  );
}
