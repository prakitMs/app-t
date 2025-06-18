"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, User } from "lucide-react";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { useUserProfile } from "./UserProfile.hook";

const UserProfile = () => {
  const { userData, isLoading, error, getInitials } = useUserProfile();

  if (isLoading) return <p>Loading...</p>;
  if (error || !userData)
    return <p className="text-red-500">Error: {error?.message}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#3d5a80]  to-blue-400 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                {getInitials(userData.firstName ?? "", userData.lastName ?? "")}
              </AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            {userData.firstName} {userData.lastName}
          </h1>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <User className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-700">First Name</p>
              <p className="text-gray-900">{userData.firstName}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <User className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-700">Last Name</p>
              <p className="text-gray-900">{userData.lastName}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Mail className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-700">Email</p>
              <p className="text-gray-900">{userData.email}</p>
            </div>
          </div>
          {userData.phone && (
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <FaPhoneAlt className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Phone</p>
                <p className="text-gray-900">{userData.phone}</p>
              </div>
            </div>
          )}
        </CardContent>
        <button
          onClick={() => signOut({ callbackUrl: "/sign-in" })}
          className="bg-amber-300 hover:bg-amber-100 rounded-2xl ml-40 mr-40 p-3"
        >
          Sign out
        </button>

        <a
          href="/"
          className="text-blue-400 hover:underline flex justify-end p-2 "
        >
          <FaHome className="text-2xl p-1 " />
          home page
        </a>
      </Card>
    </div>
  );
};

export default UserProfile;
