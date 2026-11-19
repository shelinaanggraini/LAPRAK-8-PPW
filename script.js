// ===============================
// MENU NAVIGASI
// ===============================

function showSection(sectionId, button) {
    let sections = document.querySelectorAll(".section");
    let buttons = document.querySelectorAll(".menu-btn");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
    button.classList.add("active");
}


// ===============================
// GANJIL / GENAP
// ===============================

function cekGanjilGenap() {
    // Menggunakan var
    var input = document.getElementById("angkaGanjilGenap").value;
    var hasil = document.getElementById("hasilGanjilGenap");

    if (input === "") {
        hasil.innerHTML = "Silakan masukkan angka terlebih dahulu.";
        hasil.classList.add("show");
        return;
    }

    // Menggunakan let
    let angka = parseInt(input);

    // Menggunakan const
    const pesan = angka % 2 === 0 ? "Genap" : "Ganjil";

    hasil.innerHTML = "Angka " + angka + " merupakan bilangan " + pesan + ".";
    hasil.classList.add("show");
}


// ===============================
// OPERASI MATEMATIKA
// ===============================

function ambilAngka() {
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;

    if (angka1 === "" || angka2 === "") {
        tampilkanHasil("Silakan masukkan kedua angka terlebih dahulu.");
        return null;
    }

    return {
        a: parseFloat(angka1),
        b: parseFloat(angka2)
    };
}

function tampilkanHasil(pesan) {
    let hasil = document.getElementById("hasilKalkulator");
    hasil.innerHTML = pesan;
    hasil.classList.add("show");
}


// PENJUMLAHAN
function penjumlahan() {
    let data = ambilAngka();

    if (data === null) return;

    let hasil = data.a + data.b;

    tampilkanHasil(
        data.a + " + " + data.b + " = " + hasil
    );
}


// PENGURANGAN
function pengurangan() {
    let data = ambilAngka();

    if (data === null) return;

    let hasil = data.a - data.b;

    tampilkanHasil(
        data.a + " - " + data.b + " = " + hasil
    );
}


// PERKALIAN
function perkalian() {
    let data = ambilAngka();

    if (data === null) return;

    let hasil = data.a * data.b;

    tampilkanHasil(
        data.a + " × " + data.b + " = " + hasil
    );
}


// PEMBAGIAN
function pembagian() {
    let data = ambilAngka();

    if (data === null) return;

    if (data.b === 0) {
        tampilkanHasil("Angka tidak bisa dibagi dengan 0.");
        return;
    }

    let hasil = data.a / data.b;

    tampilkanHasil(
        data.a + " ÷ " + data.b + " = " + hasil
    );
}


// ===============================
// TEBAK ANGKA
// ===============================

let angkaRahasia = Math.floor(Math.random() * 10) + 1;
console.log("Angka rahasia:", angkaRahasia);
let percobaan = 0;
let gameSelesai = false;


function cekTebakan() {
    let input = document.getElementById("tebakan").value;
    let hasil = document.getElementById("hasilTebakan");

    if (input === "") {
        hasil.innerHTML = "Masukkan angka tebakan terlebih dahulu.";
        hasil.classList.add("show");
        return;
    }

    let tebakan = parseInt(input);

    if (tebakan < 1 || tebakan > 10) {
        hasil.innerHTML = "Masukkan angka antara 1 sampai 10.";
        hasil.classList.add("show");
        return;
    }

    if (gameSelesai) {
        hasil.innerHTML = "Permainan sudah selesai. Silakan tekan tombol Ulangi.";
        hasil.classList.add("show");
        return;
    }

    percobaan++;

    document.getElementById("jumlahPercobaan").innerHTML = percobaan;

    if (tebakan === angkaRahasia) {
        hasil.innerHTML = "Tebakan benar! Angka rahasianya adalah " +
            angkaRahasia + ". Kamu berhasil dalam " + percobaan + " percobaan.";
        gameSelesai = true;
    } 
    else if (tebakan < angkaRahasia) {
        hasil.innerHTML = "Tebakan terlalu kecil. Coba angka yang lebih besar.";
    } 
    else {
        hasil.innerHTML = "Tebakan terlalu besar. Coba angka yang lebih kecil.";
    }

    hasil.classList.add("show");

    document.getElementById("tebakan").value = "";
}


// MENGULANG PERMAINAN
function ulangGame() {
    angkaRahasia = Math.floor(Math.random() * 10) + 1;
    percobaan = 0;
    gameSelesai = false;

    document.getElementById("jumlahPercobaan").innerHTML = "0";
    document.getElementById("tebakan").value = "";

    let hasil = document.getElementById("hasilTebakan");

    hasil.innerHTML = "Permainan baru dimulai. Silakan tebak angka.";
    hasil.classList.add("show");
}