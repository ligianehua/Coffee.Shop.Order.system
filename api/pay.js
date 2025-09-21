export default async function handler(req, res) {
  if (req.method === "POST") {
    const { item, price } = req.body;
    res.status(200).json({ success: true, item, price });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}