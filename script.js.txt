const scriptURL = "ISI_URL_GOOGLE_APPS_SCRIPT";

document.getElementById("ppdbForm").addEventListener("submit", e => {
    e.preventDefault();

    const data = {
        nama: nama.value,
        asal: asal.value,
        jk: jk.value,
        ortu: ortu.value,
        hp: hp.value,
        alamat: alamat.value
    };

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(() => {
        notif.innerHTML = "✅ Pendaftaran berhasil dikirim";
        e.target.reset();
    })
    .catch(() => {
        notif.innerHTML = "❌ Gagal mengirim data";
    });
});