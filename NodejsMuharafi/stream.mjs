import fs from "fs"

const writer = fs.createWriteStream("target.log")

writer.write("Eko\n");
writer.write("Kurniwan\n");
writer.write("Khennedy\n");
writer.end();
