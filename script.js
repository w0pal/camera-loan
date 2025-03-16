function hitungBiaya() {
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    const isHalfDay = document.getElementById("halfDay").checked;

    if (isNaN(startDate) || isNaN(endDate)) {
        alert("Silakan pilih tanggal peminjaman dan pengembalian!");
        return;
    }

    let totalHari = (endDate - startDate) / (1000 * 60 * 60 * 24);
    let biaya = 0;

    if (isHalfDay) {
        biaya = 7000; // Jika hanya setengah hari
    } else {
        if (totalHari === 1) {
            biaya = 12500; // Jika hanya beda 1 hari berturut-turut
        } else if (totalHari > 1) {
            biaya = totalHari * 12500;
        }
    }

    document.getElementById("hasil").innerText = `Total Biaya: Rp${biaya.toLocaleString()}`;
}
