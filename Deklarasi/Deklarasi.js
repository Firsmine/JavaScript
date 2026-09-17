let namaVariabel1 = "Hellow";
const namaVariabel2 = "World";

/*
1. Menggunakan konvensicamelCase, yaitu menggunakan huruf kecil pada permulaan kata, dan jika nama variabel terdiri dari 2 kata atau lebih, maka kata kedua dan berikutnya diawali dengan huruf besar. (Ini sebenarnya bukan syarat mutlak; hanya kebiasaan. Nanti kalian akan menemukan konvensi lain seperi PascalCase saat belajar JavaScript lebih lanjut);
2. Nama variabel boleh diawali dengan underscore(_), huruf besar (jika diharuskan), dan $.
3. Nama variabel tidak diawali dengan angka, @, *, #, !, %, (), -, +.
4. Tidak boleh menggunakan kata kunci JavaScript seperti boolean, break, else, extends, dan lain-lain.
5. Antara kata pertama dan kata kedua tidak diberi spasi atau dash(-);
6. Karena JavaScript bersifat case-sensitive, maka penamaan juga case-sensitive (jadi variabel hitung dengan variabel Hitung itu berbeda).
*/

// BENAR
let nama;
let tempatTinggal;
let _nomorHandphone;
let $nomorAkunBank;

// SALAH
let makanan pembuka;  // tidak boleh ada spasi
let @username;        // tidak boleh diawali @
let delete;           // delete merupakan kata kunci di js