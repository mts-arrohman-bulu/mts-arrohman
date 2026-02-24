const scriptURL = "https://script.google.com/macros/s/AKfycbx9h0DYD_f7KOeaVCD5nKdecQdMwWdGfMfJsZNrOtsyA4wZO23bkSCFAG3qIYJ-19GCjA/exec";

const form = document.getElementById("ppdbForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => response.text())
.then(nomor => {
  document.getElementById("notif").innerHTML =
    "Pendaftaran berhasil! Nomor Anda: <b>" + nomor + "</b>";
})
    .catch(error => {
      alert("Terjadi kesalahan");
      console.error(error);
    });
  });
}




