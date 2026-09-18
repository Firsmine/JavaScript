/*
Operator aritmatika digunakan di operasi matematika yang melibatkan data dengan tipe number.

Operator	Deskripsi
+	Penjumlahan
-	Pengurangan
*	Perkalian
/	Pembagian
**	Eksponen (pangkat)
%	Modulus (menghasilkan sisa hasil pembagian)
++	Increment (menambah 1)
--	Decrement (mengurangi 1)
*/

// Penjumlahan
let bilanganA = 10;
let bilanganB = 3;

console.log(bilanganA + bilanganB); // Output: 13

// Pengurangan
let bilangan1_1 = 10;
let bilangan2_1 = 3;
console.log(bilangan1 - bilangan2); // Output: 7

// Perkalian
let bilangan1_2 = 10;
let bilangan2_2 = 3;
console.log(bilangan1 * bilangan2); // Output: 30

// Pembagian
let bilangan1_3 = 10;
let bilangan2_3 = 3;
console.log(bilangan1 / bilangan2); // Output: 3.3333333333333335

// Eksponen (Pangkat)
let bilangan1_4 = 10;
let bilangan2_4 = 3;
console.log(bilangan1 ** bilangan2); // Output: 1000

// Modulus
let bilangan1_5 = 10;
let bilangan2_5 = 3;
console.log(bilangan1 % bilangan2); // Output: 1

// Increment (Tambah 1)
let bilangan1 = 10;
bilangan1++;
console.log(bilangan1); // Output: 11
// Contoh operasi di atas apabila dituliskan tanpa operator increment akan sama seperti ini:
let bilangan2 = 10;
bilangan2 = bilangan2 + 1;
console.log(bilangan2); // output: 11

// Decrement (Kurang 1)
let bilangan3 = 10;
bilangan3--;
console.log(bilangan3); // output: 9
// Contoh operasi di atas apabila dituliskan tanpa operator decrement akan sama seperti ini:
let bilangan = 10;
bilangan = bilangan - 1;
console.log(bilangan); // output: 9
