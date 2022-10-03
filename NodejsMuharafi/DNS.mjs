import dns from "dns/peromises";

const addres = await dns.lookup("www.google.com");

console.info(addres.addres);
console.info(addres.family);