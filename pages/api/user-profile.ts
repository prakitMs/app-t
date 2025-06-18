import type { NextApiRequest, NextApiResponse } from "next";
import { dbClient } from "@/lib/dbClient";
import { getToken } from "next-auth/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req });
  if (!token || !token.email) {
    return res.status(401).json({ error: "Unautherlize" });
  }

  const formData = await dbClient.user.findFirst({
    where: { email: token.email },
  });
  return res.json(formData);
}
