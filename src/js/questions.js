const questions = [

{
    question: "2 + 3 = ?",
    choices: ["4", "5", "6", "7"],
    answer: 1
},
// {
//     question: "5 × 4 = ?",
//     choices: ["15", "20", "25", "30"],
//     answer: 1
// },
// {
//     question: "10 − 6 = ?",
//     choices: ["2", "3", "4", "5"],
//     answer: 2
// },
// {
//     question: "12 ÷ 3 = ?",
//     choices: ["2", "3", "4", "6"],
//     answer: 2
// },
// {
//     question: "7 + 8 = ?",
//     choices: ["13", "14", "15", "16"],
//     answer: 2
// },
// {
//     question: "9 × 2 = ?",
//     choices: ["16", "17", "18", "19"],
//     answer: 2
// },
// {
//     question: "20 − 9 = ?",
//     choices: ["9", "10", "11", "12"],
//     answer: 2
// },
// {
//     question: "6 × 6 = ?",
//     choices: ["30", "32", "34", "36"],
//     answer: 3
// },
// {
//     question: "15 ÷ 5 = ?",
//     choices: ["2", "3", "4", "5"],
//     answer: 1
// },
// {
//     question: "8 + 12 = ?",
//     choices: ["18", "19", "20", "21"],
//     answer: 2
// },
// {
//     question: "25 − 7 = ?",
//     choices: ["16", "17", "18", "19"],
//     answer: 2
// },
// {
//     question: "4 × 9 = ?",
//     choices: ["32", "34", "36", "38"],
//     answer: 2
// },
// {
//     question: "14 ÷ 2 = ?",
//     choices: ["6", "7", "8", "9"],
//     answer: 1
// },
// {
//     question: "3² = ?",
//     choices: ["6", "7", "8", "9"],
//     answer: 3
// },
// {
//     question: "10² = ?",
//     choices: ["10", "50", "100", "200"],
//     answer: 2
// },
// {
//     question: "100 ÷ 10 = ?",
//     choices: ["5", "10", "15", "20"],
//     answer: 1
// },
{
    question: "11 + 9 = ?",
    choices: ["18", "19", "20", "21"],
    answer: 2
},
{
    question: "6 + 14 = ?",
    choices: ["18", "19", "20", "21"],
    answer: 2
},
{
    question: "30 − 12 = ?",
    choices: ["16", "18", "20", "22"],
    answer: 1
},
{
    question: "5 × 5 = ?",
    choices: ["20", "25", "30", "35"],
    answer: 1
},
{
    question: "49 ÷ 7 = ?",
    choices: ["5", "6", "7", "8"],
    answer: 2
},
{
    question: "18 + 7 = ?",
    choices: ["23", "24", "25", "26"],
    answer: 2
},
{
    question: "16 − 9 = ?",
    choices: ["5", "6", "7", "8"],
    answer: 2
},
{
    question: "8 × 3 = ?",
    choices: ["21", "22", "23", "24"],
    answer: 3
},
{
    question: "36 ÷ 6 = ?",
    choices: ["4", "5", "6", "7"],
    answer: 2
},

// {
//     question: "Planet terdekat dengan matahari adalah?",
//     choices: ["Venus", "Merkurius", "Bumi", "Mars"],
//     answer: 1
// },
// {
//     question: "Makhluk hidup bernapas menggunakan?",
//     choices: ["Air", "Oksigen", "Tanah", "Api"],
//     answer: 1
// },
// {
//     question: "Bagian tumbuhan tempat fotosintesis?",
//     choices: ["Akar", "Batang", "Daun", "Bunga"],
//     answer: 2
// },
// {
//     question: "Air mendidih pada suhu?",
//     choices: ["50°C", "75°C", "100°C", "150°C"],
//     answer: 2
// },
// {
//     question: "Hewan yang bertelur disebut?",
//     choices: ["Vivipar", "Ovipar", "Ovovivipar", "Herbivora"],
//     answer: 1
// },
// {
//     question: "Matahari adalah?",
//     choices: ["Planet", "Bintang", "Satelit", "Asteroid"],
//     answer: 1
// },
// {
//     question: "Indra untuk melihat adalah?",
//     choices: ["Hidung", "Telinga", "Mata", "Kulit"],
//     answer: 2
// },
// {
//     question: "Manusia bernapas dengan?",
//     choices: ["Insang", "Paru-paru", "Kulit", "Sirip"],
//     answer: 1
// },
// {
//     question: "Air berubah menjadi es disebut?",
//     choices: ["Menguap", "Mencair", "Membeku", "Mengembun"],
//     answer: 2
// },
// {
//     question: "Energi matahari disebut energi?",
//     choices: ["Listrik", "Kimia", "Surya", "Panas bumi"],
//     answer: 2
// },

{
    question: "Ibu kota Indonesia adalah?",
    choices: ["Bandung", "Jakarta", "Surabaya", "Medan"],
    answer: 1
},
{
    question: "Presiden pertama Indonesia adalah?",
    choices: ["Soeharto", "Habibie", "Soekarno", "Jokowi"],
    answer: 2
},
{
    question: "Bendera Indonesia berwarna?",
    choices: ["Merah Putih", "Putih Merah", "Merah Biru", "Putih Biru"],
    answer: 0
},
{
    question: "Sila pertama Pancasila adalah?",
    choices: ["Kemanusiaan", "Persatuan", "Ketuhanan", "Keadilan"],
    answer: 2
},
{
    question: "Alat tukar yang sah adalah?",
    choices: ["Barang", "Uang", "Emas", "Perak"],
    answer: 1
},
{
    question: "Indonesia berada di benua?",
    choices: ["Asia", "Eropa", "Afrika", "Amerika"],
    answer: 0
},
{
    question: "Lagu kebangsaan Indonesia adalah?",
    choices: ["Indonesia Raya", "Garuda Pancasila", "Tanah Airku", "Bagimu Negeri"],
    answer: 0
},
{
    question: "Jumlah provinsi di Indonesia (2024)?",
    choices: ["34", "36", "38", "40"],
    answer: 2
},
{
    question: "Alat komunikasi jarak jauh?",
    choices: ["Radio", "Telepon", "Koran", "Buku"],
    answer: 1
},
{
    question: "Hari kemerdekaan Indonesia?",
    choices: ["17 Juli", "17 Agustus", "18 Agustus", "20 Agustus"],
    answer: 1
},
{
    question: "Pekerjaan petani menghasilkan?",
    choices: ["Ikan", "Padi", "Kayu", "Batu"],
    answer: 1
},
{
    question: "Tempat jual beli disebut?",
    choices: ["Sekolah", "Pasar", "Rumah", "Kantor"],
    answer: 1
},

{
    question: "Mana yang paling besar?",
    choices: ["10", "20", "5", "15"],
    answer: 1
},
// {
//     question: "Jika hari ini Senin, besok adalah?",
//     choices: ["Minggu", "Selasa", "Rabu", "Kamis"],
//     answer: 1
// },
// {
//     question: "Urutan setelah B adalah?",
//     choices: ["A", "C", "D", "E"],
//     answer: 1
// },
// {
//     question: "Semua burung bisa?",
//     choices: ["Berenang", "Terbang", "Berjalan", "Tidur"],
//     answer: 1
// },
// {
//     question: "Pagi → Siang → ?",
//     choices: ["Malam", "Sore", "Subuh", "Dini hari"],
//     answer: 1
// },
// {
//     question: "Api itu?",
//     choices: ["Dingin", "Basah", "Panas", "Padat"],
//     answer: 2
// },
// {
//     question: "1 jam = ? menit",
//     choices: ["30", "45", "60", "90"],
//     answer: 2
// },
// {
//     question: "Lawan kata besar adalah?",
//     choices: ["Tinggi", "Lebar", "Kecil", "Panjang"],
//     answer: 2
// },
// {
//     question: "Bentuk bola adalah?",
//     choices: ["Datar", "Kotak", "Bulat", "Segitiga"],
//     answer: 2
// },
// {
//     question: "Alat untuk menulis?",
//     choices: ["Penghapus", "Pensil", "Penggaris", "Buku"],
//     answer: 1
// },
// {
//     question: "Warna lampu lalu lintas untuk berhenti?",
//     choices: ["Hijau", "Kuning", "Merah", "Biru"],
//     answer: 2
// },
{
    question: "Siang hari matahari berada di?",
    choices: ["Barat", "Timur", "Atas", "Bawah"],
    answer: 2
},
{
    question: "Bunyi hujan adalah?",
    choices: ["Keras", "Basah", "Nyaring", "Dingin"],
    answer: 0
},
{
    question: "Manusia berjalan dengan?",
    choices: ["Tangan", "Kaki", "Kepala", "Bahu"],
    answer: 1
},
{
    question: "Air rasanya?",
    choices: ["Manis", "Asin", "Asam", "Tawar"],
    answer: 3
},
{
    question: "Gula rasanya?",
    choices: ["Asin", "Pahit", "Manis", "Asam"],
    answer: 2
},
{
    question: "Jeruk rasanya?",
    choices: ["Manis", "Asam", "Asin", "Pahit"],
    answer: 1
},
{
    question: "Kopi tanpa gula rasanya?",
    choices: ["Manis", "Asin", "Pahit", "Asam"],
    answer: 2
}

];
