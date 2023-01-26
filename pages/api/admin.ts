import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  // redirect
  res.redirect("/admin");
};
