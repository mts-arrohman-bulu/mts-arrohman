document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("ppdbForm");

    if (form) {  // <- ini penting supaya tidak error di halaman lain

        const scriptURL = "https://script.google.com/macros/s/AKfycbyMuUXlEudKs4iMeQQgveOCRTXpHEVdLTzOo_-_4B1lcsQWOKojRO95uxr-n3ey3HYt/exec";

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',   // ← TAMBAHKAN INI
    body: new URLSearchParams({
        nama: document.getElementById("nama").value,
        asal: document.getElementById("asal").value,
        jk: document.getElementById("jk").value,
        ortu: document.getElementById("ortu").value,
        hp: document.getElementById("hp").value,
        alamat: document.getElementById("alamat").value
    })
})
.then(() => {
    document.getElementById("notif").innerHTML = "Pendaftaran berhasil!";
    document.getElementById("ppdbForm").reset();
})
.catch(() => {
    document.getElementById("notif").innerHTML = "Terjadi kesalahan.";
});



