let saldoBank = 0; // Di buat seperti camelCase

function tambahSaldo() { // Di buat seperti camelCase
    let tambah = parseFloat(window.prompt('Tambah berapa ?')); //Input tambah saldo
    if (isNaN(tambah)) { // jika bukan angka maka akan jalan
        window.alert("Gagal Input")//Hasilnya kan gagal input
        return;
    }else{
        saldoBank += tambah;
        window.alert(`Berhasil Menambah Saldo Sebesar Rp. ${tambah},00`);
    }
    
}
function kurangiSaldo() { // Di buat seperti camelCase
    let kurang = parseFloat(window.prompt('kurangi berapa ?'));//Input kurang saldo
    if (isNaN(kurang)) { // jika bukan angka maka akan jalan
        window.alert("Gagal Input")//Hasilnya kan gagal input
        return;
    }else{
        if (kurang > saldoBank) { //Jika saldo mu kurang dari pengeluaran akan jalan
            window.alert("Saldo Anda kurang") //Hasilnya akan kurang saldo
            return;
        }else{
            saldoBank -= kurang;
            window.alert("Berhaasil Mengurangi saldo");
        }
    }
}
function tampilkanSaldo() { // Di buat seperti camelCase
    window.alert(`Saldo bank mu sebesar Rp. ${saldoBank},00`);
}