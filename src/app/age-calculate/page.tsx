import { AgeCal } from "@/components/age-calculate";

export default function AgeCalculate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-white flex justify-center text-[30px]">
        Age Calculate
      </div>
      <div className="flex justify-center">
        <AgeCal />
      </div>
      <div className="text-center">
        <a href="/" className="text-white hover:underline">
          Home Page
        </a>
      </div>
    </div>
  );
}
