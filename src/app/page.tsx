"use client";
import { BirthdayCal } from "@/components/birthday-calculator";
import { TaskTracker } from "@/components/task-tracker";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <TaskTracker />
        <BirthdayCal />
      </div>

      <div>
        <Toaster />
      </div>
    </div>
  );
}
