var nama = "ahmad"
var gaji = 4500000;
var transport = 10000;
var kerja = 24;
var jumltransport = transport * kerja
var infak = 50000;
var bpjs = 250000;
var pajak =  2.5 * gaji / 100;
var Total1 = pajak + bpjs + infak
var Total2 = gaji - Total1 + jumltransport

console.log("===================") +"<br>"
console.log("Gaji Kotor = " + gaji) 
console.log("===================") +"<br>"
console.log("Potongan pajak 2,5%= " + pajak)
console.log("Potongan BPJS =" + bpjs)
console.log("Potongn Infak = " + infak);
console.log("===================") +"<br>"
console.log("Total Potongan = "+ Total1)
console.log("===================") +"<br>"
console.log("Tunjangan transport = " + transport)
console.log("Total Hari Kerja = " + kerja)
console.log("===================") +"<br>"
console.log("Total Tunjangan = " + jumltransport)
console.log("===================") +"<br>"
console.log("Perhitungan Gaji:") +"<br>"
console.log("(Gaji kotor - Potongan) + Tunjangan")
console.log(gaji + "-" + Total1 + "+" + jumltransport)
console.log("===================") +"<br>"
console.log("Gaji Bersih = " + Total2)