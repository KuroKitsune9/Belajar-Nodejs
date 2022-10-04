import fs from "fs"

const writer = fs.createWriteStream("target.log")

writer.write("Eko");
writer.write("Kurniwan");
writer.write("Khennedy");
writer.end();
