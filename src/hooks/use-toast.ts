// hooks/use-toast.ts (or wherever your toast logic lives)

import { toast as sonnerToast } from "sonner";

export function useToast() {
  return {
    toast: sonnerToast,
  };
}

// Optional re-export if you want direct access to `toast()`
export { sonnerToast as toast };
