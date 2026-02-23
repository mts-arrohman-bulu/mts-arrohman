const scriptURL = "https://script.google.com/macros/s/AKfycbyTy4yst0mTuk_p6MvdIU2Nsh1E0ukWNhJgvbh3kbrRAt_AD9aw_NeYdmFGpPQrVq1GEA/exec";

const form = document.getElementById("ppdbForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form)
    })
    .then(response => response.text())
    .then(data => {
  alert("Response dari server: " + data);
})
    .catch(error => {
      alert("Terjadi kesalahan!");
      console.error(error);
    });
  });
}



