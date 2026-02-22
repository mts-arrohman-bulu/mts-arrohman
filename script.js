const scriptURL = "PASTE_URL_EXEC_KAMU_DI_SINI";

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

