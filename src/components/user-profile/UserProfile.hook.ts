"use client";
import { useGetUserProfile } from "@/hooks/useUserProfile";

export const useUserProfile = () => {
  const { data: user, isLoading, error } = useGetUserProfile();

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };
  const getNames = (name: string) => {
    return `${name.charAt(0)}`.toUpperCase() + `${name.slice(1)}`.toLowerCase();
  };

  return {
    userData: user,
    isLoading,
    error,
    getInitials,
    getNames,
  };
};
