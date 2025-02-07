"use client";

import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function TrialBanner() {
  return (
    <div className="fixed left-0 right-0 top-0 z-[9999] flex justify-center bg-cyan-900 px-1 py-2 text-white">
      <AlertTriangle className="mr-1 hidden h-4 w-4 shrink-0 lg:block" />
      <p className="text-center text-sm">
        Your have 9 days left in your trial. Renew now to continue using the
        platform.
        <Link href="/" className="ml-1 underline">
          Upgrade Account
        </Link>
      </p>
    </div>
  );
}
