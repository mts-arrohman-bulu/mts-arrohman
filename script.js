alert("SCRIPT TERLOAD");
document.addEventListener("DOMContentLoaded", function () {
  const scriptURL = "PASTE_URL_WEBAPP_BARU_DI_SINI";
  const form = document.getElementById("ppdbForm");

  if (form) {

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          nama: document.getElementById("nama").value,
          asal: document.getElementById("asal").value,
          jk: document.getElementById("jk").value,
          ortu: document.getElementById("ortu").value,
          hp: document.getElementById("hp").value,
          alamat: document.getElementById("alamat").value
        })
      });

      document.getElementById("notif").innerHTML = "Pendaftaran berhasil!";
      form.reset();
    });

  }

});

