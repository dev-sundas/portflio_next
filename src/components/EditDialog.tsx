import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = { open: boolean; setopen: (open: boolean) => void };

export default function EditDialog({ open, setopen }: Props) {
  return (
    <div>
      <Dialog open={open} onOpenChange={setopen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your CV</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
