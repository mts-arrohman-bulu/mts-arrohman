const scriptURL = "https://script.google.com/macros/s/AKfycbxJ6Qj93fwIyPKZ2ZUjR1jIn7n_9cpurMvZffayuyUNWX0zp6DjvkUCNvVGO0fRRG7-3w/exec";

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
      alert(data);
      form.reset();
    })
    .catch(error => {
      alert("Terjadi kesalahan");
      console.error(error);
    });
  });
}
