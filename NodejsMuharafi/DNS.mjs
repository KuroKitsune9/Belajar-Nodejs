import dns from "dns/peromises";

const ip = await dns.lookup("www.google.com");

console.info(ip);