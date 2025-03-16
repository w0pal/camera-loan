console.log("Script JavaScript dimuat!");

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("calculateButton");
    
    if (button) {
        button.addEventListener("click", calculateCost);
    } else {
        console.error("Element calculateButton tidak ditemukan!");
    }
});

function calculateCost() {
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;

    if (!startDate || !endDate) {
        alert("Silakan pilih tanggal peminjaman dan pengembalian.");
        return;
    }

    let start = new Date(startDate);
    let end = new Date(endDate);

    if (end < start) {
        alert("Tanggal pengembalian harus setelah tanggal peminjaman!");
        return;
    }

    let diffTime = end - start;
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Hitung jumlah hari
    let costPerDay = 50000; // Harga per hari (misal 50.000 IDR)
    let totalCost = diffDays * costPerDay;

    document.getElementById("totalCost").innerText = totalCost.toLocaleString("id-ID");
}
