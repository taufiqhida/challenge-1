let saldoBank = 0; // Di buat seperti camelCase

function tambahSaldo() { // Di buat seperti camelCase
    let tambah = parseFloat(window.prompt('Tambah berapa ?')); //Input tambah salso
    if (tambah === null) { // jika bukan angka maka akan jalan
        window.alert("Gagal Input")//Hasilnya kan gagal input
        return;
    }
    saldoBank += tambah;
}
function kurangiSaldo() { // Di buat seperti camelCase
    let kurang = parseFloat(window.prompt('kurang9 berapa ?'));//Input kurang saldo
    if (kurang > saldoBank) { //Jika saldo mu kurang dari pengeluaran akan jalan
        window.alert("Kurang Saldo") //Hasilnya akan kurang salso
        return;
    }
    if (kurang === null) { // jika bukan angka maka akan jalan
        window.alert("Gagal Input")//Hasilnya kan gagal input
        return;
    }
    saldoBank -= kurang;
}
function tampilkanSaldo() { // Di buat seperti camelCase
    window.alert(`Saldo bank mu sebesar ${saldoBank}`);
}