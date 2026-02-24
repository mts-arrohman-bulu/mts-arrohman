const scriptURL = "https://script.google.com/macros/s/AKfycbx9h0DYD_f7KOeaVCD5nKdecQdMwWdGfMfJsZNrOtsyA4wZO23bkSCFAG3qIYJ-19GCjA/exec";

document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("ppdbForm");

  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();

      fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => response.text())
      .then(nomor => {

        const query = new URLSearchParams(new FormData(form)).toString();
        window.location.href = "cetak.html?no=" + nomor + "&" + query;

      })
      .catch(error => {
        alert("Terjadi kesalahan.");
      });
    });
  }

});
const today = new Date();

const options = { 
  day: '2-digit', 
  month: 'long', 
  year: 'numeric' 
};

document.getElementById("tanggal-cetak").innerText =
  "Bulu, " + today.toLocaleDateString("id-ID", options);

document.getElementById("nama-ttd").innerText =
  params.get("nama");

