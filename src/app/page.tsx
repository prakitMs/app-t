"use client";
import { BirthdayCal } from "@/components/birthday-calculator";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div>
      <BirthdayCal />
      <div>
        <Toaster />
      </div>
    </div>
  );
}
