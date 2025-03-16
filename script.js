function calculateCost() {
    let startDate = new Date(document.getElementById("startDate").value);
    let endDate = new Date(document.getElementById("endDate").value);

    if (isNaN(startDate) || isNaN(endDate)) {
        alert("Silakan pilih tanggal peminjaman dan pengembalian!");
        return;
    }

    let totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); // Selisih hari
    let cost = 0;

    if (totalDays === 0) {
        cost = 7000; // Jika dikembalikan di hari yang sama
    } else if (totalDays === 1) {
        cost = 12500; // Jika dikembalikan keesokan harinya
    } else {
        cost = 12500 + (totalDays - 1) * 12500; // Hari ketiga dan seterusnya
    }

    document.getElementById("totalCost").textContent = cost.toLocaleString();
}
