import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExternalLinkIcon, MoreVertical } from "lucide-react";

interface DocumentMenuProps {
  documentId: string;
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
        <DropdownMenuItem onClick={() => onNewTabClick(documentId)}>
          <ExternalLinkIcon className="mr-2 size-4" />
          Open in a new tab
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
