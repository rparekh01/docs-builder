"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangleIcon } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-rose-100 p-3 rounded-full">
            <AlertTriangleIcon className="size-10 text-rose-600" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Something went wrong
          </h2>
          <p>{error.message}</p>
        </div>
      </div>
      <div className="flex item-center gap-x-3">
        <Button onClick={reset} className="font-emdium">
          Try again
        </Button>
        <Button asChild variant="ghost" className="font-emdium px-6">
          <Link href="/">Go back</Link>
        </Button>
      </div>
    </div>
  );
}
