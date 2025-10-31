// api/downloads.js
import fs from "fs";
import path from "path";

const filePath = path.resolve("./downloads.json");

export default function handler(req, res) {
  // create file if not exists
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ count: 0 }, null, 2));
  }

  // read, update, and write back
  let data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (req.method === "GET") {
    data.count += 1;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.status(200).json({ value: data.count });
  } else {
    res.status(405).end();
  }
}
