import { getSession } from "next-auth/react";

export async function checkAdmin(req, res, next) {
  const session = await getSession({ req });

  if (!session || session.user.role !== "admin") {
    return res.status(403).json({ message: "Access forbidden. Admins only." });
  }

  next();
}
