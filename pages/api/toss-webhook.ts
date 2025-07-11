
export default async function handler(req, res) {
  const { status, customerKey } = req.body;
  if (status === "DONE") {
    console.log("PRO 전환:", customerKey);
  }
  res.status(200).json({ ok: true });
}
