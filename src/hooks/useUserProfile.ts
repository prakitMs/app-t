import { useQuery } from "@tanstack/react-query";

interface User {
  id: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  // Add more fields based on your actual user schema
}

const fetchUserProfile = async (): Promise<User> => {
  const res = await fetch("/api/user-profile"); // adjust this path
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.error || "Failed to fetch user");
  }
  return res.json();
};

export const useGetUserProfile = () => {
  return useQuery<User, Error>({
    queryKey: ["user-profile"],
    queryFn: fetchUserProfile,
  });
};
