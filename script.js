const scriptURL = "https://script.google.com/macros/s/AKfycbyMuUXlEudKs4iMeQQgveOCRTXpHEVdLTzOo_-_4B1lcsQWOKojRO95uxr-n3ey3HYt/exec";

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


