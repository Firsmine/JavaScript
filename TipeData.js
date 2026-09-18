let nama = "Stefanus";
const namaIbuKandung = "Clara";
const umur = 20;
const apakahSudahMenikah = false;
let jumlahAnak;

/* 
Variabel nama bernilai Stefanus dan tipe datanya adalah string. Tipe data string memiliki ciri khas yaitu nilai data dibungkus dengan tanda ' atau ". 
Variabel namaIbuKandung juga memiliki nilai yang bertipe data string Clara.
*/

// Variabel yang dideklarasikan menggunakan kata kunci let dapat diubah nilainya.
// memberi nilai baru kepada variabel nama.
nama = "Albert";

// Variabel yang dideklarasikan menggunakan kata kunci const tidak dapat diubah nilainya; sudah konstan. Jika kita tetap mencoba untuk memberinya nilai seperti di bawah ini, akan muncul error.
namaIbuKandung = "Juliana";
// akan muncul error. Uncaught TypeError: Assignment to constant variable.

// Terdapat 2 pengecualian dalam penggunaan kata kunci const. Variabel yang memiliki tipe data array atau objek bisa diubah nilai element atau propertinya meskipun menggunakan kata kunci const saat dideklarasikan.

/* 
Variabel umur memiliki nilai 20 yang mana termasuk tipe data number. Tipe data ini bisa berupa:
- integer (seperti 1, 2, dan 3)
- float (seperti 3.14, 2.718, dan 1.618)

Variabel apakahSudahMenikah bernilai false dengan tipe data boolean.

Tipe boolean ini terdiri dari 2 nilai:
- true yang bernilai benar
- false yang bernilai salah

variabel jumlahAnak bernilai undefined, karena memang tidak diisi dengan nilai apapun. Jika variabel tidak kita beri sebuah nilai, secara default (standar) ia memiliki nilai undefined.

7 tipe data yang ada dalam JavaScript:
> string - deretan karakter yang diapit oleh sepasang tanda kutip;
> number - bilangan bulat, pecahan, dan lain-lain;
> boolean - nilai benar dari sebuah pernyataan yang dituliskan sebagai true atau false;
> null - sebuah nilai yang berarti kosong atau menunjuk pada nilai yang tidak ada;
> undefined - berbeda dari null, undefined menandakan kondisi variabel yang belum diberi sebuah nilai. Jadi pernyataan "nilai variabel itu adalah undefined" sebenarnya kurang tepat, sebab variabelnya memang tidak mempunyai sebuah nilai;
> symbol - sebuah nilai unik yang dihasilkan tiap kali kita memanggil fungsi Symbol(). Nilai unik ini memiliki beberapa kegunaan seperti memberi nomor identifikasi unik dan berperan sebagai nama properti unik sebuah objek;
> object - sebuah kumpulan pasangan properti dan nilai. Seperti objek dalam kehidupan sehari-hari saja. Misalnya objek Apel memiliki properti warna dengan nilai merah.
*/
