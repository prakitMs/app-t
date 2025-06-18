// pages/api/register.ts or app/api/register/route.ts (for App Router)

import { dbClient } from "@/lib/dbClient";
import { hash } from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password, firstName, lastName, phone } = req.body;

  if (!email || !password || !firstName || !lastName || !phone) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const existingUser = await dbClient.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await dbClient.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone,
      },
    });

    return res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
