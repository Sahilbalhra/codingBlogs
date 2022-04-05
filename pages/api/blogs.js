// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  // res.status(200).json(data);
  let myFiles;
  let allblogs = [];

  for (let index = 0; index < data.length; index++) {
    let item = data[index];
    // console.log(item);
    myFiles = await fs.promises.readFile("blogdata/" + item, "utf-8");
    // console.log(myFiles);
    allblogs.push(JSON.parse(myFiles));
  }
  res.status(200).json(allblogs);
}
