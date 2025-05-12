import { RemoveDialogue } from "@/components/remove-dialogue";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExternalLinkIcon, MoreVertical, TrashIcon } from "lucide-react";
import { Id } from "../../../convex/_generated/dataModel";

interface DocumentMenuProps {
  documentId: Id<"documents">;
  onNewTabClick: (id: string) => void;
  title: string;
}

export const DocumentMenu = ({
  documentId,
  onNewTabClick,
  title,
}: DocumentMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full cursor-pointer"
        >
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <RemoveDialogue documentId={documentId}>
          <DropdownMenuItem
            onClick={(e) => e.stopPropagation()}
            onSelect={(e) => e.preventDefault()}
          >
            <TrashIcon className="mr-2 size-4" />
            Remove
          </DropdownMenuItem>
        </RemoveDialogue>
        <DropdownMenuItem onClick={() => onNewTabClick(documentId)}>
          <ExternalLinkIcon className="mr-2 size-4" />
          Open in a new tab
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
