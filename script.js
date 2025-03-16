document.getElementById("calculateButton").addEventListener("click", function() {
    let startDateInput = document.getElementById("startDate").value;
    let endDateInput = document.getElementById("endDate").value;

    if (!startDateInput || !endDateInput) {
        alert("Silakan pilih tanggal peminjaman dan pengembalian!");
        return;
    }

    let startDate = new Date(startDateInput);
    let endDate = new Date(endDateInput);

    if (endDate < startDate) {
        alert("Tanggal pengembalian tidak boleh lebih awal dari tanggal peminjaman!");
        return;
    }

    let totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    let cost = 0;

    if (totalDays === 0) {
        cost = 7000;
    } else {
        cost = totalDays * 12500;
    }

    document.getElementById("totalCost").textContent = cost.toLocaleString("id-ID");
});