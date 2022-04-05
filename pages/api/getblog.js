import * as fs from "fs";
// http://localhost:3000/api/getblog?slug= blogName

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "No such Blog found" });
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
}
