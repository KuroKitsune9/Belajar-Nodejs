import dns from "dns/peromises";

const address = await dns.lookup("www.progammerzamannow.com");

console.info(address.addres);
console.info(address.family);