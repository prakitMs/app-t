import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/sign-in", // หน้า sign in ถ้าไม่ได้ login
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/user-profile/:path*"],
};
