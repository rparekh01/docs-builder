import { BsCloudCheck, BsCloudSlash } from "react-icons/bs";
import { Id } from "../../../../convex/_generated/dataModel";
import React, { useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { useStatus } from "@liveblocks/react";
import { LoaderIcon } from "lucide-react";
interface DocumentInputProps {
  title: string;
  id: Id<"documents">;
}

export const DocumentInput = ({ title, id }: DocumentInputProps) => {
  const status = useStatus();

  const [value, setValue] = useState(title);
  const [isPending, setIsPending] = useState(false);
  const [isEditiing, setIsEditing] = useState(false);

  const debouncedUpdate = useDebouncedCallback(
    // function
    (newValue: string) => {
      if (newValue === title) {
        return;
      }
      setIsPending(true);
      mutate({ id, title: newValue })
        .then()
        .catch(() => {
          console.warn("something went wrong");
        })
        .finally(() => setIsPending(false));
    },
    // delay in ms
    1000
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsPending(true);
    mutate({ id, title: value })
      .then(() => setIsEditing(false))
      .catch(() => {
        console.warn("something went wrong");
      })
      .finally(() => setIsPending(false));
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const mutate = useMutation(api.documents.updateById);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedUpdate(newValue);
    // TODO Debounced value
  };
  const showLoader =
    isPending || status === "connecting" || status === "reconnecting";
  const showError = status === "disconnected";
  return (
    <div className="flex items-center gap-2">
      {isEditiing ? (
        <form className="relative" onSubmit={handleSubmit}>
          <span className="invisible whitespace=pre px-1.5 text-lg">
            {value || ""}
          </span>
          <input
            ref={inputRef}
            value={value}
            onBlur={() => setIsEditing(false)}
            onChange={onChange}
            className="absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate"
          />
        </form>
      ) : (
        <span
          onClick={() => {
            setIsEditing(true);
            setTimeout(() => {
              inputRef.current?.focus();
            }, 0);
          }}
          className="text-lg px-1.5 cursor-pointer truncate"
        >
          {title}
        </span>
      )}
      {!showError && !showLoader && <BsCloudCheck className="size-4" />}
      {showLoader && (
        <LoaderIcon className="size-4 animate-spin text-muted-foreground" />
      )}
      {showError && <BsCloudSlash className="size-4" />}
    </div>
  );
};
