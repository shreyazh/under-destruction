// api/downloads.js
export default async function handler(req, res) {
  try {
    // Example simple store: use Vercel’s KV, or a global variable (not ideal but shows concept)
    // For demo, we’ll simulate a store. Replace with actual cloud store.
    const STORE_KEY = "downloads_count";
    // pseudo: let count = await getStore(STORE_KEY) || 0;
    // count++;
    // await setStore(STORE_KEY, count);

    const count = 123; // replace with real read/write logic

    res.setHeader("Access-Control-Allow-Origin", "*");  // or your site domain
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
      // preflight
      return res.status(200).end();
    }

    if (req.method === "GET") {
      return res.status(200).json({ value: count });
    } else {
      res.setHeader("Allow", "GET,OPTIONS");
      return res.status(405).json({ error: "Method not allowed" });
    }
  } catch (err) {
    console.error("Error in /api/downloads:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
