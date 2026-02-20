document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("ppdbForm");

    if (form) {  // <- ini penting supaya tidak error di halaman lain

        const scriptURL = "https://script.google.com/macros/s/AKfycbyoWZc1R7HsBhNnaM4segS43sdMDzc4B7w9ylpz1ubLM7QupVyWUBvlGfzPOMtpD2lO-g/exec";

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            fetch(scriptURL, {
                method: "POST",
                body: new FormData(form)
            })
            .then(response => {
                document.getElementById("notif").innerText = "Pendaftaran berhasil!";
                form.reset();
            })
            .catch(error => {
                document.getElementById("notif").innerText = "Terjadi kesalahan!";
            });
        });

    }

});

