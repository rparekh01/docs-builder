"use client";

import { useMutation } from "convex/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { Id } from "../../convex/_generated/dataModel";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface RemoveDialogueProps {
  documentId: Id<"documents">;
  children: React.ReactNode;
}

export const RemoveDialogue = ({
  documentId,
  children,
}: RemoveDialogueProps) => {
  const router = useRouter();
  const remove = useMutation(api.documents.removeById);
  const [isRemoving, setIsRemoving] = useState(false);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      <AlertDialogContent onClick={(e) => e.stopPropagation()}>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            document.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isRemoving}
            onClick={async (e) => {
              e.stopPropagation();
              setIsRemoving(true);
              remove({ id: documentId })
                .catch((e) => toast.error("Something went wrong", e))
                .then(() => {
                  router.push("/");
                  toast.success("Document deleted");
                })
                .finally(() => {
                  setIsRemoving(false);
                });
            }}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
