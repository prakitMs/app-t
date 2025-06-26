import { TaskTracker } from "@/components/task-tracker";
import Link from "next/link";
import { RiTodoLine } from "react-icons/ri";

export default function TaskTacker() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-white text-3xl font-bold flex justify-center p-2">
        <RiTodoLine className="m-1 text-3xl" />
        To-Do List
      </div>

      <main className="flex justify-center px-4">
        <div className="w-full  space-y-4">
          <TaskTracker />
          <div className="text-center">
            <Link href="/" className="text-white hover:underline">
              Home Page
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
