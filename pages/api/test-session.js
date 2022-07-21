import { getSession, useSession } from "next-auth/react";
const handler = async (req, res) => {
  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ error: "Unauthinticated user" });
  } else {
    res.status(200).json({ message: "Success", session });
  }
};

export default handler;
